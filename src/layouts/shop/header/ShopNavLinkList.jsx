import ShopNavLink from './ShopNavLink';

const ShopNavLinkList = ({ navLinks }) => {
    return (
        <ul className="flex flex-row items-center justify-center">
            {navLinks.map(({ name, path }) => (
                <ShopNavLink key={name} name={name} path={path} />
            ))}
        </ul>
    );
};

export default ShopNavLinkList;
