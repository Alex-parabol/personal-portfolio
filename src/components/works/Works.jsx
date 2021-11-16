import React, {useState} from 'react'
import './works.scss'


export default function Works() {

    const [slide, setSlide ] = useState(0)

    const data = [
        {
            id: '1',
            icon: 'assets/front-end-icon.png',
            title: 'Front End Dev',
            description: 'I use technologies like react, css, scss, styled components, always following BEM and I love looking for the best UI/UX experience',
            img: 'assets/frontend.jpg'
        },
        {
            id: '2',
            icon: 'assets/backend.png',
            title: 'Backend Dev',
            description: 'I have a few projects with MERN. So I have been using mongo, express, react and node!',
            img: 'assets/backend.jpg'
        },
        {
            id: '3',
            icon: 'assets/design-icon.png',
            title: 'Design',
            description: 'Before I begin any of my projects, I try to sketch on places like figma, escalidraw etc.',
            img: 'assets/web-design-small.jpg'
        }
    ] 

    const handleClick = direction => {
        direction === 'left' ? setSlide(slide > 0 ? slide - 1 : 2) : 
       
        setSlide(slide < data.length -1 ? slide +1 : 0)
    
    }

    return (
        <div className='works' id='works'>
            <div className="slider" style={{transform:`translateX(-${slide * 100}vw)`}}>
                {data.map((d)=> (
                    <div key={d.id} className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="Frontend img" />
                                    </div>
                                    <h2>{d.title} </h2>
                                    <p>{d.description}</p>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="frontend mural" />
                            </div>
                        </div>
                </div>
                ))}
                
            </div>
            <img 
            src="assets/arrow-grey.png"
            className='arrow left'
            alt=""
            onClick={()=> handleClick('left')} 
             />
            <img
            src="assets/arrow-grey.png"
            className='arrow right'
            alt=""
            onClick={()=> handleClick('right')} 
            />
        </div>
    )
}
