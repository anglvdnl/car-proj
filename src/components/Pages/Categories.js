import React from 'react';
import Cat from '../Categories/Cat'

function Categories ({data, addCar, imgs}) {

    return(
        <div className='cat-wrapper'>
                <Cat imgs={imgs} data={data} addCar={addCar} />
        </div>
    );
}

export default Categories;