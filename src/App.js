import React from 'react';
import './App.scss';
import Routing from './routing';
import BreadCrumbs from './common/BreadCrumb/breadcrumb';

function App() {
  return (
    <div>
      <div className='pages'>
        <div className='bread_crumb'><BreadCrumbs/></div>
        <div className='routing'>
          <Routing/>
        </div>
      </div>
    </div>
  );
}

export default App;
