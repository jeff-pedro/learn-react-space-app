import styled from "styled-components"

const ItemDeListaEstilizado = styled.li`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 30px;
  font-size: 24px;
  line-height: 29px;
  color: ${ (props) => props.$ativo ? "#7B78E5" : "#D9D9D9" };
  font-family: ${ (props) => props.$ativo ? "GandhiSansBold" : "GandhiSansRegular" };
  cursor: pointer;
`

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {
  return (
    <ItemDeListaEstilizado $ativo={ativo}>
      <img src={ ativo ? iconeAtivo : iconeInativo } alt="" />    
      {children}
    </ItemDeListaEstilizado>
  )
}

export default ItemNavegacao
