import React from 'react';
import NavLinkList from './ShopNavLinkList';

const ShopNavBar = ({ navLinks }) => {
    return (
        <nav className="">
            <NavLinkList navLinks={navLinks} />
        </nav>
    );
};

export default ShopNavBar;
