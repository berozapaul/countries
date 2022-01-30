import React, {useEffect, useState, useContext} from 'react';
import AppContext from '../../AppContext';
import {getSlug} from "../../utils/SiteUtils";
import Item from "../item/Item";
import List from "../list/List";
import Preloader from "../common/Preloader";
import {Grid} from "@mui/material";
import Search from "../search/Search";
import SearchRegion from "../search/SearchRegion";

/*
 * Purpose: The purpose of this component is to render home.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const Home = () => {
    const context = useContext(AppContext);
    const { contextMeta } = context;
    const [slug, setSlug] = useState('');
    const [data, setData] = useState<Array<Country>>([]);


    useEffect(() => {
        const countrySlug = getSlug(false);
        contextMeta.slug = countrySlug;
        setSlug(countrySlug);
    }, []);

    const renderSearch = (data: any) => {
        context.countryList = data;
        setData(data);
    };

    return(
        <div>
            {slug ? <Item/> :
                <div>
                    <Grid container spacing={4} className="search-container">
                        <Grid item xs={8}>
                            <Search onSearch={renderSearch} />
                        </Grid>
                        <Grid item xs={4}>
                            <SearchRegion onSearch={renderSearch} />
                        </Grid>
                    </Grid>
                    <List/>
                </div>
            }
        </div>
   )
};
export default Home;
