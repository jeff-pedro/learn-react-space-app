import { useState } from "react"
import styled from "styled-components";

const Figure = styled.figure`
  width: ${ (props) => props.$expandida ? "90%" : "460px" };
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0 0 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`

const Imagem = ({ foto }) => {
  const [expandida, setExpandida] = useState(false);
  console.log(expandida)

  return (
    <Figure $expandida={expandida} >
      <img src={foto.path} alt="" />
      <figcaption>
        <footer>
            <h3>Titulo</h3>
            <h4>Fonte/examplo/satélite</h4>
            <button>Favoritos</button>
            <button
              onClick={() => setExpandida(!expandida)}
            >Expandida</button>
        </footer>
      </figcaption>
    </Figure>
  )
}

export default Imagem
