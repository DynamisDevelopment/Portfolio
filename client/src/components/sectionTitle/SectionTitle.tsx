import React from 'react'
import './SectionTitle.sass'

interface Props {
    title: string,
    subtitle: string
}

const SectionTitle = ({ title, subtitle }: Props) => {
    return (
        <div className='SectionTitle'>
            <div className="title">
                <div className="line"></div>
                <h1>{title}</h1>
                <div className="line"></div>
            </div>
            <div className="subtitle">{subtitle}</div>
        </div>
    )
}
export default SectionTitle