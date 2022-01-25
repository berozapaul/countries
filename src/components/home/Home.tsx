import React, {useEffect, useState, useContext} from 'react';
import AppContext from '../../AppContext';
import {getSlug} from "../../utils/SiteUtils";
import Item from "../item/Item";
import List from "../list/List";

/*
 * Purpose: The purpose of this component is to render home.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const Home = () => {
    const { context } = useContext(AppContext);
    const [data, setData] = useState('');

    useEffect(() => {
        const slug = getSlug(false);
        context.slug = slug;
        setData(slug);
    }, []);

    return(
        <div>
            {data ? <Item/> : <List/>}
        </div>
   )
};
export default Home;
