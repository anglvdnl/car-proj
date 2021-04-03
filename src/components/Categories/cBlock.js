import React, {useState} from 'react'
import classNames from 'classnames/dedupe';
import { CSSTransition } from 'react-transition-group';

function CarBlock(props) {
    const [toggle, setToggle] = useState(false)

    let classes = {'img-block': true}
    classes[toggle] = true

    return(
        <div onClick={() => setToggle(!toggle)} className='car-block'>
            <img className={classNames(classes)} src={props.model} />
                <CSSTransition
                in={toggle}
                timeout={300}
                classNames='ul'
                unmountOnExit>
                <ul className='car-list'>
                    <li>
                        <a href='#'>BMW Series 7</a>
                    </li>
                </ul>   
              </CSSTransition>
        </div>
        
    );
}

export default CarBlock