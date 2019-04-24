import { sayHello } from '../src/say-hello';

describe("test suite", () => {
    it("say hello", () => {
        expect(sayHello("somebody")).toBe("hello somebody");
    });
});