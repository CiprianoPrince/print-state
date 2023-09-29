import React from 'react';
import ShopCartButton from './ShopCartButton';
import ShopSigninButton from './ShopSigninButton';
import ShopSignupButton from './ShopSignupButton';

const ShopActionButtons = () => {
    return (
        <div className="flex flex-row items-center gap-4">
            <ShopCartButton />
            <ShopSigninButton />
            <ShopSignupButton />
        </div>
    );
};

export default ShopActionButtons;
