import React, { useContext, useState } from 'react';
import AppContext from '../../AppContext';
/*
 * Purpose: The purpose of this component is to render list of countries.
 *
 * Version: 1.0
 * Author: dev@example.com
 */


const List = () => {

    const context = useContext(AppContext);
    const { countryList } = context;

    let countryListStr;
    if(Array.isArray(countryList) && countryList.length > 0){
        countryListStr = countryList.map((item) => <div>{item.name.common}</div>)
    }
    return(
        <div className="container">{countryListStr}</div>
    )
};
export default List;
