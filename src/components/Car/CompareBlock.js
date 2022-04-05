import React from 'react'

export default function CompareBlock({cinfo}) {
    return (
        <div className='compblock'>
            <div className='char'>
                <h1>{cinfo.model}</h1>
                <p>Year — {cinfo.year}</p>
                <h3>Dimensions</h3>
                <p>Wheelbase — {cinfo.wb}mm</p>
                <p>Lenght — {cinfo.length}mm</p>
                <p>Width — {cinfo.width}mm</p>
                <p>Height — {cinfo.height}mm</p>
                <p>Weight — {cinfo.weight}mm</p>
                <p>Engine</p>
                <p>Engine —</p>
                <p>Horse Power —{cinfo.hp}/</p>
                <p>Highway MPG 100km</p>
                <p>City MPG —{cinfo.cmpg}100km</p>
                <p>Max Speed —</p>                
                <p>From 0 to 100 —{cinfo.to100}s</p>
                <p>Torque Curve —{cinfo.tc}Hm</p>
            </div>
        </div>
    )
}