import styled from "styled-components"
import search from "../../assets/search.png"

const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
`

const CampoTextoEstilizado = styled.input`
    width: 566px;
    height: 56px;
    padding: 0.75rem 1rem;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.25rem;
`

const IconeLupa = styled.img`
  position: absolute;
  right: 1rem;
  bottom: 50%;
  transform: translateY(25%);
  width: 38px;
  height: 38px;
`

const CampoTexto = (props) => {
  return (
    <ContainerEstilizado>
      <CampoTextoEstilizado placeholder="O que você procura?" {...props} />
      <IconeLupa src={search} />
    </ContainerEstilizado>
  )
}

export default CampoTexto
