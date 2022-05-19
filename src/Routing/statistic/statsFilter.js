
import { StatsGroup } from './ContentGroupsArrays/statsGroup'

import './style.scss'

import arrowup from '..//..//assets/image/arrowup.svg'
import { useState } from "react"
import SubFilterFirst from './subfilters/subFilter'
import SubFilterSecond from './subfilters/subFilterSecond'
import SubFilterThird from './subfilters/subFilterThird'


const StatsFilter = () => {

    const [activeIndex, setActiveIndex] = useState(null)

    const toggle = index => {
        if (activeIndex === index) {
          return setActiveIndex(null);
        }
        setActiveIndex(index);
      };

    return(
        <>
           <div className="stats-main">
                       {StatsGroup.map((item, index) => {
                           return(
                                    <div className="stats-main_filter" key={item.id.toString()}>
                                        <div className="stats-main_filter-content" onClick={() => {return toggle(index)}}>
                                                <img src={item.icon} />
                                                <div style={index >= 1 ? {paddingLeft: '24px'}:{paddingLeft: '0'}}>{item.name}</div>
                                                <img className="stats-main_filter-arrow" src={arrowup} style={activeIndex === index ? 
                                                    {transform: 'rotate(180deg)'} : 
                                                    {transform: 'rotate(0deg)'}}  />
                                        </div>
                                    </div>
                         )
                       })} 
                        {activeIndex === 0 ? (
                                <SubFilterFirst />
                            ): null}

                             {activeIndex === 1 ? (
                                <SubFilterSecond />
                            ): null}

                             {activeIndex === 2 ? (
                                <SubFilterThird />
                            ): null}    
             </div>        
         
        
           
        </>
    )
}
export default StatsFilter