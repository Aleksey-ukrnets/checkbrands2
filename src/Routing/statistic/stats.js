
import { FilterData } from "../../Components/filterMenu.js/util/filterData"
import MenuFilter from "../../Components/filterMenu.js/menuFilter"
import Main from "../../Components/main/main"
import Accordion from "../../Components/filterMenu.js/Accordion"
import StatsToken from "./TokensStats/tokenstats"

import './style.scss'
import { useState } from "react"
import StatsFilter from "./statsFilter"
import CollectionToken from "./TokensStats/CollectionToken"
import EveryToken from "./TokensStats/EveryToken"



const  Stats = () => {
    const [activeFilter, SetActiveFilter] = useState(false)
    return(
        
        <>
           <div className="stats">
               <div className={activeFilter ? "stats-filter active" : "stats-filter"} onClick={() => {return SetActiveFilter(true)}}>
                   <svg width="20" height="15" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="5" width="10" height="3" fill="#C4C4C4"/>
                   <path d="M15 6.5L9 12.1292V0.870835L15 6.5Z" fill="#C4C4C4" /></svg>
               </div>
               <StatsFilter />
          
               {/* <><StatsToken /></> */}
           </div>
            <div className="stats-collection_flex">
                <CollectionToken />
                <EveryToken />
            </div>
            <MenuFilter activeFilter={activeFilter} SetActiveFilter={SetActiveFilter} >
                {FilterData.map(({title, content, id}) => {
                        return(
                            <div key={title.toString()}>
                                <Accordion  title={title} content={content} />
                            </div>
                                
                            
                        )
                    })}
            </MenuFilter>

        </>
    )
}
export default Stats