import React from 'react';
import preloader from '../../images/Infinity-1.5s-240px.gif'

type PreloaderType = {
    inProgress: boolean
}

const Preloader = (props: PreloaderType) => {
    return (
        <>
            {props.inProgress ? <div>
                <img src={preloader}/>
                </div> : null}
        </>
    );
};

export default Preloader;