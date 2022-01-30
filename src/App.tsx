import React, {useEffect, useState} from 'react';
import { Container } from '@mui/material';

import AppContext from './AppContext';
import Preloader from "./components/common/Preloader";
import { doSearch } from "./utils/SiteUtils";
import { getCountries } from "./utils/APIUtils";
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
    const [data, setData] = useState<Array<Country>>([]);

    // @ts-ignore
    useEffect(async () => {
        const countryData = await doSearch('all', getCountries);
        setData(countryData);

    }, []);

    const contextData = { countryList: data || [], contextMeta: {} };

    return (
        <AppContext.Provider value={ contextData }>
            <Header />
            <Container maxWidth="lg">
                {data.length < 1 ? <Preloader/> : <ContentRoute/>}
            </Container>
        </AppContext.Provider>
    );
};

export default App;
