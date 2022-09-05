import React, { FC } from 'react'
import Button from '../Button/Button';
import FeeListSelect from '../FeeListSelect/FeeListSelect';
import SmallTitle from '../SmallTitle/SmallTitle';
import './ConversionFeesListContainer.scss';

type ConversionFeesListContainerProps = {
    buttonStatus: boolean;
    selectedOption: string;
    onSubmitHandler: () => void;
    onChangeHandler: (value: string) => void;
}

const ConversionFeesListContainer: FC<ConversionFeesListContainerProps> = ({ buttonStatus, onChangeHandler, onSubmitHandler }) => (
    <div>
        <SmallTitle>List of currency conversion fees</SmallTitle>
        <div className="fee__list--container">
            <FeeListSelect onChangeHandler={onChangeHandler} />
            <div className="delete__fee--container">
                <form className="delete__fee--container" onSubmit={onSubmitHandler}>
                    <Button label="Delete"
                        disabled={buttonStatus}
                        wrapperClass="delete__btn--wrapper"
                        btnClass={"delete"}>
                    </Button>
                </form>
            </div>
        </div>
    </div>
)

export default ConversionFeesListContainer;