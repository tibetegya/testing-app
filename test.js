const React = require('react');

const Bar = function () {
    const render = () => {
        return 'hello'
    }
    return <>{20}</>
}

let res = Object.getOwnPropertyDescriptors(Bar.prototype).constructor
console.log('-->', res)