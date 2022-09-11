import React, { FC } from 'react'
import "./Label.scss";

type LabelProps = {
    label?: string
}

const Label: FC<LabelProps> = ({ label }) => (
    <label className="label" htmlFor="amount">{label}</label>
)

export default Label;