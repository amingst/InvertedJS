import capitalizeFirstLetter from "./capitalizeFirstLetter";

describe('capitalize first letter', () => {
    it('should capitalize the first letter of a string', () => {
        expect(capitalizeFirstLetter('hello')).toBe('Hello');
    })
})