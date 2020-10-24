import React from 'react'
import Button from '../../core/components/Button'
import './styles.scss'

const Home = () => (
    <div className="main-home">
        <h1 className="home-title">
            Desafio do Capítulo 3, <br/>
            Bootcamp DevSuperior
        </h1>
        <p className="home-description">
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br /> <br />

            Favor observar as instruções passadas no capítulo sobre a elaboração <br />
            deste projeto. <br /> <br />
            
            Este design foi adaptado a partir de Ant Design System for Figma, de <br />
            Mateusz Wierzbicki: <a href="mailto:antforfigma@gmail.com" className="mail-referece">antforfigma@gmail.com</a>
        </p>
        <Button text="Começar" to="/search"/>
    </div>
);

export default Home;
