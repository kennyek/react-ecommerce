import React, { useEffect } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  useEffect(requestServerData, []);

  return (
    <div className="App">
      App
    </div>
  );
}

function requestServerData() {
  axios.get('/api/products/brands')
    .then(response => { console.log(response.data) });
}

export default App;
