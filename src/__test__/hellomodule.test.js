import {sayHello} from "../hellomodule.js";

describe("hellomodule", () => {
    test("#sayHello - should return 'hello world'", () => {
        expect(sayHello("world")).toBe("hello world");
    });
});
