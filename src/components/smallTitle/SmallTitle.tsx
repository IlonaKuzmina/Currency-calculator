import React, { FC, ReactNode } from 'react'
import './SmallTitle.scss';

type SmallTitleProps = {
    children: ReactNode;
}

const SmallTitle: FC<SmallTitleProps> = ({ children }) => (
    <h2 className="title">{children}</h2>
);

export default SmallTitle;
