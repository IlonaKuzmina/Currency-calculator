import React, { FC } from 'react'
import './MainPageWrapper.scss';

type MainPageWrapperProps = {
  children: React.ReactNode;
}

export const MainPageWrapper: FC<MainPageWrapperProps> = ({ children }) => (
  <div className="main__page--container">
    <div className="main__page--wrapper">
      {children}
    </div>
  </div>
)
