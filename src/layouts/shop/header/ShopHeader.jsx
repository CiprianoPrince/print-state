import ShopActionButtons from './ShopActionButtons';
import ShopLogo from './ShopLogo';
import ShopNavBar from './ShopNavBar';
const ShopHeader = ({ constant }) => {
    const { logo, navLinks } = constant;
    return (
        <header className="sticky w-full shadow-lg">
            <div className="container mx-auto px-6">
                <div className="flex flex-row items-center justify-between">
                    <ShopLogo logo={logo} />

                    <ShopNavBar navLinks={navLinks} />

                    <ShopActionButtons />
                </div>
            </div>
        </header>
    );
};

export default ShopHeader;
