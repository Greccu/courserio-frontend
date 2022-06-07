import React,  { useState } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar'

const PageContainer: React.FC = ({ children }) => {
    return (
        <>
            <Navbar />
            <div style={{marginTop:"80px"}}>
                {children}
            </div>
            <Footer />
        </>
    );
}

export default PageContainer;