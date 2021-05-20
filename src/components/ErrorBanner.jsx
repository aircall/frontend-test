import React, { useContext } from 'react';

import { APIContext } from '../api/context';

function ErrorBanner() {
    const { error } = useContext(APIContext);

    return <div className={`error-banner ${error ? 'open' : ''}`}>{error}</div>;
}

export default ErrorBanner;
