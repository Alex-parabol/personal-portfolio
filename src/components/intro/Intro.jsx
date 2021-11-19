import React, {useEffect, useRef} from 'react'
import { init } from 'ityped'

import './intro.scss'

export default function Intro() {
  const textRef = useRef()
  useEffect(()=> {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      strings: ['Developer', 'Designer','Programmer']
    })
  }, [])
 

    return (
        <div className='intro' id='intro'>
          <div className="left">
            <div className="imgContainer">
              <img src="assets/Alex-done-finally.png" alt="Foto de perfil" />
            </div>
          </div>
          <div className="right">
            <div className="wrapper">
              <h2>Hi there, I'm</h2>
              <h1>Alejandro Zamora</h1>
              <h3>Web <span ref={textRef}></span></h3>
            </div>
            <a href="#portfolio">
              <img src="assets/arrow.png" alt="" />
            </a>
          </div>
        </div>
    )
}
