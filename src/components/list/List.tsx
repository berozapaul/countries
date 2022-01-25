import React, { useContext } from 'react';
import AppContext from '../../AppContext';
import {Grid, Card, Typography, CardContent, CardMedia } from '@mui/material';
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
                            <Card>
                                <CardMedia

                                    component="img"

                                    image={`${item.flags.png}`}
                                    alt={`${item.name.common}`}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h3">
                                        {`${item.name.common}`}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
};
export default List;
