import Main from "../../Components/main/main"

import { BrandGroup } from "./brandGroup"
import { MainTitle } from "../../Components/main/MainTitle"
const  Brands = () => {

        return(
            <>
                <Main />
        <div className="wrapper">
     
            <div className='main-list'>
                   {BrandGroup.map((item,index) => {
                       return(
                           <>
                               <div className='main-person' key={item.id}>
                                        <div className='main-person_name' ></div>      
                                        <img src={item.image}  alt='account-card'/>
                                    </div> 
                           </>
                       )
                   })}    
            </div>  
        </div>    
            </>
        )
}
export default Brands