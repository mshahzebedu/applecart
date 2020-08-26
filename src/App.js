import React from 'react';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Benefits } from './components/Benefits';
import { MonthlyInstallment } from './components/MonthlyInstallment';
import { FeatureProducts } from './components/FeatureProducts';
import { Getstarted } from './components/Getstarted';


function App() {
  return (
    <>
    <Header/>
    <Banner/>
    <Benefits/>
    <MonthlyInstallment/>
    <FeatureProducts/>
    <Getstarted/>
    </>

  );
}

export default App;
