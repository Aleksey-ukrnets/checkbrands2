import { useState } from 'react'
import { MainTitle } from './MainTitle'
import './style.scss'
import search from '../../assets/image/search.png'
import {Link} from 'react-router-dom';

import arrowdown from '..//..//assets/image/arrowdown.svg'

const Main = ({setValue,text}) => {




    return(
        <>
    {/* <div className='wrapper'> 
        <div className="main">
            <div className="main-content">
                    <div className="main-search">
                        <form className='main-form'>
                            <input 
                            type="text" 
                            placeholder={text}
                            onChange={(e) => setValue(e.target.value)}
                            />
                            <img src={search} alt='search' />
                        </form>
                        
                    </div>
                   
            </div>
        </div>
        </div>        */}
        <div>
            <div style={{width: '100%', height: '244px', background: 'linear-gradient(180deg, #ED8F05 0%, #FEB55A 94.39%)',border: '1px solid #FFFFFF'}}></div>
        </div>
        <div className='about'>
            <div className='about-main'>
                <h3>Explore Brands</h3>
                <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                 et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                   tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus`}</p>
                
                   <img className='about-arrow' src={arrowdown} />
             
            </div>
            <h4 style={{color: '#FFFFFF'}}>Trending in Brands</h4>
        </div>
       
           
        </>
    )


}
export default Main