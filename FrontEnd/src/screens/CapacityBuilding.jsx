import React from 'react'

import img1 from '../assets/WorkAssets/CapacityPage/capacitypageimg.jpeg'
import img2 from '../assets/WorkAssets/CapacityPage/capacitypageimg2.jpg'
import Footer from '../components/Footer.jsx'
import '../css/Footer.css'
import BannerCompo from '../components/BannerCompo.jsx';
import '../css/BannerCompo.css'
import bannerimg from '../assets/bannnerpic1.jpg'
import Navbar from '../components/Navbar.jsx';
import '../css/Navbar.css'
import CardsCompo from '../components/CardsCompo.jsx';
import '../css/CardsCompo.css'


export const CapacityBuilding = () => {

    const cards = [
        {
            image: img1,
            title: "Online internship",
            buttonText: "➔",
        },
        {
            image: img2, 
            title: "Offline intership",
            buttonText: "➔",
        }

    ];



    return (
        <div className="sanskarpage">
            <div className='navbar'><Navbar /></div>

            <div className='banner'><BannerCompo
                image={bannerimg}
                title={"Capacity Building Training Project"}
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

export default CapacityBuilding