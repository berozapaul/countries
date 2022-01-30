import React, { useContext } from 'react';
import AppContext from '../../AppContext';
import {Grid, Card, Typography, CardContent, CardActionArea, Box } from '@mui/material';
import { generateSlug } from "../../utils/SiteUtils";
import Preloader from "../common/Preloader";
/*
 * Purpose: The purpose of this component is to render list of countries.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const List = () => {
    const context = useContext(AppContext);
    const { countryList, isSearch } = context;

    if (countryList.length < 1) {
        return (
            isSearch ? <p>Data is not available yet.</p> : <Preloader/>
        )
    }

    return(
        <Grid container spacing={3} direction="row" className="country-list">
            {
                countryList.map((item: any) => {
                    return (
                        <Grid item xs={12} sm={6} md={3} key={countryList.indexOf(item)} >
                            <CardActionArea href={`/${generateSlug(item.name.common)}`}>
                                <Card className="list-item">
                                    <Box sx={{backgroundImage: `url(${item.flags.svg})`}} className='item-img'/>
                                    <CardContent>
                                        <Typography gutterBottom variant="h3" component="h3">
                                            {`${item.name.common}`}
                                        </Typography>
                                        { item.population ?
                                            <div className="info"><label>Population: </label><span>{item.population.toLocaleString()}</span></div>
                                            : ''
                                        }
                                        {item.region ?
                                            <div className="info"><label>Region: </label><span>{item.region}</span></div>
                                            : ''
                                        }
                                        {item.capital?.length > 0 ?
                                            <div className="info"><label>Capital: </label><span>{item.capital[0]}</span></div>
                                            : ''
                                        }
                                    </CardContent>
                                </Card>
                            </CardActionArea>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
};
export default List;
