import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';

import AppContext from './AppContext';
import Preloader from "./components/common/Preloader";
import { doSearch } from "./utils/SiteUtils";
import { getCountries } from "./utils/APIUtils";
import Header from "./components/header/Header";
import List from "./components/list/List";
import './App.css';
/*
 * Purpose: This is the main component to bootstrap the app.
 *
 * Version: 1.0
 * Author: dev@example.com
 */
const App: React.FC = () => {
    const [data, setData] = useState<Array<Country>>([]);

    const executeSearch = (data: any) => {
        setData(data);
    };

    // @ts-ignore
    useEffect(async () => {
        const countryData = await doSearch('all', getCountries);
        setData(countryData);
    }, []);

    const contextData = { countryList: data || [] };

    return (
        <Container maxWidth="md">
            {data.length < 1 ? <Preloader/> :
                <AppContext.Provider value={ contextData }>
                    <Header />
                    <List />
                </AppContext.Provider>
            }
        </Container>
    );
};

export default App;
