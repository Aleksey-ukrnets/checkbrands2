import {NavLink} from 'react-router-dom';
import './style.scss'


const Menu = () => {
    return(
        <>
        <div className='Link' style={{display:'flex'}}>
            <NavLink to='/stats' className="Link-routes">stats</NavLink>
            <NavLink to='/' className="Link-routes">persons</NavLink>
            <NavLink to='/brands' className="Link-routes">brands</NavLink>
        </div>
        </>
    )
}
export default Menu