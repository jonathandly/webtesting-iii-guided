import React from 'react';

function Speaker(props) {
    const { speak, message="" } = props;
    
    return (
        <>
            <button onClick={speak}>Speak</button>
            <div>{message}</div>
        </>
    );
}

export default Speaker;
