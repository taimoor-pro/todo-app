import React from 'react'

export const Heading = (props) => {
    const { className, text } = props
    return (
        <h1 className={className}>{text}</h1>
    )
}
