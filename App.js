import React from 'react';
import './App.css';
import Header from "./container/Header";
import Sidebar from "./container/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className='header_body'>
        <Sidebar />
        {/*react-Router --> chat Screen*/}
      </div>
    </div>
  );
}

export default App;
