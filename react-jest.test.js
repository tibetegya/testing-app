import { render, unmountComponentAtNode } from "react-dom";
import React from 'react';
import { act } from 'react-dom/test-utils';
import App from './app2'

let container = null;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


describe('App component', () => {
    it('rendering the App', () => {
        act(() => {
            render(<App />, container)
        })
        console.log(container.innerHTML)
    })
})

/**
 * - install jest
 * - install react react-dom
 * - to test react apps follow the react testing recipes. -> https://reactjs.org/docs/testing-recipes.html
 * - use act helper from react-dom/test-utils -> https://reactjs.org/docs/testing-recipes.html#act
 * - to use JSX syntax you need to use babel and install the necessary presets (@babel/preset-react) -> https://babeljs.io/docs/en/babel-preset-react
 * - to use babel with jest you need to add the babel-jest plugin. -> https://jestjs.io/docs/getting-started#using-babel
 * - to simulate a browser environment using jest you need to add a configuration to jesct config "testEnvironment" -> https://jestjs.io/docs/configuration#testenvironment-string
 *   and also add the "jest-environment-jsdom" package -> https://jestjs.io/docs/tutorial-jquery 
 *   
 */