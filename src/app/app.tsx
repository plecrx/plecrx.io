import React from "react";
import {Route, Routes} from "react-router-dom";
import Footer from "../layouts/footer";
import LegalNotice from "../pages/legalNotice/legalNotice";
import Menu from "../components/menu/menu";
import Home from "../pages/home/home";

const App = () => {
    return (
        <div className="text-gray-400 body-font font-mono w-full ">
            <main className={'overflow-x-hidden'}>
                <Menu />
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/legal-notice' element={<LegalNotice/>}/>
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App
