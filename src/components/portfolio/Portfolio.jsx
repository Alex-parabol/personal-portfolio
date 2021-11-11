import React, {useState, useEffect} from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'

export default function Portfolio() {
    

    const projects = [
        {
            id:'mern',
            title: 'MERNTasks',
            src: 'assets/MERN.png'
        },
        {
            id:'crypto',
            title: 'Crypto Exchange',
            src: 'assets/crypto.jpg'
        },
        {
            id:'cocktail',
            title: 'Cocktail-Maker',
            src: 'assets/coctail.jpg'
        },
        {
            id:'news',
            title: 'News Web',
            src: 'assets/google-news-t.jpg'
        },
        {
            id:'pixabay',
            title: 'Pixabay Clone',
            src: 'assets/pixabay.jpg'
        },

    ] 

    const [selected, setSelected ]= useState('mern');
    const [data, setData ] = useState([])

    useEffect(()=>{
        switch(selected){
                case 'mern':
                setData(projects[0]);
                break;
                case 'crypto':
                setData(projects[1]);
                break;
                case 'cocktail':
                setData(projects[2]);
                break;
                case 'news':
                setData(projects[3]);
                break;
                case 'pixabay':
                setData(projects[4]);
                break;
                default:
                setData(projects[0])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selected])
    
    return (
        <div className='portfolio' id='portfolio'> 
            <h1>Portfolio</h1>
           
            <ul>
               {projects.map(project => (
                   <PortfolioList
                    title={project.title}
                    id={project.id}
                    active={selected === project.id}
                    setSelected={setSelected}
                    key={project.id}
                    />
               ))}
            </ul> 
            <div className="wrapper">
               
                    <div className="container">
                    <div className="item">
                        <img src={data.src} alt={data.title} />
                        <h3>{data.title}</h3>
                    </div>
                </div>
              
            </div>
            
        </div>
    )
}
