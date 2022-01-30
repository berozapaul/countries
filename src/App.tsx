import React from 'react';
import { Container } from '@mui/material';

import AppContext from './AppContext';
import {getSlug} from "./utils/SiteUtils";
import Header from "./components/header/Header";
import ContentRoute from "./components/route/ContentRoute";
import './App.css';
/*
 * Purpose: This is the main component to bootstrap the app.
 *
 * Version: 1.0
 * Author: dev@example.com
 */
const App: React.FC = () => {
    const countrySlug = getSlug(false);
    const contextData = { countryList: [], slug: countrySlug };

    return (
        <AppContext.Provider value={ contextData }>
            <Header />
            <Container maxWidth="lg">
                <ContentRoute/>
            </Container>
        </AppContext.Provider>
    );
};

export default App;
