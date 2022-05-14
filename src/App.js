import React from 'react';

//components
import Landing from './Components/Landing';

//context provider
import CionContextProvider from './Context/CionContextProvider';

const App = () => {
  return (
    <CionContextProvider>
      <Landing />
    </CionContextProvider>
  );
};

export default App;
