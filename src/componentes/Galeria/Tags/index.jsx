import styled from "styled-components"
import tags from "./tags.json"

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

const TagTitulo = styled.h3`
  font-size: 24px;
  font-weight: 400;
  color: #D9D9D9;
  margin: 0;
`

const Tag = styled.li`
  font-size: 24px;
  color: #FFFFFF;
  padding: 10px 8px;
  background-color: rgba(217, 217, 217, 0.3);
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: border 0.3s ease;
  &:hover {
    border-color: #C98CF1;
  }
`

const Tags = () => {
  return (
    <TagsContainer>
      <TagTitulo>Busque por tags:</TagTitulo>
      <ListaDeTags>
        {tags.map((tag) => 
          <Tag key={tag.id}>
            {tag.titulo}
          </Tag>
        )}
      </ListaDeTags>
    </TagsContainer>
  )
}

export default Tags
