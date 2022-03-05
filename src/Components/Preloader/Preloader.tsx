import React from 'react';
import preloader from '../../images/Infinity-1.5s-240px.gif'


const Preloader = () => {
    console.log("Preloader")
    return (
        <div>
            <img src={preloader}/>
        </div>
    );
};

export default Preloader;