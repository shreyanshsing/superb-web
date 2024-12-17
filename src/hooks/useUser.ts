import { useSnackbar } from '@/components/snackbar/Provider';
import { USER_ACTIONS } from '@/store/actions';
import { useAppState } from '@/store/store';
import { UserUpdateSchema } from '@api/trpc/userRouter/schema';
import { trpc } from '@trpc-client/client';
import { useEffect, useMemo } from 'react';
import { z } from 'zod';

interface IProps {
    id: string;
}

const useUser = ({ id }: IProps) => {
    const {showSnackbar} = useSnackbar();
    const { dispatch, state } = useAppState();
    const { user } = state;
    const { 
        data: userData, 
        isFetching: isLoadingUser, 
        error: userFetchError, 
        isError: isFailedToFetchUser 
    } = trpc.getUserById.useQuery(id, { enabled: !!id && !user });
    const { 
        mutateAsync, 
        data: updatedUserData,
        isError: isFailedToUpdateuser, 
        isPending: isLoadingUpdate, 
        error: failedToUpdateUser 
    } = trpc.updateUser.useMutation();

    useEffect(() => {
        if (userData) {
            dispatch({ type: USER_ACTIONS.SET_USER, payload: userData });
        }
    }, [isFailedToFetchUser, isLoadingUser, userData, dispatch]);

    useEffect(() => {
        if (updatedUserData) {
            dispatch({ type: USER_ACTIONS.UPDATE_USER, payload: updatedUserData });
        }
    }, [isFailedToUpdateuser, isLoadingUpdate, updatedUserData, dispatch]);

    const updateUser = async (input: z.infer<typeof UserUpdateSchema>) => {
        try {
            await mutateAsync(input);
            showSnackbar('User updated successfully', 'success');
        } catch (error) {
            console.error('Error updating user:', error);
            showSnackbar('Error updating user', 'error');
        }
    }

    const getUserDetails = useMemo(() => {
        return user || userData;
    }, [user, userData]);

    return {
        getUserDetails,
        isLoadingUser,
        userFetchError,
        isFailedToFetchUser,
        isFailedToUpdateuser,
        isLoadingUpdate,
        failedToUpdateUser,
        updateUser
    };

}

export default useUser;