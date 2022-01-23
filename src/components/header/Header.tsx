import React from 'react';

/*
 * Purpose: The purpose of this component is to render header nav bar.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const Header: React.FC = () => {
    return (
        <div className="nav-container">
            <div className="logo">Where in the world?</div>
            <div className="mode">Dark mode</div>
        </div>
   );
};
export default Header;
