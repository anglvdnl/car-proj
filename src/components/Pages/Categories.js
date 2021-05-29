import React from 'react';
import Cat from '../Categories/Cat'

function Categories ({data}) {

    return(
        <div className='cat-wrapper'>
                <Cat data={data} />
        </div>
    );
}

export default Categories;