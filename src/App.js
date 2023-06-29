import React from "react";
import 'App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import Navbar from './Component/Navbar.js'

import Home from './Page/Home.js'
import AutoGenerateAPIDocu from './Page/AutoGenerateAPIDocu.js'
import TestCode from './Page/TestCode.js'
import DevDesign from './Page/DevDesign.js'
import DevDesignState from './Page/DevDesignState.js'
import MyPage from './Page/MyPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/AutoGenerateAPIDocu" element={<AutoGenerateAPIDocu/>}/>
            <Route path="/TestCode" element={<TestCode/>}/>
            <Route path="/DevDesign" element={<DevDesign/>}/>
            <Route path="/DevDesignState" element={<DevDesignState/>}/>
            <Route path="/MyPage" element={<MyPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
