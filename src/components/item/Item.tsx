import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import AppContext from '../../AppContext';
import {doSearch} from "../../utils/SiteUtils";
import {getCountryByName} from "../../utils/APIUtils";
import Preloader from "../common/Preloader";
import { Grid, Card, CardMedia, CardContent } from "@mui/material";

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
        const countryName = context.slug.replaceAll('-', ' ');
        const data = await doSearch(countryName, getCountryByName);
        setData(data);
    }, []);

    const goHome = () => {
        window.location.href='/';
    };

    if (data.length < 1) {
        return <Preloader/>
    }
    const item = data[0];

    return(
        <div className="container">
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <button type="button" onClick={goHome}>Back</button>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            image={`${item.flags.png}`}
                            alt={`${item.name.common}`}
                        />
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <CardContent>
                        <h1>{item.name.common}</h1>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
   )
};
export default Item;
