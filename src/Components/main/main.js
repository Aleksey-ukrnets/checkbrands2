import { useState } from 'react'
import { MainTitle } from './MainTitle'
import './style.scss'
import search from '../../assets/image/search.png'
import {Link} from 'react-router-dom';


import arrowdown from '..//..//assets/image/arrowdown.svg'
import bannerMain from '../../assets/image/bannerBrands.png'

const Main = ({setValue,text}) => {

let description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
 accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus`



const [isOpen, setOpen] = useState(false)

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
        <div style={{width: '100%', height: '244px',marginTop: '-1px'}} >
            <img src={bannerMain} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>
        <div className='about'>
            <div className='about-main'>
                <h3>Explore Brands</h3>
                    <div className='test' style={isOpen ? {height: 'auto'} : {height: '75px'}} >
                        {description}
                    </div>
                   {
                       description.length > 330 ? <img className='about-arrow' src={arrowdown}
                       style={isOpen ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}}
                       onClick={() => setOpen(!isOpen)}  /> 
                       : null
                   }
            </div>
            <h4 style={{color: '#FFFFFF'}}>Trending in Brands</h4>
        </div>
       
           
        </>
    )


}
export default Main