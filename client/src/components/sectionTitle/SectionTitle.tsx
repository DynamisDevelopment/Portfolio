import React from 'react'
import './SectionTitle.sass'

interface Props {
    title: string,
    subtitle: string,
    email?: string,
    noLine?: boolean
}

const SectionTitle = ({ title, subtitle, email, noLine }: Props) => {
    return (
        <div className='SectionTitle'>
            <div className="title">
                {!noLine && <div className="line"></div>}
                <h1>{title}</h1>
                {!noLine && <div className="line"></div>}
            </div>
            <div className="subtitle">{subtitle}</div>
            {email && <a href={`mailto:${email}`} className="subSubtitle">Email: {email}</a>}
        </div>
    )
}
export default SectionTitle