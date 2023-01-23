import expressoTradicional from './assets/Type=Expresso.png';
import expressoAmericano from './assets/Type=Americano.png';
import expressoCremoso from './assets/Type=Expresso Cremoso.png';
import expressoGelado from './assets/Type=Café Gelado.png';
import cafeComLeite from './assets/Type=Café com Leite.png';
import latte from './assets/Type=Latte.png';
import capuccino from './assets/Type=Capuccino.png';
import macchiato from './assets/Type=Macchiato.png';
import mochaccino from './assets/Type=Mochaccino.png';
import chocolateQuente from './assets/Type=Chocolate Quente.png';
import cubano from './assets/Type=Cubano.png';
import havaiano from './assets/Type=Havaiano.png';
import arabe from './assets/Type=Árabe.png';
import irlandes from './assets/Type=Irlandês.png';

export const coffees = [
    {id: 1, name: 'Expresso Tradicional', description: 'O tradicional café feito com água quente e grãos moídos', tag: [{name:'TRADICIONAL'}], price: '9.90', image: expressoTradicional},
    {id: 2, name: 'Expresso Americano', description: 'Expresso diluído, menos intenso que o tradicional', tag: [{name:'TRADICIONAL'}], price: '9.90', image: expressoAmericano},
    {id: 3, name: 'Expresso Cremoso', description: 'Café expresso tradicional com espuma cremosa', tag: [{name:'TRADICIONAL'}], price: '9.90', image: expressoCremoso},
    {id: 4, name: 'Expresso Gelado', description: 'Bebida preparada com café expresso e cubos de gelo', tag: [{name:'TRADICIONAL'}], price: '9.90', image: expressoGelado},
    {id: 5, name: 'Café com Leite', description: 'Meio a meio de expresso tradicional com leite vaporizado', tag: [{name:'TRADICIONAL'}, {name:'COM LEITE'}], price: '9.90', image: cafeComLeite},
    {id: 6, name: 'Latte', description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa', tag: [{name:'TRADICIONAL'}, {name:'COM LEITE'}], price: '9.90', image: latte},
    {id: 7, name: 'Capuccino', description: 'Bebida com canela feita de doses iguais de café, leite e espuma', tag: [{name:'TRADICIONAL'}, {name: 'COM LEITE'}], price: '9.90', image: capuccino},
    {id: 8, name: 'Macchiato', description: 'Café expresso misturado com um pouco de leite quente e espuma', tag: [{name:'TRADICIONAL'}, {name: 'COM LEITE'}], price: '9.90', image: macchiato},
    {id: 9, name: 'Mocaccino', description: 'Café expresso com calda de chocolate, pouco leite e espuma', tag: [{name:'TRADICIONAL'}, {name: 'COM LEITE'}], price: '9.90', image: mochaccino},
    {id: 10, name: 'Chocolate Quente', description: 'Bebida feita com chocolate dissolvido no leite quente e café', tag: [{name:'ESPECIAL'}, {name: 'COM LEITE'}], price: '9.90', image: chocolateQuente},
    {id: 11, name: 'Cubano', description: 'Drink gelado de café expresso com rum, creme de leite e hortelã', tag: [{name:'ESPECIAL'}, {name: 'ALCOÓLICO'}, {name: 'GELADO'}], price: '9.90', image: cubano},
    {id: 12, name: 'Havaiano', description: 'Bebida adocicada preparada com café e leite de coco', tag: [{name:'ESPECIAL'}], price: '9.90', image: havaiano},
    {id: 13, name: 'Árabe', description: 'Bebida preparada com grãos de café árabe e especiarias', tag: [{name:'ESPECIAL'}], price: '9.90', image: arabe},
    {id: 14, name: 'Irlandês', description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly', tag: [{name:'ESPECIAL'}, {name: 'ALCOÓLICO'}], price: '9.90', image: irlandes},
]