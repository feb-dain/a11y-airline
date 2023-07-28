import React from 'react';
import './App.css';
import SpinButton from './components/SpinButton';

function App() {
  return (
    <div className='App' style={{ display: 'flex', flexDirection: 'column' }}>
      <SpinButton target='성인' />
      <SpinButton target='소아' />
      <SpinButton target='유아' />
    </div>
  );
}

export default App;
