import React,  { useState } from 'react';
import Navbar from '../Navbar'

const PageContainer: React.FC = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
        <>
            <Navbar toggle={toggle} />
            {children}
        </>
    );
}

export default PageContainer;