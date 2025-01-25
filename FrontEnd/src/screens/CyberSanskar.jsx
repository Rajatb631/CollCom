import React from 'react'
import Navbar from '../components/Navbar.jsx';
import '../css/Navbar.css'
import CardsCompo from '../components/CardsCompo.jsx';
import '../css/CardsCompo.css'
import img1 from '../assets/WorkAssets/cyberawarenesspic.jpeg'
import img2 from '../assets/WorkAssets/cybermagazinepic.jpg'
import img3 from '../assets/WorkAssets/cybertrainingpic.png'
import Footer from '../components/Footer.jsx'
import '../css/Footer.css'
export const CyberSanskar = () => {

    const cards = [
        {
            image: img1, // Replace with your image URLs
            title: "Online Cyber Training Awareness Mega Campaign",
            buttonText: "➔",
        },
        {
            image: img2, // Replace with your image URLs
            title: "Cyber Sanskar Magazine",
            buttonText: "➔",
        },
        {
            image: img3, // Replace with your image URLs
            title: "Cyber Awareness Workshop",
            buttonText: "➔",
        },
        {
            image: img1, // Replace with your image URLs
            title: "Online Cyber Training Awareness Mega Campaign",
            buttonText: "➔",
        }
        
    ];


    return (
        <div className="sanskarpage">
            <div className='navbar'><Navbar/></div>
            <div className='banner'>this is the banner</div>
            <div className='allcards'>
                {cards.map((card, index) =>
                    <CardsCompo
                    title={card.title}
                    image={card.image}
                    />
            )

                }

            </div>
            <div> <Footer/></div>

        </div>


    )
}


export default CyberSanskar