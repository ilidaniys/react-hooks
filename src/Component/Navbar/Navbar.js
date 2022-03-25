import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className={'navbar navbar-dark bg-primary navbar-expand-lg'}>
                <div className="navbar-brand">
                    Github Search
                </div>
                <ul className={'navbar-nav'}>
                    <li className={'nav-item'}>
                        <a href="/" className={'nav-link'}>
                            Main
                        </a>
                    </li>
                    <li className={'nav-item'}>
                        <a href="/about" className={'nav-link'}>
                            Info
                        </a>
                    </li>
                    <li className={'nav-item'}>
                        <a href="/profile" className={'nav-link'}>
                            Profile
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;