import { checkhealth } from "../app";

test("check health function", () => {
    const receiver1 = checkhealth({name: 'Маг', health: 90});
    const receiver2 = checkhealth({name: 'Маг', health: 45});
    const receiver3 = checkhealth({name: 'Маг', health: 10});
    expect(receiver1).toBe('healthy')
    expect(receiver2).toBe('wounded')
    expect(receiver3).toBe('critical')
})