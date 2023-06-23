import {
    assert,
    assertAlmostEquals,
    assertFalse,
    assertArrayIncludes
} from "http://deno.land/std/testing/asserts.ts"

let num1 = 10
let num2 = 10

Deno.test("Teste AssertAlmostEquals", () => {
    assertAlmostEquals(num1 + num2, 20);
});

Deno.test("Teste AssertArrayIncludes", () => {
    assertArrayIncludes(array1, [9]); 
});

Deno.test("Text with letter is not numeric.", () => {
    assertFalse(isNumber("hello"));

});

