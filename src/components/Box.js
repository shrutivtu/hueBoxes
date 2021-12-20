import React, { useState } from 'react';
import './box.css';
import {choice} from './helpers';

const Box = (props) => {
    const [color, setColor] = useState(choice(props.colors));
    // let defaultProps = {
    //     colors: ["purple", "magenta", "lilac", "pink"]
    // };

    const pickColor = () => {
        let newColor = choice(props.colors);
        while(newColor === color){
            newColor = choice(props.colors);
        }
        setColor(newColor);
    }

    const handleClick = () => {
        console.log('clicked');
        pickColor();
    }

    return(
        <div className="Box" style={{ backgroundColor: color}} onClick={() => handleClick()}></div>
    )
}

// Box.defaultProps = {
//     colors: ["purple", "magenta", "violet", "pink"]
// }

export default Box;