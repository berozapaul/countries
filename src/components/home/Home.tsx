import React, {useEffect, useState, useContext} from 'react';
import AppContext from '../../AppContext';
import {doSearch} from "../../utils/SiteUtils";
import Item from "../item/Item";
import List from "../list/List";
import {Grid} from "@mui/material";
import Search from "../search/Search";
import SearchRegion from "../search/SearchRegion";
import {getCountries} from "../../utils/APIUtils";

/*
 * Purpose: The purpose of this component is to render home.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const Home = () => {
    const context = useContext(AppContext);
    const { slug } = context;
    const [data, setData] = useState<Array<Country>>([]);

    // @ts-ignore
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        if (!slug) {
            const countryData = await doSearch('all', getCountries);
            context.countryList = countryData;
            setData(countryData);
        }
    }, []);

    const renderSearch = (data: any) => {
        context.countryList = data;
        context.isSearch = true;
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
