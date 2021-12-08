/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {Chart} from 'react-google-charts';

import './chart.css'
// eslint-disable-next-line
export default ({items}) => {
    const numberCases = items.map(items => items.new_confirmed );
    numberCases.sort((a,b)=> b - a)
    

    // ['React', 100],
    //     ['Angula', 80],
    //     ['Vue', 50],
    let casePerCity = []
    casePerCity.push(['Municípios', 'Porcentagem dos casos'])

    for(let i = 0; numberCases[i] > 0; i++){
        casePerCity.push([items[i].city, items[i].new_confirmed])
    }
  
      const [data, setData] = useState(casePerCity)
    return (
        <section className='chart-section'>
            <h3>Distribuição de casos de COVID-19</h3>
            
            <Chart
            width={'400px'}
            height={'300px'}
            chartType="PieChart"
            data={casePerCity}
          />
            
        </section>
    )
}