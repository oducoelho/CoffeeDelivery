import styled from "styled-components";

export const BannerContent = styled.main`
  width: 256px;
  height: 310px;
  background: ${props => props.theme["base-card"]};
  margin-top: 3.375rem;
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;

  div, span, h1, h2, p, img{
    background: transparent;
  }
  `
export const CoffeeImg = styled.div`
  img {
    width: 120px;
    height: 120px;
    position: absolute;
    left: 307px;
    right: 0px;
    top: 870px;
    bottom: 0px;
  }
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
    color: ${props => props.theme["yellow-dark"]};
    background: ${props => props.theme["yellow-light"]};
  }

  h2 {
    font-size: 1.25rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    color: ${props => props.theme["base-subtitle"]};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    color: ${props => props.theme["base-label"]};
    text-align: center;
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
    background-color: ${props => props.theme["base-button"]};
    border-radius: 8px;
    font-family: 'Roboto';
  }
  span {
    cursor: pointer;
    font-family: 'Roboto';
    color: ${props => props.theme["purple-dark"]};
  }
`
export const Price = styled.p`
  span {
  font-family: 'Baloo 2', sans-serif;
  font-size: 25px;
  color: ${props => props.theme["base-text"]};
  strong {
    font-size: 13px;
    background: transparent;
    font-family: 'Roboto' sans-serif;
    padding-right: 5px;
  }
  }
`