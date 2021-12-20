import React from 'react';
import Box from './Box';
import './boxContainer.css';

const BoxContainer = (props) => {
    const boxes = Array.from({length: props.numBoxes}).map(
        () => <Box colors={props.allColors} />
    )
    return (
        <div className='box-container'>
            {boxes}
        </div>
    )
}

BoxContainer.defaultProps = {
    numBoxes: 18,
    allColors: ["purple", "magenta", "violet", "pink"]
}

export default BoxContainer
