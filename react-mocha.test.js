import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
import sinon from 'sinon';

import App from "./App";
import SecondApp from "./app2";

let rootContainer;

beforeEach(() => {
    rootContainer = document.createElement("div");
    document.body.appendChild(rootContainer);
});

afterEach(() => {
    sinon.restore();
    document.body.removeChild(rootContainer);
    rootContainer = null;
});

describe("App Component Testing", () => {
    it("Renders Hello World Title", () => {
        act(() => {
            ReactDOM.render(<App />, rootContainer);
        });
        const h1 = rootContainer.querySelector("p");
        expect(h1.textContent).to.equal("Hello World");
    });
});

describe("Scond App Component Testing", () => {
    it("Click Button", () => {
        const fake = sinon.replace(console, "log", sinon.fake(console.log));
        act(() => {
            ReactDOM.render(<SecondApp />, rootContainer);
        });
        const h1 = rootContainer.querySelector("p");
        rootContainer.querySelector("button").click();
        sinon.restore();
        expect(fake.firstArg).to.equal('hello')
        expect(h1.textContent).to.equal("Hello World");
    });
});