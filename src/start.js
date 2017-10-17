import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

import { App } from './app';
import { Search } from './search';
import { UrlDisplay } from './urldisplay';


const router = (
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Search} />
            <Route path='/:nameUrl' component={UrlDisplay} />
        </Route>
    </Router>
);



ReactDOM.render(
    router,
    document.querySelector('main')
);
