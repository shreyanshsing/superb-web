import ConnectionsList from "@/components/profile/connectionsList";
import InfoContainer from "@/components/profile/infoContainer";
import PostsSection from "@/components/profile/postsTabs";
import { Grid2 } from "@mui/material";

export default function Profile() {
    return (
        <Grid2 container spacing={2}>
            <Grid2 size={8} sx={{overflowY: "scroll", maxHeight: "95vh", overflowX: "hidden"}}>
                <InfoContainer isOwnProfile={true} />
                <PostsSection />
            </Grid2>
            <Grid2 size={4}>
                <ConnectionsList />
            </Grid2>
        </Grid2>
    )
}