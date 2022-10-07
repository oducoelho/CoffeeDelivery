import cup from '../../assets/image-home.svg'
import CaféFresco from '../../assets/cafe-fresco.svg'
import SimpleseSegura from '../../assets/compra-simples-e-segura.svg'
import Entrega from '../../assets/entrega-rapida.svg'
import Embalagem from '../../assets/embalagem.svg'
import { Content, Context, HomeContainer, Topics } from './style'
import { BuyCoffee } from './components/BuyCoffee'

export const Home = () => {
  return (
    <div>
      <HomeContainer>
        <div>
          <Content>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
              hora
            </p>
          </Content>

          <Context>
            <Topics>
              <span> <img src={SimpleseSegura} alt="" /> Compra simples e segura</span>
              <span><img src={Embalagem} alt="" />Embalagem mantém o café intacto</ span>
            </Topics>

            <Topics>
              <span> <img src={Entrega} alt="" /> Entrega rápida e rastreada</span>
              <span> <img src={CaféFresco} alt="" /> O café chega fresquinho até você</span>
            </Topics>
          </Context>
        </div>
      <img src={cup} alt="" />

      </HomeContainer>
      <div>
        <BuyCoffee />

      </div>
    </div>
  )
}
