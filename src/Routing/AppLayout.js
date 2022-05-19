import Header from "../Components/header/header";
import {Outlet,Link} from 'react-router-dom';
// import Registration from "../Components/registration/registration";
import Footer from "../Components/footer/footer";
import Modal from "../Components/Modal/modal";
import { useState } from "react";

const AppLayout = () => {
    const [active, setActive] = useState(false)
    return(
        <>
            <Header setActive={setActive}  />
            <main style={{position: 'relative'}}>
                <Outlet />   
            </main>
            {/* <Registration /> */}
            {/* <Footer /> */}
            <Modal active={active} setActive={setActive} />
           
        </>
    )
}
export default AppLayout