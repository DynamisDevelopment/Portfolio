import React from 'react'
import './SectionTitle.sass'

interface Props {
    title: string,
    subtitle: string,
    email?: string
}

const SectionTitle = ({ title, subtitle, email }: Props) => {
    return (
        <div className='SectionTitle'>
            <div className="title">
                <div className="line"></div>
                <h1>{title}</h1>
                <div className="line"></div>
            </div>
            <div className="subtitle">{subtitle}</div>
            {email && <a href={`mailto:${email}`} className="subSubtitle">Email: {email}</a>}
        </div>
    )
}
export default SectionTitle