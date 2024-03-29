import PropTypes from "prop-types";
import React, {useContext, useEffect, useState} from 'react';
import {getCountryByRegion} from "../../utils/APIUtils";
import { doSearch } from "../../utils/SiteUtils";
import AppContext from "../../AppContext";

/*
 * Purpose: The purpose of this component is to do the giphy search.
 *
 * Version: 1.0
 * Author: dev@example.com
 */


const SearchRegion = (prop: any) => {
    const [regions, setRegions] = useState<Array<string>>([]);
    const context = useContext(AppContext);
    const { countryList } = context;

    const handleKeyUp = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const searchStr = event.target.value;

        if(!searchStr) {
            return;
        }
        
        const data = await doSearch(searchStr, getCountryByRegion);
        prop.onSearch(data || []);
    };

    // @ts-ignore
    useEffect(async () => {
        if(context.regions) {
            return;
        }

        if(Array.isArray(countryList) && countryList.length > 0) {
            const regions = countryList.map(item => item.region)
                .filter((value, index, self) => self.indexOf(value) === index);
            context.regions = regions;
            setRegions(regions);
        }
    }, [countryList]);

    return (
        <div className="search">
            <select onChange={handleKeyUp}>
                <option value="">Filter by Region</option>
                {
                    regions.map((region) => <option key={region}>{region}</option>)
                }
            </select>

        </div>
    );
};

SearchRegion.propTypes = {
    onSearch: PropTypes.func
};

export default SearchRegion;
