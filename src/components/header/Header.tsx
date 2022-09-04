import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../button/Button';
import './Header.scss';

export const Header = () => {
    const getActiveLinkClassName = (isActive: boolean) => (
        isActive ? 'link link--active' : 'link'
    );
    return (
        <div className='header__navigation--wrapper'>
            <div className='logo--wrapper'>
                <img className="logo" src="/assets/logo/logo.png" alt="" />
            </div>

            <div className='navigation__links--wrapper'>
                <NavLink className={({ isActive }) => getActiveLinkClassName(isActive)} to="/editor">Fee Editor</NavLink>
                <NavLink className={({ isActive }) => getActiveLinkClassName(isActive)} to="/calculator">Calculator</NavLink>
            </div>

            <div className='navigation__btn--wrapper'>
                <NavLink className='link' to={''}>Sign In</NavLink>
                <Button label={'Register'} btnClass={'primary'} onClick={() => { }} />
                <Button label={'Get the App'} btnClass={'primary'} onClick={() => { }} />
            </div>
        </div>
    )
}
