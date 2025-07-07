import { useState } from "react"
import styled from "styled-components"

const Figure = styled.figure`
  position: relative;
  display: flex;
  flex-flow: column;
  width: ${ (props) => props.$expandida ? "150%" : "448px" };
  max-width: 100%;
  margin: 0;
  transition: border 0.05s ease;
  &:hover {
    border: solid 1px rgba(217, 217, 217, 0.7);
  }
  border-radius: 20px;
  overflow: hidden;
`
const ImagemEstilizada = styled.img`
  min-width: 100%;
`

const Tag = styled.p`
  position: absolute;
  right: 10px;
  top: 10px;
  color: #FFFFFF;
  background-color: rgba(217, 217, 217, 0.4);
  font-size: 16px;
  line-height: 16px;
  padding: 10px;
  border-radius: 10px;
  margin: 0;
  z-index: 1;
`

const FigureCaption = styled.figcaption`
  position: absolute;
  bottom: 0;
  min-width: 100%;
  background-color: #001634;
  padding: 16px;
  box-sizing: border-box;
  border: none;
`

const Footer = styled.footer`
  display: flex;
  color: #FFF;
`

const InfoContainer = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  font-size: 20px;
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
  }
` 

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 30px;
`

const Button = styled.button`
  background: transparent;
  background-image: ${ props => `url(${props.$icone})`};
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  width: 20px;
  height: 20px;
`

const Imagem = ({ caminho, fonte, titulo }) => {
  const [expandida, setExpandida] = useState(false);

  return (
    <Figure $expandida={expandida}>
      <ImagemEstilizada src={caminho} alt="" />
      <Tag>Todos</Tag>
      <FigureCaption>
        <Footer>
          <InfoContainer>
            <h3>{titulo}</h3>
            <p>Fonte/{fonte}/satélite</p>
          </InfoContainer>
          <ButtonsContainer>
            <Button $icone="/icones/favorito-ativo.png" />
            <Button 
              $icone="/icones/expandir.png" 
              onClick={ () => setExpandida(!expandida) } />
          </ButtonsContainer>
        </Footer>
      </FigureCaption>
    </Figure>
  )
}

export default Imagem
