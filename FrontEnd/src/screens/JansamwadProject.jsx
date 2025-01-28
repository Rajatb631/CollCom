import React from 'react'

import img1 from '../assets/WorkAssets/JansamwadPage/jansamwadimg1.jpg'
import img2 from '../assets/WorkAssets/JansamwadPage/jansamwadimg2.jpg'
import img3 from '../assets/WorkAssets/JansamwadPage/jansamwadimg3.jpg'
import img4 from '../assets/WorkAssets/JansamwadPage/jansamwadimg4.jpg'
import img5 from '../assets/WorkAssets/JansamwadPage/jansamwadimg5.jpeg'
import Footer from '../components/Footer.jsx'
import '../css/Footer.css'
import BannerCompo from '../components/BannerCompo.jsx';
import '../css/BannerCompo.css'
import bannerimg from '../assets/bannnerpic1.jpg'
import Navbar from '../components/Navbar.jsx';
import '../css/Navbar.css'
import CardsCompo from '../components/CardsCompo.jsx';
import '../css/CardsCompo.css'


export const JansamwadProject = () => {

    const cards = [
        {
            image: img1,
            title: "Experts Talk",
            buttonText: "➔",
        },
        {
            image: img2, 
            title: "Special Day Celebration",
            buttonText: "➔",
        },
        {
            image: img3, 
            title: "Social Issues",
            buttonText: "➔",
        },
        {
            image: img4, 
            title: "Health Awareness",
            buttonText: "➔",
        },
        {
            image: img5, 
            title: "Environmental Sensitization",
            buttonText: "➔",
        }

    ];



    return (
        <div className="sanskarpage">
            <div className='navbar'><Navbar /></div>

            <div className='banner'><BannerCompo
                image={bannerimg}
                title={"Jansamwad Project"}
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

export default JansamwadProject