import styled from "styled-components"
import Titulo from "../../Titulo"
import fotos from "./fotos-populares.json"

const ColunaFotos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Imagens = styled.img`
  max-width: 212px;
  border-radius: 20px;
`

const Botao = styled.button`
  background: transparent;
  color: #FFF;
  border: 2px solid;
  border-color: #C98CF1;
  border-radius: 10px;
  padding: 12px 20px;
  font-size: 20px;
  width: 100%;
  margin-top: 16px;
  cursor: pointer;
`

const Populares = () => {
  return (
    <section>
      <Titulo $alinhamento="center">Populares</Titulo>
      <ColunaFotos>
        {fotos.map(foto => <Imagens key={foto.id} src={foto.path} alt={foto.alt} />)}
      </ColunaFotos>
      <Botao>Ver mais</Botao>
    </section>
  )
}

export default Populares
