import styled from "styled-components"

const FigureEstilizado = styled.figure`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin: 0;
  max-width: 100%;
  min-height: 328px;
  background-image: ${ (props) => `url(${props.$backgroundImage})` };
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
`

const TituloEstilizado = styled.h1`
    max-width: 300px;
    padding: 0 64px;
    font-size: 40px;
    line-height: 48px;
    font-weight: 400;
    color: #FFF;
`

const Banner = ({texto, backgroundImage}) => {
  return (
    <FigureEstilizado $backgroundImage={backgroundImage}>
      <TituloEstilizado>
        {texto}
      </TituloEstilizado>
    </FigureEstilizado>
  )
}

export default Banner
