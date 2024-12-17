import { useCallback } from "react";
import { trpc } from "@trpc-client/client";
import { useSnackbar } from "@components/snackbar/Provider";

const useImageUpload = () => {
    const { showSnackbar } = useSnackbar();
    const { mutateAsync } = trpc.uploadFile.useMutation();

    const prepareUpload = useCallback((folder: string, file: File) => {
        const payload = {
            folder: folder,
            fileName: file.name,
            fileType: file.type,
        };
        return payload;
    }, []);

    const getSignedUrl = async (folder: string, file: File) => {
        try {
            const { url, key } = await mutateAsync(prepareUpload(folder, file));
            return {url, key};
        } catch (error) {
            console.error('Error getting signed URL:', error);
            showSnackbar("Error getting signed URL", "error");
            return null;
        }
    }

    const uploadFile = async (url: string, file: File) => {
        try {
            const res = await fetch(url, {
                method: "PUT",
                body: file,
                headers: {
                    "Content-Type": file.type,
                },
            });
            if (!res.ok) {
                throw new Error(`Upload failed with status: ${res.statusText}`);
            }
            showSnackbar("File uploaded successfully", "success");
        } catch (error) {
            console.error('Error uploading file:', error);
            showSnackbar("Error uploading file", "error");
        }
    }

    const getPublicUrl = (key: string) => {
        return `https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.amazonaws.com/${key}`;
    }

    return { getSignedUrl, uploadFile, getPublicUrl };
}

export default useImageUpload;