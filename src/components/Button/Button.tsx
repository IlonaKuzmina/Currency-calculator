import React, { FC, ReactNode } from 'react'
import './Button.scss';

type ButtonProps = {
    onClick?: () => void;
    label?: string;
    btnClass: 'delete' | 'add' | 'primary' | 'swaper',
    children?: ReactNode;
    wrapperClass?: 'delete__btn--wrapper' | 'add__btn--wrapper' | 'save__btn--wrapper';
    disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ onClick, label, btnClass, children, wrapperClass, disabled }) => (
    <div className={wrapperClass}>
        <button
            disabled={disabled}
            className={`button button-${btnClass}`}
            onClick={onClick}>
            {label}{children}
        </button>
    </div>

)

export default Button;