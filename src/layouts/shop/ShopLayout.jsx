import { Outlet } from 'react-router-dom';
import Header from './header/ShopHeader';
import Footer from './footer/Footer';
import { footerConstant, headerConstant } from '../../constants';

const Layout = () => {
    return (
        <>
            <Header constant={headerConstant} />
            <Outlet />
            <Footer constant={footerConstant} />
        </>
    );
};

export default Layout;
