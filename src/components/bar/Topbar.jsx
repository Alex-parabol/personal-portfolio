import React from 'react'
import './topbar.scss'
import { Person, Mail} from '@material-ui/icons'

export default function Topbar({menuOpen, setMenuOpen}) {

    
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>MyPortfolio.</a>
                    <div className="itemContainer">
                        <Person className='icon'/>
                        <span>+34 601278317</span>
                    <div className="itemContainer">
                        <Mail className='icon'/>
                        <span>Alexlabora@gmail.com</span>
                        </div>   
                    </div>
                </div>
                <div className="right">
                    <div 
                    onClick={()=> setMenuOpen(!menuOpen)}
                    className="hamburguer">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
