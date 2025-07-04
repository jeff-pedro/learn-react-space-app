import styled from "styled-components"

const ListaEstilizada = styled.ul`
  list-style: none;
`

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <li>
            <div>
              <img src="icones/home-ativo.png" /> 
              <a href="">Início</a>
            </div>
            <div>
              <img src="icones/mais-vistas-ativo.png" /> 
              <a href="">Mais vistas</a>
            </div>
            <div>
              <img src="icones/mais-curtidas-ativo.png" /> 
              <a href="">Mais curtidas</a>
            </div>
            <div>
              <img src="icones/novas-ativo.png" /> 
              <a href="">Novas</a>
            </div>
            <div>
              <img src="icones/surpreenda-me-ativo.png" /> 
              <a href="">Surprenda-me</a>
            </div>
          </li>
        </ListaEstilizada>
      </nav>
    </aside>
  )
}

export default BarraLateral
