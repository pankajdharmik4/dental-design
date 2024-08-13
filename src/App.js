import React, { useState } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import { Header } from './components/Header';
import JsonData from "./data/data.json";
import {Gallery} from './components/Gallery'
import { Features } from './components/Features';
import { About } from './components/About';
import { HowitWork } from './components/HowitWork';
import { Testimonials } from './components/Testimonials';
import { QnA } from './components/QnA';
import { Contact } from './components/Contact';

function App() {
  

  return (
    <div className="App">
      <NavBar/>
      <Header data={JsonData.Header}/>
      <Gallery data={JsonData.Gallery} />
      <Features data={JsonData.Features} />
      <About data={JsonData.About} />
      <HowitWork data={JsonData.Services} />
      <Testimonials data={JsonData.Testimonials} />
      <QnA data={JsonData.Team} />
      <Contact data={JsonData.Contact} />


    </div>
  );
}

export default App;
