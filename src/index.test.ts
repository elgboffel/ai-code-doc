
import { expect, test, describe } from 'vitest'
import {AUTO_MAP_KEY, C} from "./index";
import "reflect-metadata";


describe('Index', () => {
    // test("gives an equal result to the input", () => {
    //     const input = "hello";
    //
    //     const output = testString(input);
    //
    //     expect(output).toBe(input);
    // })
    
    test("test class decorator", () => {
        const c = new C();
        
        console.log("REFLECT", Reflect.getMetadata(AUTO_MAP_KEY, c));
        
        expect(c instanceof C).toBe(c instanceof C);
    });
})
