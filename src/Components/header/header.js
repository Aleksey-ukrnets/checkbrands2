
import './style.scss'
import profile from '../../assets/image/profile.svg'
import wallet from '../../assets/image/wallet.svg'
import logo from '../../assets/image/logoHeader.svg'

import Menu from '../main/menu'

const Header = ({setActive}) => {
    return(
        <>
            <header className='header' id='header'> 
                <div className='header-main'>
                    <div className='header-nav'>
                        <img src={logo}  />
                        <Menu />
                        {/* <div className='header-logo'>
                            <img src={profile} className='header-logo_first' alt='logo' onClick={() => setActive(true)} />
                            <img src={wallet} alt='logo' />
                            </div> */}
                    </div>
                </div>
            </header>
        </>
    )


}
export default Header