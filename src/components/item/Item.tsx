import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import AppContext from '../../AppContext';
import {doSearch} from "../../utils/SiteUtils";
import {getCountryByName} from "../../utils/APIUtils";
import Preloader from "../common/Preloader";

/*
 * Purpose: The purpose of this component is to render item details.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const Item = () => {
    const [data, setData] = useState<Array<Country>>([]);
    const { context } = useContext(AppContext);
    const navigate = useNavigate();

    // @ts-ignore
    useEffect(async () => {
        const data = await doSearch(context.slug, getCountryByName);
        setData(data);
    }, []);

    const goHome = () => {
        navigate("/", { replace: true });
    };

    if (data.length < 1) {
        return <Preloader/>
    }
    const country = data[0];

    return(
        <div className="container">
            {country.name.common}
            <button type="button" onClick={goHome}>Back</button>
        </div>
   )
};
export default Item;
