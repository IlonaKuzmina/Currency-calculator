import React, { FC, ReactNode } from 'react'
import './SmallTitle.scss';

type SmallTitleProps = {
    children: ReactNode;
}

const SmallTitle: FC<SmallTitleProps> = ({ children }) => (
    <h2 className="small__title--title">{children}</h2>
);

export default SmallTitle;
