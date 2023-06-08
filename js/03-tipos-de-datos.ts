type alfanumerico = string | number;

//string
let cadena: alfanumerico= 'Helena Rodríguez Munuera';

cadena = 12;

//number

let numero: number = 12;

//Booleano

let verdadero_falso:boolean = true;

//Any

let cualquiera: any = 'Hola';

//Arrays

let lenguajes:Array<string> = ['PHP', 'JSON', 'CSS'];
let numeros:Array<number> = [1,2,3];
let varios:Array<any> = [1,'Hola',3];

let lenguas:string[] = ['PHP', 'JSON', 'CSS'];
let years:number[] = [1999,2023,2003];

console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, numeros, varios);