let entrada = prompt("Ingresa tu nombre");
entrada = entrada.toUpperCase();
alert ("Bienvenido " + entrada);

while (entrada != "OK" ){
alert(entrada + " , por cualquier consulta, no dudes en comunicarte con nosotros");
entrada = prompt("Ingrese OK para ir al Sitio Web");
entrada = entrada.toUpperCase();
}


const productos = [
    {id: 1001, name: 'Matafuegos Polvo Quimico (1 kg.)', risk: 'incendio', capacidad: '1 kilogramo', price: 1000},
    {id: 1002, name: 'Matafuegos Polvo Quimico (2,5 kg.)', risk: 'incendio', capacidad: '2,5 kilogramo', price: 2500},
    {id: 1003, name: 'Matafuegos Polvo Quimico (100 kg.)', risk: 'incendio', capacidad: '100 kilogramo', price: 80000},
    {id: 1004, name: 'Kit Automotor', risk: 'incendio', capacidad: '1 kilogramo + varios', price: 2500},
    {id: 1005, name: 'Barbijo Descartable x 50 U.', risk: 'covid19', capacidad: '50 unidades', price: 1500},
    {id: 1006, name: 'Barbijo Tricapa x 50 U.', risk: 'covid19', capacidad: '50 unidades', price: 2500},
    {id: 1007, name: 'Barbijo N95 x 50 U.', risk: 'covid19', capacidad: '50 unidades', price: 8000},
    {id: 1008, name: 'Mascara Facial', risk: 'covid19', capacidad: '1 unidad', price: 2000}
]

const filtro = productos.filter ((el) => el.risk.includes ('incendio'))

console.log (filtro)


const total = filtro.reduce ((acumulador, elemento) => acumulador + elemento.price, 0)

console.log (total)



