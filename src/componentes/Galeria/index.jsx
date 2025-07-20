import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tags from "./Tags"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
  display: flex;
`

const SecaoFluida = styled.section`
  flex-grow: 1;
  flex: 4;
`

const Test = styled.section`
  flex: 1;
`

const ImagemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`

const Galeria = ({ fotos = [], aoFotoSelecionada }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagemContainer>
            {fotos.map(foto => 
              <Imagem
                key={foto.id}
                foto={foto}
                aoZoomSolicitado={aoFotoSelecionada}
              />
            )}
          </ImagemContainer>
        </SecaoFluida>
        <Test>
          <Populares />
        </Test>
      </GaleriaContainer>
    </>
  )
}

export default Galeria
