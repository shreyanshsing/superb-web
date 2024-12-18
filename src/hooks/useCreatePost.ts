import { LOCAL_POST_ACTIONS } from "@/store/actions";
import { useAppState } from "@/store/store";
import useDebounce from "@/utils/debounce";

const useCreatePost = () => {
    const { dispatch } = useAppState();

    const setTitle = (title: string) => {
        dispatch({ type: LOCAL_POST_ACTIONS.SET_TITLE, payload: title });
    }

    const setContent = (content: string) => {
        dispatch({ type: LOCAL_POST_ACTIONS.SET_CONTENT, payload: content });
    }

    const setMedia = (media: File[]) => {
        dispatch({ type: LOCAL_POST_ACTIONS.SET_MEDIA, payload: media });
    }

    const setMentions = (mentions: any[]) => {
        dispatch({ type: LOCAL_POST_ACTIONS.SET_MENTIONS, payload: mentions });
    }

    const setTags = (tag: any) => {
        dispatch({ type: LOCAL_POST_ACTIONS.SET_TAGS, payload: tag });
    }

    return {
        setTitle: useDebounce(setTitle, 300),
        setContent: useDebounce(setContent, 300),
        setMedia,
        setMentions: useDebounce(setMentions, 300),
        setTags: useDebounce(setTags, 300)
    }
}

export default useCreatePost;