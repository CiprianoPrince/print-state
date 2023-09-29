import React from 'react';

const ShopLogo = ({ logo }) => {
    const { imagePath, altText } = logo;
    return (
        <div className="flex flex-row items-center gap-2">
            <img className="aspect-square w-12 rounded-lg" src={imagePath} alt={altText} />
            <span className="font-roboto text-4xl font-bold leading-10 text-secondary-950">
                print<span className="text-accent-500">State</span>
            </span>
        </div>
    );
};

export default ShopLogo;
