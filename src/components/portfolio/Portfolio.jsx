import React, {useState, useEffect} from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'

export default function Portfolio() {
    

    const projects = [
        {
            id:'mern',
            title: 'MERNTasks',
            src: 'assets/MERN.png',
            url: 'https://github.com/Alex-parabol/TasksManager',
            deploy: ''
        },
        {
            id:'crypto',
            title: 'Crypto Exchange',
            src: 'assets/crypto.jpg',
            url: 'https://github.com/Alex-parabol/criptocurrency',
            deploy: 'https://cotizador-cryptos.netlify.app/'
        },
        {
            id:'cocktail',
            title: 'Cocktail-Maker',
            src: 'assets/coctail.jpg',
            url: 'https://github.com/Alex-parabol/cocktail-maker',
            deploy: 'https://cocktail-maker.netlify.app/'
        },
        {
            id:'songs',
            title: 'Songs and Lyrics',
            src: 'assets/music.jpg',
            url: 'https://github.com/Alex-parabol/lyrics',
            deploy: 'https://canciones-y-artistas.netlify.app/'
        },
        {
            id:'pixabay',
            title: 'Pixabay Clone',
            src: 'assets/pixabay.jpg',
            url: 'https://github.com/Alex-parabol/pixabay',
            deploy: 'https://pixabay-test-unit.netlify.app/'
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
                case 'songs':
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
                    url={project.url}
                    deploy={project.deploy}
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
                        <a 
                        className='link code'
                        href={data.url}
                        target="_blank" rel="noreferrer"
                        >My Code</a>
                        <a 
                        className='link webpage'
                        target="_blank" rel="noreferrer"
                         href={data.deploy}
                         >Webpage</a>
                    </div>
                </div>
              
            </div>
            
        </div>
    )
}
