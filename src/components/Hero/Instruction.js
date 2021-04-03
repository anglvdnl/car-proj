import React from 'react';
import lambo from '../files/lambo.png'
import tesla from '../files/tesla.png'

function Instrustion() {
    return(
        <div className='inst'>
            <h1>Instruction</h1>
            <img src={tesla} />
            <img src={lambo} />
            <div>
                <p>
                You just need to go to the <b>Categories</b> section and select the models you are interested in. After that, feel free to go to the next section where you can see their characteristics.
                </p>
                <br />
                <p>
                Anyway, without instructions, you would understand how to use it, this text is here only so that the start page does not look so empty :)
                </p>
            </div>
        </div>
    );
}

export default Instrustion