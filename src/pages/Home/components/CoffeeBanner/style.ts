import styled from 'styled-components'

export const BannerContent = styled.main`
  width: 256px;
  height: 310px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  margin: 4rem 3.532rem 0 0;

  div,
  span,
  h1,
  h2,
  p,
  img {
    background: transparent;
  }
`
export const Container = styled.main`
  display: inline-block;
`
export const Content = styled.div`
  padding: 120px 20px;
`
export const CoffeeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 0.625rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    padding: 0.2rem;
    border-radius: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
  }

  h2 {
    font-size: 1.25rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
  }
`
export const CoffeeImg = styled.div`
  img {
    position: absolute;
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -9.25rem;
    margin-left: -3.5rem;
  }
`
export const BuyArea = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 0 0.5rem;
  padding-top: 2rem;

  div {
    display: flex;
    width: 72px;
    height: 38px;
    background: red;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    background-color: ${(props) => props.theme['base-button']};
    border-radius: 8px;
    font-family: 'Roboto';
  }
  span {
    cursor: pointer;
    font-family: 'Roboto';
    color: ${(props) => props.theme['purple-dark']};
  }
`
export const Price = styled.p`
  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 25px;
    color: ${(props) => props.theme['base-text']};
    strong {
      font-size: 13px;
      background: transparent;
      font-family: 'Roboto' sans-serif;
      padding-right: 5px;
    }
  }
`
