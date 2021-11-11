import React from 'react'
import './portfolioList.scss'

export default function PortfolioList({title,id, active, setSelected}) {
    return (
        <div className='portfolioList'>
            <li 
            className={active ? 'portfolioList active' : 'portfolioList'}
            id={id}
            onClick={()=> setSelected(id)}
            >{title}</li>
        </div>
    )
}
