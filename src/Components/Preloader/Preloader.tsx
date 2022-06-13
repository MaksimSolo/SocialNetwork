import React from 'react';
import preloader from '../../images/Infinity-1.5s-240px.gif'
import style from './Preloader.module.css'

const Preloader = () => {

    return (
        <div className={style.main}>
            <div><img src={preloader}/></div>
            <div>Initializing your Social Network App</div>
        </div>
    );
};

export default Preloader;