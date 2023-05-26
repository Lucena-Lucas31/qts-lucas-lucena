let a = 'Oi'
let b = 'Olá'

Deno.test("Teste do oi (NO API)", () =>{
    if (a != "oi") {
        throw new Error (`${a} não é oi`);
    }
})

Deno.test("Titulo do teste", () =>{

})


Deno.test("Não pode ser oi (NO API)", () =>{
    if (b == "oi") {
        throw new Error (a, `é oi`);
    }
})
