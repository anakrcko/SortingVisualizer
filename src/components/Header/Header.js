import React from 'react'
import './Header.css'
import logo from '../../imiLogo.svg'

function Header ({language, handleLanguage, isSorting}) {

    return (
        <div className="menu">
            
            <img src={logo} alt="Logo" /> 
            <p>
                  {language === 'sr' ? 'Vizuelizacija algoritama sortiranja' : 
                'Visualization of sorting algorithms'}
            </p> 
             <div className="right">
                <select onChange={handleLanguage} disabled={isSorting} >
                        <option value='sr'>Srpski</option>
                        <option value='en'>English</option>
                </select>
             </div>
        </div>
    )
}

export default Header