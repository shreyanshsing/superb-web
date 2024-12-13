import { S3Client, PutObjectCommand, PutObjectCommandInput } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ''
    },
    logger: console
});

const bucketName = process.env.AWS_BUCKET_NAME || '';

interface FileSchema {
    fileName: string;
    folder: string;
    fileType: string;
    // Add other properties if needed
}

export const generateUploadFileUrl = async (file: FileSchema): Promise<any> => {
    const { folder, fileName, fileType } = file;
    const path = `${folder}/${fileName}`;

    const params: PutObjectCommandInput = {
        Bucket: bucketName,
        Key: path,
        ContentType: fileType
    };

    try {
        const command = new PutObjectCommand(params);
        const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
        return url; // Return the presigned URL to the client
    } catch (error) {
        console.error(error);
        return error;
    }
}