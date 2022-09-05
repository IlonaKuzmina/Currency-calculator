import React, { FC } from 'react'
import './PageContentContainer.scss';

type PageContentContainerProps = {
    children: React.ReactNode;
}

export const PageContentContainer: FC<PageContentContainerProps> = ({ children }) => (
    <div className="page__content--wrapper">{children}</div>
)
