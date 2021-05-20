import React, { useContext, useEffect } from 'react';

import Router from './Router';
import Header from './Header/Header';
import ErrorBanner from './ErrorBanner';

import { APIContext } from '../api/context';

function App() {
    const { fetchAllCalls } = useContext(APIContext);

    useEffect(() => {
        fetchAllCalls();
    }, []);

    return (
        <div className="container">
            <Header />
            <ErrorBanner />
            <Router />
        </div>
    );
}

export default App;
