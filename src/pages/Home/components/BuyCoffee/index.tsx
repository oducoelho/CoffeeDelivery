import { CoffeeComponent } from "./style"
import { CoffeeBanner } from "../CoffeeBanner"

import expressoTradicional from "../../../../assets/expresso-tradicional.svg"
import expressoAmericano from "../../../../assets/expresso-americano.svg"
import expressoCremoso from "../../../../assets/expresso-cremoso.svg"
import expressoGelado from "../../../../assets/expresso-gelado.svg"
import cafeComLeite from "../../../../assets/cafe-com-leite.svg"
import latte from "../../../../assets/latte.svg"
import capuccino from "../../../../assets/capuccino.svg"
import macchiato from "../../../../assets/macchiato.svg"
import mocaccino from "../../../../assets/mocaccino.svg"
import chocolateQuente from "../../../../assets/chocolate-quente.svg"
import cubano from "../../../../assets/cubano.svg"
import havaiano from "../../../../assets/havaiano.svg"
import arabe from "../../../../assets/arabe.svg"
import irlandes from "../../../../assets/irlandes.svg"

export const BuyCoffee = () => {
  const TypeOfCoffee = [
    {
      id: 1,
      image: <img src={expressoTradicional} alt="" />,
      type: "TRADICIONAL",
      title: "Expresso Tradicional",
      subtitle: "O traditional café feito com água quente e grãos moídos",
    },
    {
      id: 2,
      image: <img src={expressoAmericano} alt="" />,
      type: "TRADICIONAL",
      title: "Expresso Americano",
      subtitle: "Expresso diluído, menos intenso que o tradicional",
    },
    {
      id: 3,
      image: <img src={expressoCremoso} alt="" />,
      type: "TRADICIONAL",
      title: "Expresso Cremoso",
      subtitle: "Café expresso tradicional com espuma cremosa",
    },
    {
      id: 4,
      image: <img src={expressoGelado} alt="" />,
      type: "TRADICIONAL", 
      typeTwo: "GELADO",
      title: "Expresso Gelado",
      subtitle: "Bebida preparada com café expresso e cubos de gelo",
    },
    {
      id: 5,
      image: <img src={cafeComLeite} alt="" />,
      type: "TRADICIONAL", 
      typeTwo: "COM LEITE",
      title: "Café com Leite",
      subtitle: "Meio a meio de expresso tradicional com leite vaporizado",
    },
    {
      id: 6,
      image: <img src={latte} alt="" />,
      type: "TRADICIONAL", 
      typeTwo: "COM LEITE",
      title: "Latte",
      subtitle: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    },
    {
      id: 7,
      image: <img src={capuccino} alt="" />,
      type: "TRADICIONAL", 
      typeTwo: "COM LEITE",
      title: "Capuccino",
      subtitle: "Bebida com canela feita de doses iguais de café, leite e espuma",
    },
    {
      id: 8,
      image: <img src={macchiato} alt="" />,
      type: "TRADICIONAL", 
      typeTwo: "COM LEITE",
      title: "Macchiato",
      subtitle: "Café expresso misturado com um pouco de leite quente e espuma",
    },
    {
      id: 9,
      image: <img src={mocaccino} alt="" />,
      type: "TRADICIONAL", 
      typeTwo: "COM LEITE",
      title: "Mocaccino",
      subtitle: "Café expresso com calda de chocolate, pouco leite e espuma",
    },
    {
      id: 10,
      image: <img src={chocolateQuente} alt="" />,
      type: "TRADICIONAL", 
      typeTwo: "COM LEITE",
      title: "Chocolate Quente",
      subtitle: "Bebida feita com chocolate dissolvido no leite quente e café",
    },
    {
      id: 11,
      image: <img src={cubano} alt="" />,
      type: "TRADICIONAL", 
      typeTwo: "COM LEITE",
      typeThere: "ALCOÓLICO",
      title: "Cubano",
      subtitle: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    },
    {
      id: 12,
      image: <img src={havaiano} alt="" />,
      type: "ESPECIAL", 
      title: "Havaiano",
      subtitle: "Bebida adocicada preparada com café e leite de coco",
    },
    {
      id: 13,
      image: <img src={arabe} alt="" />,
      type: "ESPECIAL", 
      title: "Árabe",
      subtitle: "Bebida preparada com grãos de café árabe e especiarias",
    },
    {
      id: 14,
      image: <img src={irlandes} alt="" />,
      type: "ESPECIAL", 
      typeTwo: "ALCOÓLICO",
      title: "Irlandês",
      subtitle: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    },
    
    
  ]
  
  return (
    <CoffeeComponent>
      <h1>Nossos Cafés</h1>
      
      <div>

      </div>
      
      
      <div>
      {TypeOfCoffee.map(coffes => {
        return (
          <CoffeeBanner 
            id={coffes.id}
            type={coffes.type}
            typeTwo={coffes.typeTwo}
            typeThere={coffes.typeThere}
            image={coffes.image}
            title={coffes.title}
            subtitle={coffes.subtitle}
          />
        )
      })}
      </div>

    </CoffeeComponent>
  )
}
