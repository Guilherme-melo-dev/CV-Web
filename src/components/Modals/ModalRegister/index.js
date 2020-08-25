import React from 'react';
import './styles.css'
import { fadeInRight } from 'react-animations';

import Radium, {StyleRoot} from 'radium';
 
const styles = {
  fade: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInRight, 'fade')
  }
}

function ModalRegister(props) {
  return (
    <>
    <StyleRoot>
      <div className="container-modal" style={styles.fade}>
        <div id="content-modal">
          <div id="icon-top">{props.buttonclose}</div>
          <div id="container-form">
            <p id="formtitleLog">Cadastrar</p>
            <p id="infotext">Informe seu E-mail abaixo e venha conectar vidas</p>
            <form>
              <input type="text" placeholder="E-mail"/>
              <button id="btnEventLog">Cadastrar</button>
            </form>
          </div>
        </div>
      </div>
      </StyleRoot>
    </>
  );
}

export default ModalRegister;