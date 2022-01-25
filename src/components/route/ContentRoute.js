import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../home/Home';
import ErrorMessage from '../error/ErrorMessage';

/*
 * Purpose: The purpose of this component is to render common routes.
 * Version: 1.0
 */

const ContentRoute = () => {
    return (
        <BrowserRouter>
            <Suspense fallback="">
                <Routes>
                    <Route path="/:slug" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/error" element={<ErrorMessage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};
export default ContentRoute;
