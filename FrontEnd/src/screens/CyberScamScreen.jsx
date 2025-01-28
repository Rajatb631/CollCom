import React from 'react'

import img1 from '../assets/WorkAssets/cyberscamimg/cyberscamimg1.jpg'


import Footer from '../components/Footer.jsx'
import '../css/Footer.css'
import BannerCompo from '../components/BannerCompo.jsx';
import '../css/BannerCompo.css'
import bannerimg from '../assets/bannnerpic1.jpg'
import Navbar from '../components/Navbar.jsx';
import '../css/Navbar.css'
import CardsCompo from '../components/CardsCompo.jsx';
import '../css/CardsCompo.css'


export const CyberScamScreen = () => {

    const cards = [
        {
            image: img1,
            title: "Cyber Awareness Quiz",
            buttonText: "➔",
        }

    ];



    return (
        <div className="sanskarpage">
            <div className='navbar'><Navbar /></div>

            <div className='banner'><BannerCompo
                image={bannerimg}
                title={"Cyber Scam Awareness Quiz"}
                pagename={"Work"} />
            </div>


            <div className='allcards'>
                {cards.map((card,index) =>
                    <CardsCompo
                        title={card.title}
                        image={card.image}
                    />
                )

                }

            </div>
            <div> <Footer /></div>

        </div>


    )

}

export default CyberScamScreen