import React, {useState, useEffect } from 'react';
import './Navbar.css';
import { Button } from './Button';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='#homeanchor' className='navbar-logo' onClick = {closeMobileMenu}>
                    Daniel <i className='fa fa-id-card' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='#titleanchor' className='nav-links' onClick={closeMobileMenu}>
                            me
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='#cardsanchor' className='nav-links' onClick={closeMobileMenu}>
                            what i like
                        </Link>
                        
                    </li>
                    <li className='nav-item'>
                        <Link to='#projectanchor' className='nav-links' onClick={closeMobileMenu}>
                            projects
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='#ending' className='nav-links-mobile' onClick={closeMobileMenu}>
                            about me
                        </Link>
                    </li>
                </ul>
                {button && <Button to='#ending' buttonStyle='btn--outline'>Click Me!</Button>}
            </div>
        </nav>
    </>

  )
}

export default Navbar
