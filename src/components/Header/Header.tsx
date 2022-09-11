import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button';
import './Header.scss';

export const Header = () => {
    const getActiveLinkClassName = (isActive: boolean) => (
        isActive ? 'link link--active' : 'link'
    );

    return (
        <div className='header__navigation--wrapper'>
            <div className='logo--wrapper'>
                <img className="logo" src="/assets/logo/logo.png" alt="logo" />
            </div>

            <div className='navigation__links--wrapper'>
                <NavLink className={({ isActive }) => getActiveLinkClassName(isActive)} to="/calculator">Calculator</NavLink>
                <NavLink className={({ isActive }) => getActiveLinkClassName(isActive)} to="/editor">Fee Editor</NavLink>
            </div>

            <div className='navigation__btn--wrapper'>
                <NavLink className='link' to={''}>Sign In</NavLink>
                <Button label={'Register'} btnClass={'primary'} />
                <Button label={'Get the App'} btnClass={'primary'} />
            </div>
        </div>
    )
}
