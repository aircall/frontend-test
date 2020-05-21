import React from 'react';
import { Route, Switch } from 'react-router-dom';

import InboxFeed from './InboxFeed';
import ArchivedFeed from './ArchivedFeed';
import CardCallDetails from './CardCallDetails/CardCallDetails';

function Router() {
    return (
        <Switch>
            <Route exact path="/" component={InboxFeed} />
            <Route exact path="/archived" component={ArchivedFeed} />
            <Route exact path="/details/:callId" component={CardCallDetails} />
            <Route>404: Page not found</Route>
        </Switch>
    );
}

export default Router;
