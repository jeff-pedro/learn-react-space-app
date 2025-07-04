import styled from "styled-components"

const ItemDeListaEstilizado = styled.li`
  text-decoration: none;
`

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {
  return (
    <ItemDeListaEstilizado>
      <img src={ ativo ? iconeAtivo : iconeInativo } alt="" />    
      {children}
    </ItemDeListaEstilizado>
  )
}

export default ItemNavegacao
