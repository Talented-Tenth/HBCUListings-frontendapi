import React from 'react';
import SchoolDetail from './SchoolDetail';
import SchoolAll from './SchoolAll';
import Signup from './Signup';
import Landing from './Landing';
import Header from './Header';
import Footer from './Footer';
import './index.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';


function App() {

    return (
  
      <div className="App">
        <Header/>   
         <div className="App-header">
          <Routes>
            <Route path='/' element={<Landing/>}/>
            {/* <Route path='/home' element={<Home/>}/> */}
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/school' element={<SchoolAll/>}/>
            <Route path='/school/:id' element={<SchoolDetail/>}/>
            {/* <Route path='/schoolcity/:city' element={<Color/>}/>
            <Route path='/schoolstate/:state' element={<Size/>}/>
            <Route path='/schoolname/:name' element={<Gender/>}/>
            <Route path='/majors/:schoolid' element={<Majorsr/>}/> */}
          </Routes>
         </div>
        <Footer/>
      </div>
   
   
    );
  }
  
  export default App;