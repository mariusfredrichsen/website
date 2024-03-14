import React, { useState, useEffect } from 'react';
import './App.css';
import './CV.css'



function CV() {
    const [hOpacity, setHeaderOpacity] = useState(1);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        // Adjust these values to suit your needs
        const fadeStart = 100; // 100px scroll or less will equiv to 1 opacity
        const fadeUntil = 600; // 500px scroll or more will equiv to 0 opacity
  
        let opacity = 1;
        if (scrollY <= fadeStart) {
          opacity = 1;
        } else if (scrollY <= fadeUntil) {
          opacity = 1 - (scrollY - fadeStart) / (fadeUntil - fadeStart);
        } else {
          opacity = 0;
        }
  
        setHeaderOpacity(opacity);
      };

      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        
      <div className='scroll'>
        <div className="CV">
          <h1 className='header' style={{opacity: hOpacity}}>Marius Fredrichsen</h1>
          <p className='content' style={{opacity: 1-hOpacity}}>

            Adresse: Oslo (mer detaljer oppgis ved forespørsel)<br/>
            Telefon: 94141698<br/>
            Epost: mariusfredrichsen@gmail.com<br/>
            Født: 15.08.2002<br/>
            <br/>
            <h2>Erfaring</h2>
            <b>Gruppelærer på Institutt for informatikk, Universitet i Oslo </b><br/>
            Underviser i gruppetimer og retter innleveringer innenfor emnet: 
            «IN1000 -Introduksjon til objektorientert programmering». 
            Opplegget er tilpasset for de med større interesse for programmering kalt «Fredagsfordypning».<br/>
            <b>Gartner på Asker kirke</b><br/>
            Klippet gress, klippet hekker, fjerning av ugress, trimming av trær, kantklipping, og vanning.<br/>
            <br/>
            <h2>Utdanning</h2>
            Informatikk: fritt sammensatt<br/>
            Studiespesialiserende med forskerlinje<br/>
            <br/>
            <h2>Prosjekter</h2>
            IN1060<br/>
            IN2000<br/>
            discord-bot<br/>
            sixpack-compose<br/>
            <br/>
            Annet<br/>
            Førerkort<br/>
            Språk<br/>
            <br/>
            Referanse<br/>
            Oppgis ved forespørsel
          </p>
        </div>
      </div>
    )
}

export default CV;