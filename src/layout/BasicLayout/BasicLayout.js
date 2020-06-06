import React from 'react'
import Footer from "../Footer";
import Header from "../Header";

const BasicLayout = ({children}) => {
    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default BasicLayout