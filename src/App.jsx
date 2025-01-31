import React from 'react';
import Home from "./pages/Home";

import FrontendBackground from './styles/FrontendBackground';

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden   ">

      <div className="fixed inset-0 -z-10" >
        <FrontendBackground />
      </div>

      <div className="">
        <Home />
      </div>
    </div>
  );
}

export default App;
