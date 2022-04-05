import React from 'react'

function Hero(props){

    return(
            <div className='hero-info'>
                <h1>
                    {props.h1}
                </h1>
                <p>
                    {props.p}
                </p>
            </div>
    )
}

export default Hero