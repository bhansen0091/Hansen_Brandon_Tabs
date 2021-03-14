// import React, { useState } from 'react';
import styles from './BoxComponent.module.css';

const BoxComponent = ({boxColor,boxHeight,boxWidth}) => {
    
    

    return(
        <div className="">
            <div className="">
                <div className="" style={{
                    background: boxColor,
                    height: boxHeight + "px",
                    width: boxWidth + "px"
                    }}>
                </div>
            </div>
        </div>
    );


}

export default BoxComponent;

