import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App Test", () => {
    it("App renders without crashing", () => {
        const app = shallow(<App />);
        expect(app).toBeDefined();
    });
    it("App renders a div.App-header", () => {
        const app = shallow(<App />);

        expect(app.find(".App-header")).toBeDefined();
    })
    it("App renders a div.App-body", () => {
        const app = shallow(<App />);

        expect(app.find(".App-body")).toBeDefined();
    })
    it("App renders a div.App-footer", () => {
        const app = shallow(<App />);

        expect(app.find(".App-footer")).toBeDefined();
    });
});
