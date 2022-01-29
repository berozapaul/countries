import React, { useContext } from 'react';
import AppContext from '../../AppContext';
import {Grid, Card, Typography, CardContent, CardActionArea, Box } from '@mui/material';
import { generateSlug } from "../../utils/SiteUtils";
/*
 * Purpose: The purpose of this component is to render list of countries.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const List = () => {
    const context = useContext(AppContext);
    const { countryList } = context;

    return(
        <Grid container spacing={2} direction="row">
            {
                countryList.map((item: any) => {
                    return (
                        <Grid item xs={12} sm={6} md={3} key={countryList.indexOf(item)}>
                            <CardActionArea href={`/${generateSlug(item.name.common)}`}>
                                <Card>
                                    <Box sx={{backgroundImage: `url(${item.flags.svg})`}} className='item-img'/>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h3">
                                            {`${item.name.common}`}
                                        </Typography>
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
