import React from 'react';
import preloader from '../../assets/preloader.gif';

/*
 * Purpose: The purpose of this component is to render a preloader gif.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const Preloader = () =>{
    return(
        <div className="preloader">
            <img src={preloader} alt="preloader"/>
        </div>
   )
};
export default Preloader;
