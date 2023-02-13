class Productos{
    constructor(id,category,name,price,stock,img,rom,ram,colour,description){
        this.id = id
        this.category = category
        this.name = name
        this.price = price
        this.stock = stock
        this.img = img
        this.rom = rom
        this.ram = ram
        this.color = colour
        this.descrition = description
    };
};

const iPhone13 = new Productos("iPhone13","iPhone", "iPhone 13", 1200, 25, "../src/assets/iPhone13Azul.webp");
const iPhone13Mini = new Productos("iPhone13-Mini","iPhone", "iPhone 13 Mini", 999, 30, "../src/assets/iPhone13MiniVerde.webp");
const iPhone13Pro = new Productos("iPhone13-Pro","iPhone", "iPhone 13 Pro", 1389, 32, "../src/assets/iPhone13ProPlata.webp");
const iPhone13ProMax = new Productos("iPhone13-Pro-Max","iPhone", "iPhone 13 Pro Max", 1600, 20, "../src/assets/iPhone13ProMax.webp");
const MacBookAirM2 = new Productos("MacBookAirM2-2022","Macbook", "Macbook Air M2 2022",2300,30,"../src/assets/MacBookAirM2-2022.webp","256 GB SSD","8 GB RAM","Starlight","La notebook Apple MacBook Air M2 2022 es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.");

export const arrayProductos = [iPhone13,iPhone13Mini,iPhone13Pro,iPhone13ProMax,MacBookAirM2];

export function gFetch(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(true){
                resolve(arrayProductos)
            }
        }, 2000)
    })
}