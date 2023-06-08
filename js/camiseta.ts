//Interfaz

interface CamisetaBase{
    setColor(color);
    getColor():string;
}

//Decorador

function estampar(logo:string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log(`Estampando ${logo}`);
        }
    }
}

// Clase molde del objeto
@estampar('Gucci Gang')
class Camiseta implements CamisetaBase{
    // Atributos
    // Propiedades características del objeto
    //public: Se accede desde cualquier lugar, protected: se accede desde la clase que lo define o clases que hereden de ésta, y private: los atributos o metodos son accesibles desde la clase donde se definen 
    private color: string; 
    private talla: string;
    private modelo: string;
    private marca: string;
    private precio: number;

    // Métodos funciones o acciones del objeto
    constructor(color:string, modelo:string, marca:string, talla:string, precio:number){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    };
    public setColor(color){
        this.color = color;
    }
    public getColor(){
        return this.color;
    }
}

//Clase Hija

class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha:boolean){
        this.capucha = capucha;
    }
    getCapucha(){
        return this.capucha;
    }
}

let camiseta = new Camiseta('Rojo', 'Manga Larga', 'Nike', 'L', 14);

console.log(camiseta);
camiseta.estampacion();
let sudaderaNike = new Sudadera('Negro', 'Manga Larga', 'Adidas', 'L', 14);
sudaderaNike.setCapucha(true);
sudaderaNike.setColor('Gris');
console.log(sudaderaNike);





