import Notifications from "./Notifications";
import { shallow } from "enzyme";
import React from "react";

describe('Test Notification component', () => {
    it("Notification renders without crashing", () => {
        const notify = shallow(<Notifications />)
        expect(notify).toBeDefined()
    });
    it("Notifications renders ul", () => {
        const notify = shallow(<Notifications />)
        expect(notify.find("ul")).toBeDefined()
    });
    it("verify that Notifications renders three list items", () => {
        const notify = shallow(<Notifications />)
        expect(notify.find('li')).toBeDefined()
    })
    it("Notifications renders the text Here is the list of notifications", () => {
        const notify = shallow(<Notifications />)
        expect(notify.find("p").text()).toBe("Here is the list of notifications")
    })
});
