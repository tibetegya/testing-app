const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const expect = require('chai').expect

const React = require('react');
const ReactDOM = require('react-dom/client');

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

const createWrapper = (Component) => {
    const dom = new JSDOM(`
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <div id="root"></div>
        </body>
    </html>`);
    global = dom.window
    const root = ReactDOM.createRoot(dom.window.document.getElementById('root'));
    root.render(e(Component));
    return dom
}
const wrapper = createWrapper(LikeButton);

console.log(wrapper.window.document.getElementById('root').innerHTML)

// describe('Obj test', function () {
//     const obj = {
//         name: 'hello'
//     }
//     it('should have property', function () {
//         expect(obj).to.haveOwnProperty('name')
//     })
// });