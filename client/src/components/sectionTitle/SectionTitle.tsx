import React from 'react'
import './SectionTitle.sass'

interface Props {
    title: string,
    subtitle: string,
    subSubtitle?: string
}

const SectionTitle = ({ title, subtitle, subSubtitle }: Props) => {
    return (
        <div className='SectionTitle'>
            <div className="title">
                <div className="line"></div>
                <h1>{title}</h1>
                <div className="line"></div>
            </div>
            <div className="subtitle">{subtitle}</div>
            {subSubtitle && <div className="subSubtitle">{subSubtitle}</div>}
        </div>
    )
}
export default SectionTitle