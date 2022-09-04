import React, { FC } from 'react'
import './PageHeader.scss';

type PageHeaderProps = {
    title: string,
    paragraph: string,
}

const PageHeader: FC<PageHeaderProps> = ({ title, paragraph }) => {
    return (
        <div className="header__container">
            <h1 className="header__title">{title}</h1>
            <p className="header__paragraph">{paragraph}</p>
        </div>
    )
}

export default PageHeader;
