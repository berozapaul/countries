import React from 'react';
import {Grid, Container} from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';

/*
 * Purpose: The purpose of this component is to render header nav bar.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const Header: React.FC = () => {
    return (
        <div className="nav-container">
            <Container maxWidth="lg">
                <Grid container spacing={2} sx={{ py: 3 }}>
                    <Grid item xs={10}>
                        <div className="logo"><b>Where in the world?</b></div>
                    </Grid>
                    <Grid item xs={2}>
                        <div className="mode align">Dark mode <DarkModeIcon/></div>
                    </Grid>
                </Grid>
            </Container>
        </div>
   );
};
export default Header;
