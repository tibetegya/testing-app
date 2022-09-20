import React from 'react'


function SecondApp() {
    const onClick = () => {
        // console.log('hello');
    }
    return (
        <div>
            <p>Hello World</p>
            <button onClick={onClick}>Click me!</button>
        </div>
    )
}

export default SecondApp
