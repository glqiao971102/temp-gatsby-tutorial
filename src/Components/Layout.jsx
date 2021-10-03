import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import 'normalize.css'
import '../assets/css/main.css'

export default function Layout(props) {
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    )
}


