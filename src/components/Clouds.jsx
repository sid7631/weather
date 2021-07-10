import React from 'react'

const Clouds = () => {
    return (
        <React.Fragment>
            <div className="cloud" id="cloud-back"></div>
            <div className="cloud" id="cloud-mid"></div>
            <div className="cloud" id="cloud-front"></div>
            <svg width="0" height="0">
                <filter id="filter-back">
                    <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="4"
                        seed="0" />
                    <feDisplacementMap in="SourceGraphic" scale="170" />
                </filter>
                <filter id="filter-mid">
                    <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2"
                        seed="0" />
                    <feDisplacementMap in="SourceGraphic" scale="150" />
                </filter>
                <filter id="filter-front">
                    <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2"
                        seed="0" />
                    <feDisplacementMap in="SourceGraphic" scale="100" />
                </filter>
            </svg>
        </React.Fragment>
    )
}

export default Clouds
