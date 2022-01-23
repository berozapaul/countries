import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';


import Preloader from "./components/common/Preloader";
import { doSearch } from "./utils/SiteUtils";
import { getCountries } from "./utils/APIUtils";
import Header from "./components/header/Header";
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

    return (
        <Container maxWidth="md">
            {data.length < 1 ? <Preloader/> :
                <div>
                    <Header />
                </div>
            }
        </Container>
    );
};

export default App;
