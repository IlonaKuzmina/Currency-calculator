import React, { FC } from 'react'
import Button from '../button/Button';
import FeeListSelect from '../feeListSelect/FeeListSelect';
import SmallTitle from '../smallTitle/SmallTitle';
import './ConversionFeesListContainer.scss';

type ConversionFeesListContainerProps = {
    buttonStatus: boolean;
    selectedOption: string;
    onSubmitHandler: () => void;
    onChangeHandler: (e: string) => void;
}

const ConversionFeesListContainer: FC<ConversionFeesListContainerProps> = ({ buttonStatus, onChangeHandler, onSubmitHandler }) => {

    return (
        <div>
            <SmallTitle>List of currency conversion fees</SmallTitle>
            <div className="fee__list--container">
                <FeeListSelect onChangeHandler={(e) => { onChangeHandler(e); }} />
                <div className="delete__fee--container">
                    <form className="delete__fee--container" onSubmit={onSubmitHandler}>
                        <Button label="Delete"
                            disabled={buttonStatus}
                            wrapperClass="delete__btn--wrapper"
                            onClick={() => { }}
                            btnClass={"delete"}>
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ConversionFeesListContainer;