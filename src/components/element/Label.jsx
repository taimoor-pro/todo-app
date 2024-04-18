import React from 'react'

export const Label = (props) => {
    const { className, text } = props
    return (
        <label className={className}>{text}</label>

    )
}
