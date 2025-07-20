import styled from "styled-components"
import Imagem from "../Galeria/Imagem"
import { useState } from "react"

const Overlay = styled.div`
 background-color: rgba(0, 0, 0, 0.7);
 position: fixed;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
`

const DialogEstilizada = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  border: none;
  
  figure {
    width: 1156px;
  }

  form {
    position: absolute;
    top: 24px;
    right: 24px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`

const DialogContainer = styled.div`
  position: relative;
`


const ModalZoom = ({ foto }) => {
  const [overlay, setOverlay] = useState(true)

  const aoSubmeter = () => {
    setOverlay(false)
  }
  
  return (
    <>
      {foto && <>
        { overlay && <Overlay /> }
        <DialogEstilizada open={!!foto}>
          <DialogContainer>
            <Imagem
              foto={foto}
              expandida={true}
            />
            <form onSubmit={aoSubmeter} method="dialog">
              <button>
                <img src="/icones/fechar.png" alt="Botão fechar" />
              </button>
            </form>
          </DialogContainer>
        </DialogEstilizada>
      </>}
    </>
  )
}

export default ModalZoom
