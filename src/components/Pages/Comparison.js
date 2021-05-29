import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import FullCard from '../Car/FullCard'

function Comparison({data}) {
    return(
        <div className='comp-wrapper'>
            <Route path='/comparison/:brand'>
                <FullCard data={data} />
            </Route>
        </div>
    );
}

export default Comparison