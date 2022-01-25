import React from 'react';
import {Grid} from "@mui/material";
import Search from "../search/Search";
import SearchRegion from "../search/SearchRegion";
import AppContext from "../../AppContext";

/*
 * Purpose: The purpose of this component is to render header nav bar.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const Header: React.FC = () => {
    return (
        <div className="nav-container">
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <div className="logo">Where in the world?</div>
                </Grid>
                <Grid item xs={4}>
                    <div className="mode">Dark mode</div>
                </Grid>
            </Grid>
        </div>
   );
};
export default Header;
