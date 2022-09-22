import {AxiosError} from "axios";
import {AppDispatch} from "../redux/redux-store";
import {ToggleFollowResponseType} from "../api/api-users";
import {
    KeysUsersType,
    selectFromToggleFollowFetchingQueue,
    toggleFollow,
    UsersType
} from "../redux/reducers/usersDataReducer";

export const usersToggleFollowFlow =async (dispatch: AppDispatch,userID: number, apiMethod: (userID: number)=>  Promise<ToggleFollowResponseType>)=>{
    try {
        dispatch(selectFromToggleFollowFetchingQueue(userID, true));
        const responseData = await apiMethod(userID);
        if (responseData.resultCode === 0) {
            dispatch(toggleFollow(userID));
            dispatch(selectFromToggleFollowFetchingQueue(userID, false));
        }
    } catch (err) {
        const error = err as AxiosError
        console.log(error)
    }
}

export const changeItemPropsInItemsArray = (items: UsersType[], actionPropName: number, itemPropName:KeysUsersType, changedPropName:KeysUsersType): UsersType[]=>{
    return items.map(item => item[itemPropName] === actionPropName ? {...item, [changedPropName]: !item[changedPropName]} : item)
}
