import {NavLink} from 'react-router-dom';
import './style.scss'


const Menu = () => {
    return(
        <>
        <div className='Link' style={{display:'flex'}}>
            <NavLink to='/' className="Link-routes">Persons</NavLink>
            <NavLink to='/brands' className="Link-routes">Brand</NavLink>
            <NavLink to='/stats' className="Link-routes">Statisctic</NavLink>
        </div>
        </>
    )
}
export default Menu