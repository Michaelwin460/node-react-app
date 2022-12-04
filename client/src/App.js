// import logo from './logo.svg';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import List from './components/list';
import Info from "./components/info";


function App() {
  const [info, setInfo] = useState()
  const [data, setData] = useState([])


  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<List data={data} setData={setData} setInfo={setInfo} info={info}/>} >
        <Route path='info' element={<Info data={data} info={info} />} />
          {/* <Route path='info' element={<Info />} /> */}
          </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
    );
  }
  

export default App;
