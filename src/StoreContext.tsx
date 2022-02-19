import React from "react";
import {AppStoreType} from "./redux/redux-store";

type ProviderType={
    store: AppStoreType
    children: React.ReactNode
}

export const StoreContext = React.createContext({} as AppStoreType)


export const Provider = (props:ProviderType)=> (<StoreContext.Provider value={props.store}>{props.children}</StoreContext.Provider>)

