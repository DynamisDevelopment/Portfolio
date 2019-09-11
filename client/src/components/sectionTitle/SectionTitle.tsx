import React from 'react'
import './SectionTitle.sass'

interface Props {
    title: string
}

const SectionTitle = ({ title }: Props) => {
    return (
        <div className='SectionTitle'>
            <div className="line"></div>
            <h1>{title}</h1>
            <div className="line"></div>
        </div>
    )
}
export default SectionTitle