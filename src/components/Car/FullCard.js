import React from 'react';
import CompareBlock from './CompareBlock';

function getBiggestElement(array, prop) {
    var biggest = Math.max(...array.map(prop));
    return array.find(x => prop(x) === biggest);
}

function FullCard ({data, cars, clearCars}){
    const newData = data;
    getBiggestElement(newData, x => x.year).biggestYear = true
    getBiggestElement(newData, x => x.wb).biggestWheelBase = true
    getBiggestElement(newData, x => x.length).biggestLenght = true
    getBiggestElement(newData, x => x.width).biggestWidth = true
    getBiggestElement(newData, x => x.height).biggestHeight = true
    getBiggestElement(newData, x => x.weight).biggesWeight = true
    getBiggestElement(newData, x => x.hp).biggestHp = true
    getBiggestElement(newData, x => x.cmpg).biggestCmpg = true
    getBiggestElement(newData, x => x.hmpg).biggestHmpg = true
    getBiggestElement(newData, x => x.maxspeed).biggestMaxspeed = true
    getBiggestElement(newData, x => x.to100).biggestTo100 = true
    getBiggestElement(newData, x => x.tc).biggestTc = true
    return(
        <div className='full-card'>
            <button className='reset' onClick={() => clearCars()}>Reset Cars</button>
            {cars.map((cinfo, key) =>(
                <CompareBlock key={key} cinfo={newData[cinfo]} />
            ))}
        </div>
        )
}

export default FullCard