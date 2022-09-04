import React, { FC } from 'react'
import "./Label.scss";

type LabelProps = {
    label?: string
}

export const Label: FC<LabelProps> = ({ label }) => {
    return (
        <>
            <label className="label" htmlFor="amount">{label}</label>
        </>
    )
}

export default Label;