import React,  { useState } from 'react';
import { BackgroundColor } from '../../utils/theme';
import Footer from '../Footer';
import { HomePageBackground } from '../Home/HomeComponents';
import Navbar from '../Navbar'

const PageContainer: React.FC = ({ children }, customBackground:boolean) => {
    return (
        <>
            
            <Navbar />
            <div style={{marginTop:"80px" }}>
                {children}
            </div>
            <Footer />
        </>
    );
}

export default PageContainer;