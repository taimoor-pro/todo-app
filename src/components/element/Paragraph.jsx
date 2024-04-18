import React from 'react'

export const Paragraph = (props) => {
    const { className, text } = props
    return (
        <p className={className}>{text}</p>
    )
}
