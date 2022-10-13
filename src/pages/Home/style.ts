import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  margin: 10rem 24rem;
  img {
    width: 50rem;
  }
`

export const Content = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.25;
    line-height: 1.625rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const Context = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
  display: flex;
  flex-direction: column;
  line-height: 130%;
  padding-top: 3rem;
  img {
    width: 2rem;
    height: 2rem;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem 1rem 0;
  }
`

export const Topics = styled.div`
  display: flex;
  gap: 0.5rem;
`
