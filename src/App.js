/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import Covid from "./COVID";

import "./App.css";

import Aside from "./components/Aside";
import Form from "./components/Form";
import Header from "./components/Header";
import Results from "./components/Results";
import Chart from "./components/Chart";

function App() {
  const [casos, setCasos] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      
      let list = await Covid.getCaseList();
      ;
      if(list.city == null){
        list[16].city = 'Total'
      }
    setCasos(list)
    };
    loadData();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Aside />
        <section className="main-section">
          <h2>COVID-19</h2>
          <p>
            Boletins informativos e casos do coranvirus por monicípio por dia
          </p>
          <Form/>

          <section className='chart-results-section'>
            <Chart items={casos}/>

            <Results items={casos}/>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
