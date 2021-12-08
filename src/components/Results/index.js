import React from 'react';

import './results.css'
// eslint-disable-next-line
export default ({items}) => {

    return (
        <section id ='results-section'>
            <h3>Lista de casos por municípios</h3>

            <div id='table'>
                <div  className='col'>

                    <div className='table-head'>
                        <p >Data</p>
                    </div>

                    <p id='line'></p>

                        {items.map((item, key) => (
                            <p>{item.date}</p> 
                        ))}
                </div>

                <div className='col'>

                    <div className='table-head'>
                        <p >UF</p>
                    </div>
                    
                    <p id='line'></p>

                    {items.map((item, key) => (
                    
                        <p>{item.state}</p>
                        
                     
                ))}
                </div> 

                <div className='col'>
                    
                    <div className='table-head'>
                        <p >Município</p>
                    </div>

                    <p id='line'></p>
                    
                    {items.map((item, key) => (
                    
                        <p>{item.city}</p>
                        
                      
                ))}
                </div> 

                <div className='col'>

                    <div className='table-head'>
                        <p>Casos confirmados</p>
                    </div>

                    <p id='line'></p>
                    
                    {items.map((item, key) => (
                    
                        <p>{item.new_confirmed}</p>
                        
                      
                ))}
                </div> 
            </div>
                    
            
        </section>
    )
}