import { NavLink } from 'react-router-dom';

const ShopNavLink = ({ name, path }) => {
    const anchorClass =
        'block p-6 text-secondary-950 hover:text-accent-500 text-lg font-medium duration-150';
    const handleActiveClass = ({ isActive }) => {
        if (isActive) return `${anchorClass} `;
        return anchorClass;
    };
    return (
        <li>
            <NavLink className={handleActiveClass} to={path}>
                {name}
            </NavLink>
        </li>
    );
};

export default ShopNavLink;
