/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
import { useState } from 'react';

import './form.css'

const Form = ({show}) => {
    const handleClick = (e) => {
        e.preventDefault();

        show = true


        // const formData= new FormData(e.target)
        // const dado = Object.fromEntries(formData)

        // console.log(dado)
    }

    return (
        <section className='form-section'>
            <h2>Relatório de casos</h2>
            <form> 
                <div id='input-section'>
                    <div className="selects">
                        <p>UF</p>
                        <select name='state' className='input' >
                            <option selected value="RR">RR</option>
                            <option value="PE">PE</option>
                            <option value="MG">MG</option>
                            <option value="SP">SP</option>
                            <option value="RJ">RJ</option>
                            <option value="CE">CE</option>
                            <option value="AC">AC</option>
                        </select>
                    </div> 
                    <div className="selects">
                        <p>Data</p>
                        <input className='input' type="date" name='date' value="2021-06-25">
                        </input>
                    </div>
                </div>
                <div>
                    <input id='button' onClick={handleClick} type='submit' value='Mostrar Dados'></input>
                </div>
            </form>
        </section>
    )
}

export default Form;