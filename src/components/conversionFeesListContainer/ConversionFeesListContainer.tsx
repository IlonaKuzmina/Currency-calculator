import React from 'react'
import FeeListTable from '../FeeListTable/FeeListTable';
import SmallTitle from '../SmallTitle/SmallTitle';
import './ConversionFeesListContainer.scss';

const ConversionFeesListContainer = () => (
    <div>
        <SmallTitle>List of currency conversion fees</SmallTitle>
        <div className="fee__list--container">
            <FeeListTable />
        </div>
    </div>
)

export default ConversionFeesListContainer;