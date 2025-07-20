import styled from "styled-components"
import Titulo from "../../Titulo"

const PupularesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

const ListaDeImagens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
  `

const ImagemEstilizada = styled.img`
  width: 100%;
  min-width: 156px;
  min-height: 158px;
  border-radius: 10px;
`

const LinkEstilizado = styled.div`
  border: 2px solid #7B78E5;
  max-width: 156px;
  max-height: 158px;
  border-radius: 10px;
  text-align: center;
  padding: 14px 0;
  margin-top: 24px;
  & > a {
    color: white;
    font-weight: bold;
    font-size: 20px;
  }
`

const Populares = () => {
  return (
    <PupularesContainer>
      <Titulo $alinhamento="center">Populares</Titulo>
        <ListaDeImagens>
          <li>
            <ImagemEstilizada src="/imagens/populares/foto-1.png" alt="" />
          </li>
          <li>
            <ImagemEstilizada src="/imagens/populares/foto-2.png" alt="" />
          </li>
        </ListaDeImagens>
        <LinkEstilizado>
            <a>Ver mais</a>
        </LinkEstilizado>
    </PupularesContainer>
  )
}

export default Populares
