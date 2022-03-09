import React from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";

export const withRouter = (Component: any) => {
    const ComponentWithRouterProps = (props: any) => {
        let location = useLocation()
        let navigation = useNavigate()
        let params = useParams()

        return <Component {...props} router={{location, navigation, params}}/>
    }
    return ComponentWithRouterProps
}