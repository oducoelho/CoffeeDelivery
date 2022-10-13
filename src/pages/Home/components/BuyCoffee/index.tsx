import { CoffeeComponent } from './style'
import { CoffeeBanner } from '../CoffeeBanner'

import expressoTradicional from '../../../../assets/expresso-tradicional.svg'
import expressoAmericano from '../../../../assets/expresso-americano.svg'
import expressoCremoso from '../../../../assets/expresso-cremoso.svg'
import expressoGelado from '../../../../assets/expresso-gelado.svg'
import cafeComLeite from '../../../../assets/cafe-com-leite.svg'
import latte from '../../../../assets/latte.svg'
import capuccino from '../../../../assets/capuccino.svg'
import macchiato from '../../../../assets/macchiato.svg'
import mocaccino from '../../../../assets/mocaccino.svg'
import chocolateQuente from '../../../../assets/chocolate-quente.svg'
import cubano from '../../../../assets/cubano.svg'
import havaiano from '../../../../assets/havaiano.svg'
import arabe from '../../../../assets/arabe.svg'
import irlandes from '../../../../assets/irlandes.svg'

export const BuyCoffee = () => {
  const coffees = [
    {
      id: 1,
      image: expressoTradicional,
      type: 'TRADICIONAL',
      title: 'Expresso Tradicional',
      subtitle: 'O traditional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 2,
      image: expressoAmericano,
      type: 'TRADICIONAL',
      title: 'Expresso Americano',
      subtitle: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
    },
    {
      id: 3,
      image: expressoCremoso,
      type: 'TRADICIONAL',
      title: 'Expresso Cremoso',
      subtitle: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
    },
    {
      id: 4,
      image: expressoGelado,
      type: 'TRADICIONAL',
      typeTwo: 'GELADO',
      title: 'Expresso Gelado',
      subtitle: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
    },
    {
      id: 5,
      image: cafeComLeite,
      type: 'TRADICIONAL',
      typeTwo: 'COM LEITE',
      title: 'Café com Leite',
      subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
    },
    {
      id: 6,
      image: latte,
      type: 'TRADICIONAL',
      typeTwo: 'COM LEITE',
      title: 'Latte',
      subtitle:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
    },
    {
      id: 7,
      image: capuccino,
      type: 'TRADICIONAL',
      typeTwo: 'COM LEITE',
      title: 'Capuccino',
      subtitle:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
    },
    {
      id: 8,
      image: macchiato,
      type: 'TRADICIONAL',
      typeTwo: 'COM LEITE',
      title: 'Macchiato',
      subtitle: 'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
    },
    {
      id: 9,
      image: mocaccino,
      type: 'TRADICIONAL',
      typeTwo: 'COM LEITE',
      title: 'Mocaccino',
      subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
    },
    {
      id: 10,
      image: chocolateQuente,
      type: 'TRADICIONAL',
      typeTwo: 'COM LEITE',
      title: 'Chocolate Quente',
      subtitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
    },
    {
      id: 11,
      image: cubano,
      type: 'TRADICIONAL',
      typeTwo: 'COM LEITE',
      typeThere: 'ALCOÓLICO',
      title: 'Cubano',
      subtitle:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
    },
    {
      id: 12,
      image: havaiano,
      type: 'ESPECIAL',
      title: 'Havaiano',
      subtitle: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
    },
    {
      id: 13,
      image: arabe,
      type: 'ESPECIAL',
      title: 'Árabe',
      subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
    },
    {
      id: 14,
      image: irlandes,
      type: 'ESPECIAL',
      typeTwo: 'ALCOÓLICO',
      title: 'Irlandês',
      subtitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
    },
  ]

  return (
    <CoffeeComponent>
      <h1>Nossos Cafés</h1>

      <div>
        {coffees.map((coffee) => {
          return (
            <CoffeeBanner
              key={coffee.id}
              coffee={coffee}
              /* id={coffes.id}
              type={coffes.type}
              typeTwo={coffes.typeTwo}
              typeThere={coffes.typeThere}
              image={coffes.image}
              title={coffes.title}
              subtitle={coffes.subtitle} */
            />
          )
        })}
      </div>
    </CoffeeComponent>
  )
}
