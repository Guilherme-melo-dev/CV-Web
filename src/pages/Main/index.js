import React, { useState } from 'react';
import './styles.css'

import imgHome from '../../assets/imgs/imgHome.jpg'
import NavBar from '../../components/Navbar'
import { BsArrowRight } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import ModalLogin from '../../components/Modals/ModalLogin'
import ModalRegister from '../../components/Modals/ModalRegister'


const cards = [
  { id: 1, title: "Nome da campanha1", desc: "Lorem Ipsum é simplesmente uma simulação de texto da " },
  { id: 2, title: "Nome da campanha2", desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos." },
  { id: 3, title: "Nome da campanha3", desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos." },
  { id: 3, title: "Nome da campanha3", desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos." },
]



function Main() {
  const [isActiveLog, setIsActiveLog] = useState(false)
  const [isActiveCad, setIsActiveCad] = useState(false)
  const OpenModalLog = () => setIsActiveLog(true)
  const CloseModalLog = () => setIsActiveLog(false)
  const OpenModalCad = () => setIsActiveCad(true)
  const CloseModalCad = () => setIsActiveCad(false)
  return (
    <>
      <div className="container-initial">
        <div id="nav-bar">
          <NavBar
            title="Conectando Vidas"
            nav1="Instituições"
            nav2="Campanhas"
            nav3="Sobre"
            buttonAccess={
              <button id="btnAcceNav" type="button" onClick={OpenModalLog}>
                Acessar
              </button>
            }
            buttonRegister={
              <button id="btnCadNav" onClick={OpenModalCad}>
                Cadastrar
                <div id="arrowBtnCad">
                  <BsArrowRight size={30} />
                </div>
              </button>
            }
          />
        </div>

        {/* Aqui começa página Inicial */}

        <div className="container-content-initial">
          <div id="texts-home">
            <p id="title-initial">Conectando Vidas</p>
            <p id="desc-initial">
              O Conectando Vidas é um app gratuito que tem como objetivo
              incentivar a doação de sangue. O serviço conecta potenciais
              doadores com os hemocentros mais próximos a ele.
            </p>
            <button type="button" id="btnCon">
              Conhecer
            </button>
          </div>
          <div id="Image-home">
            <img src={imgHome} alt="Imagem Home" />
          </div>
        </div>
        <div className="modals">
          {isActiveLog ? (
            <ModalLogin
              buttonclose={
                <button id="closeModalBtn" onClick={CloseModalLog}>
                  <AiOutlineClose size={30} />
                </button>
              }
            />
          ) : null}
          {isActiveCad ? (
            <ModalRegister
              buttonclose={
                <button id="closeModalBtn" onClick={CloseModalCad}>
                  <AiOutlineClose size={30} />
                </button>
              }
            />
          ) : null}
        </div>

        {/* Aqui começa página de instituições */}

        <div className="container-Institutions">
          <h1>Instituições</h1>
          <h1>Guilherme Melo</h1>
        </div>

        {/* Aqui começa página de instituições */}

        <div className="container-campaigns">
          <div id="container-texts-camp">
            <p id="title-page-camp">Campanhas</p>
            <p id="desc-page-camp">
              Com a sua ajuda podemos conectar ainda mais vidas por meio de
              campanhas. Veja as disponíveis abaixo e ajude-nos a incentivar a
              doação de sangue
            </p>
          </div>
          <div id="container-cards">
              {cards.map(({id, title, desc}) => (
                <div key={id} id="containercard">
                  <div id="content">
                    <p id="title-card">{title}</p>
                    <p id="desc-card">{desc}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Aqui começa página de instituições */}

        <div className="container-about">
          <h1>Sobre</h1>
          <h1>Guilherme Melo</h1>
        </div>
      </div>
    </>
  );
}

export default Main