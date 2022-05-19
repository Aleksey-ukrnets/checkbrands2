import StatsToken from "./tokenstats"

import './style.scss'

import arrowup from '../../../assets/image/arrowup.svg'

const CollectionToken = () => {
    return(
        <>
         <StatsToken>
                    <div className='stats-any'>
                        <div className='stats-account'>Collection</div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div className="stats-arrow-up">
                            <div className='stats-price_filter stats-values'>Volume</div>
                            <img src={arrowup} />   
                        </div>
                        <div className='stats_update stats-values'>24h %</div>
                        <div className='stats_update stats-values'>7d %</div>
                        <div className='stats-value stats-values'>Floor Price</div>
                        <div className='stats-owners stats-values'>Owners</div>
                        <div className='stats-items stats-values'>Items</div>    
                    </div>
        </StatsToken>  
        </>
    )
}
export default CollectionToken