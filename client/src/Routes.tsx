import axios from 'axios';
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { App } from './views/layouts';
import { Home } from './views/pages';

const Routes: React.FC = () => {
  useEffect(requestServerData, []);

  return (
    <App>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </App>
  );
}

function requestServerData() {
  axios.get('/api/products/brands')
    .then(response => { console.log(response.data) });
}

export default Routes;
