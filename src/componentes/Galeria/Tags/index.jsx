import styled from "styled-components"

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  margin-top: 56px;
`

const ListaDeTags = styled.ul`
  list-style: none;
  display: flex;
  gap: 24px;
`

const Tag = styled.li`
  display: flex;
    align-items: center;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  color: #FFFFFF;
  padding: 10px 8px;
  background-color: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  border: ${ (props) => props.$ativo ? "solid 2px #C98CF1" : "" };
`

const ParagrafoEstilizado = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #D9D9D9;
`

const Tags = () => {
  return (
    <TagsContainer>
      <ParagrafoEstilizado>Busque por tags:</ParagrafoEstilizado>
      <ListaDeTags>
        <Tag
          $ativo={true}
        >
          Estrelas
        </Tag>
        <Tag>
          Galáxias
        </Tag>
        <Tag>
          Lua
        </Tag>
      </ListaDeTags>
    </TagsContainer>
  )
}

export default Tags
