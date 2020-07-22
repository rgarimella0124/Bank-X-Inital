import React, { useState, useEffect} from 'react';
import './App.scss';
import Routing from './routing';
// import Footer from './components/Footer/Footer';
import BreadCrumbs from './common/BreadCrumb/breadcrumb';
import { useHistory }  from 'react-router-dom';

function App() {
  return (
    <div>
      <div className='pages'>
        <div className='bread_crumb'><BreadCrumbs/></div>
        <div className='routing'>
          <Routing/>
        </div>
      </div>
      {/* {shouldShow && <div className='foot'><Footer/></div>} */}
    </div>
  );
}

export default App;
