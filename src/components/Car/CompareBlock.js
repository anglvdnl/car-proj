import React from 'react'

export default function CompareBlock({cinfo}) {
    return (
        <div className='compblock'>
            <div className='char'>
                <h1><p>{cinfo.model}</p></h1>
                <p className="mchar" style={{color: 'white'}}>Year Of Development —{'\u00A0'}{cinfo.year}</p>
                <p className="special">Dimensions</p>
                <p className="mchar">Wheelbase —{'\u00A0'}<p style={{color:(cinfo.biggestWheelBase ? "green" : "red")}}>{cinfo.wb}mm</p></p>
                <p className="mchar">Lenght —{'\u00A0'}<p style={{color:(cinfo.biggestLenght ? "green" : "red")}}>{cinfo.length}mm</p></p>
                <p className="mchar">Width —{'\u00A0'}<p style={{color:(cinfo.biggestWidth ? "green" : "red")}}>{cinfo.width}mm</p></p>
                <p className="mchar">Height —{'\u00A0'}<p style={{color:(cinfo.biggestHeight ? "green" : "red")}}>{cinfo.height}mm</p></p>
                <p className="mchar">Weight —{'\u00A0'}<p style={{color:(cinfo.biggesWeight ? "green" : "red")}}>{cinfo.weight}mm</p></p>
                <p className="special">Engine</p>
                <p className="mchar">Engine —{'\u00A0'}<p style={{color: 'white'}}>{cinfo.engine}</p>{'\u00A0'}</p>
                <p className="mchar">Horse Power —{'\u00A0'}<p style={{color:"white"}}>{cinfo.hp}HP</p></p>
                <p className="mchar">Highway MPG —{'\u00A0'}<p style={{color:(cinfo.biggestHmpg ? "green" : "red")}}>{cinfo.hmpg}</p>{'\u00A0'}l/100km</p>
                <p className="mchar">City MPG —{'\u00A0'}<p style={{color:(cinfo.biggestCmpg ? "green" : "red")}}>{cinfo.cmpg}</p>{'\u00A0'}l/100km</p>
                <p className="mchar">Max Speed —{'\u00A0'}<p style={{color:"white"}}>{cinfo.maxspeed}km</p></p>
                <p className="mchar">From 0 to 100 —{'\u00A0'}<p style={{color:(cinfo.biggestTo100 ? "green" : "red")}}>{cinfo.to100}s</p></p>
                <p className="mchar">Torque Curve —{'\u00A0'}<p style={{color:(cinfo.biggestTc ? "green" : "red")}}>{cinfo.tc}Hm</p></p>
            </div>
        </div>
    )
}