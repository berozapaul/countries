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
    const { context } = useContext(AppContext);
    const [data, setData] = useState('');

    useEffect(() => {
        const slug = getSlug(false);
        context.slug = slug;
        setData(slug);
    }, []);

    const renderSearch = (data: any) => {
        setData(data);
    };

    return(
        <div>
            {data ? <Item/> :
                <>
                    <Grid container spacing={4}>
                        <Grid item xs={8}>
                            <Search onSearch={renderSearch} />
                        </Grid>
                        <Grid item xs={4}>
                            <SearchRegion onSearch={renderSearch} />
                        </Grid>
                    </Grid>
                    <List/>
                </>
            }
        </div>
   )
};
export default Home;
