import React, {useContext, useEffect, useState} from 'react';
import AppContext from '../../AppContext';
import {doSearch} from "../../utils/SiteUtils";
import {getCountryByName} from "../../utils/APIUtils";
import Preloader from "../common/Preloader";
import { Grid, Card, CardMedia } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

/*
 * Purpose: The purpose of this component is to render item details.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const Item = () => {
    const [data, setData] = useState<Array<Country>>([]);
    const { slug } = useContext(AppContext);

    // @ts-ignore
    useEffect(async () => {
        const countryName = slug.replaceAll('-', ' ');
        const data = await doSearch(countryName, getCountryByName);
        setData(data || []);
    }, []);

    const goHome = () => {
        window.location.href='/';
    };

    if (data.length < 1) {
        return <Preloader/>
    }
    const item = data[0];
    let nativeNameList: string[] = [];
    let languages: string[] = [];
    let currencies: string[] = [];

    try{
        Object.keys(item.name?.nativeName).forEach((nativeName:string) => {
            nativeNameList.push(item.name?.nativeName[nativeName].official);
        });

        Object.keys(item.languages).forEach((lang:string) => {
            languages.push(item.languages[lang]);
        });

        Object.keys(item.currencies).forEach((cur:string) => {
            currencies.push(item.currencies[cur].name);
        });
    } catch (e) {
        console.log(e)
    }


    return(
        <div className="container">
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <button type="button" className="back align" onClick={goHome}>
                        <ArrowBackIcon className="align" /> Back
                    </button>
                </Grid>
                <Grid item xs={5}>
                    <Card>
                        <CardMedia
                            component="img"
                            image={`${item.flags.png}`}
                            alt={`${item.name.common}`}
                        />
                    </Card>
                </Grid>
                <Grid item xs={6} className="details-container">
                    <h1>{item.name.common}</h1>
                    <div className="details">
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                {nativeNameList.length > 0 ?
                                    <div className="info"><label>Native name: </label><span>{nativeNameList[0]}</span></div>
                                    : ''
                                }
                                { item.population ?
                                    <div className="info"><label>Population: </label><span>{item.population.toLocaleString()}</span></div>
                                    : ''
                                }
                                {item.region ?
                                    <div className="info"><label>Region: </label><span>{item.region}</span></div>
                                    : ''
                                }
                                {item.subregion ?
                                    <div className="info"><label>Sub Region: </label><span>{item.subregion}</span></div>
                                    : ''
                                }
                                {item.capital?.length > 0 ?
                                    <div className="info"><label>Capital: </label><span>{item.capital[0]}</span></div>
                                    : ''
                                }
                            </Grid>
                            <Grid item xs={6}>
                                {item.tld.length > 0 ?
                                    <div className="info"><label>Top Level Domain: </label><span>{item.tld[0]}</span></div>
                                    : ''
                                }
                                {currencies.length > 0 ?
                                    <div className="info"><label>Currencies: </label><span>{currencies.join(', ')}</span></div>
                                    : ''
                                }
                                {languages.length > 0 ?
                                    <div className="info"><label>Languages: </label><span>{languages.join(', ')}</span></div>
                                    : ''
                                }
                            </Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                {item.borders ?
                                    <div className="info border"><label>Border countries: </label><span>{
                                        item.borders.map((borderCountry:string) => <button>{borderCountry}</button>)
                                    }</span></div>
                                    : ''
                                }

                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
   )
};
export default Item;
