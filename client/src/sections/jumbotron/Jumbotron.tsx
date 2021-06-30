import React from 'react'

import './Jumbotron.sass'

// * Components 
import Canvas from "../../components/canvas/canvas"

const Jumbotron = () => {
    return (
        <div>
            <div className="jumbotron-bg">
                <div className="content">
                    <div className="title">Joshua Hall</div>
                    <div className="subtitle">Just another US based, self-taught, full-stack web and app developer trying not to starve to death ¯\_༼ •́ ͜ʖ •̀ ༽_/¯.</div>
                </div>
                <Canvas />
            </div>
        </div>
    )
}

export default Jumbotron