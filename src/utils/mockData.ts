import { UserState } from "@/store/states";
import { CardImage1, CardImage2, CardImage3 } from "./contants";
import { POST_MEDIA_CATEGORY } from "./enums";

export const mockUserData: UserState[] = [
    {
        id: "1",
        name: "Jane Smith",
        headline: "Lead Product Designer at Apple Inc.",
        location: "San Francisco, California",
        followers: 6474,
        following: 500,
        avatar: "/assets/images/user.png",
        wallpaper: "/assets/images/wallpaper2.jpg",
        email: "test@gmail.com",
        bio: "",
        country: "",
        communities: []
    },
    {
        id: "2",
        name: "John Doe",
        headline: "Lead Product Designer at Apple Inc.",
        location: "San Francisco, California",
        followers: 6474,
        following: 500,
        avatar: "/assets/images/user.png",
        wallpaper: "/assets/images/wallpaper1.jpg",
        email: "test@gmail.com",
        bio: "",
        country: "",
        communities: []
    },
    {
        id: "3",
        name: "Jesselyn Wang",
        headline: "Lead Product Designer at Apple Inc.",
        location: "San Francisco, California",
        followers: 6474,
        following: 500,
        avatar: "/assets/images/user.png",
        wallpaper: "/assets/images/wallpaper2.jpg",
        email: "test@gmail.com",
        bio: "",
        country: "",
        communities: []
    },
    {
        id: "4",
        name: "John Doe",
        headline: "Lead Product Designer at Apple Inc.",
        location: "San Francisco, California",
        followers: 6474,
        following: 500,
        avatar: "/assets/images/user.png",
        wallpaper: "/assets/images/wallpaper1.jpg",
        email: "test@gmail.com",
        bio: "",
        country: "",
        communities: []
    },
    {
        id: "5",
        name: "Alice Johnson",
        headline: "Senior Software Engineer at Google",
        location: "Mountain View, California",
        followers: 8000,
        following: 300,
        avatar: "/assets/images/user.png",
        wallpaper: "/assets/images/wallpaper3.jpg",
        email: "test@gmail.com",
        bio: "",
        country: "",
        communities: []
    },
    {
        id: "6",
        name: "Bob Brown",
        headline: "Data Scientist at Facebook",
        location: "Menlo Park, California",
        followers: 5000,
        following: 200,
        avatar: "/assets/images/user.png",
        wallpaper: "/assets/images/wallpaper4.jpg",
        email: "test@gmail.com",
        bio: "",
        country: "",
        communities: []
    },
    {
        id: "7",
        name: "Charlie Davis",
        headline: "UX Designer at Amazon",
        location: "Seattle, Washington",
        followers: 4500,
        following: 350,
        avatar: "/assets/images/user.png",
        wallpaper: "/assets/images/wallpaper5.jpg",
        email: "test@gmail.com",
        bio: "",
        country: "",
        communities: []
    },
    {
        id: "8",
        name: "Diana Evans",
        headline: "Product Manager at Microsoft",
        location: "Redmond, Washington",
        followers: 6000,
        following: 400,
        avatar: "/assets/images/user.png",
        wallpaper: "/assets/images/wallpaper6.jpg",
        email: "test@gmail.com",
        bio: "",
        country: "",
        communities: []
    },
    {
        id: "9",
        name: "Ethan Foster",
        headline: "Backend Developer at Netflix",
        location: "Los Gatos, California",
        followers: 7000,
        following: 450,
        avatar: "/assets/images/user.png",
        wallpaper: "/assets/images/wallpaper7.jpg",
        email: "test@gmail.com",
        bio: "",
        country: "",
        communities: []
    },
    {
        id: "10",
        name: "Fiona Green",
        email: "test@gmail.com",
        headline: "Frontend Developer at Airbnb",
        location: "San Francisco, California",
        followers: 5500,
        following: 300,
        avatar: "/assets/images/user.png",
        wallpaper: "/assets/images/wallpaper8.jpg",
        bio: "",
        country: "",
        communities: []
    },
];

export const mockPostData = [
    {
        id: "1",
        user: "Jane Smith",
        mediaUrls: [CardImage1, CardImage2, CardImage3],
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
        likes: 100,
        comments: 50,
        saved: true,
        category: POST_MEDIA_CATEGORY.SINGLE_MEDIA,
    },
    {
        id:   "2",
        user: "John Doe",
        mediaUrls: [CardImage2, CardImage3],
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
        likes: 100,
        comments: 50,
        saved: false,
        category: POST_MEDIA_CATEGORY.MULTI_MEDIA,
    },
    {
        id:  "3",
        user: "Jesselyn Wang",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
        likes: 100,
        comments: 50,
        saved: true,
        category: POST_MEDIA_CATEGORY.NO_MEDIA,
    },
]