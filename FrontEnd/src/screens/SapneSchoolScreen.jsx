import React from 'react'

import img1 from '../assets/WorkAssets/SapneSchoolImg/sapneschoolimg1.jpeg'
import img2 from '../assets/WorkAssets/SapneSchoolImg/sapneschoolimg2.jpg'
import img3 from '../assets/WorkAssets/SapneSchoolImg/sapneschoolimg3.jpg'
import img4 from '../assets/WorkAssets/SapneSchoolImg/sapneschoolimg4.jpg'

import Footer from '../components/Footer.jsx'
import '../css/Footer.css'
import BannerCompo from '../components/BannerCompo.jsx';
import '../css/BannerCompo.css'
import bannerimg from '../assets/bannnerpic1.jpg'
import Navbar from '../components/Navbar.jsx';
import '../css/Navbar.css'
import CardsCompo from '../components/CardsCompo.jsx';
import '../css/CardsCompo.css'


export const SapneSchoolScreen = () => {

    const cards = [
        {
            image: img1,
            title: "Joy Of Sharing",
            buttonText: "➔",
        },
        {
            image: img2, 
            title: "Festival Celebration",
            buttonText: "➔",
        },
        {
            image: img3, 
            title: "Yoga & Sports",
            buttonText: "➔",
        },
        {
            image: img4, 
            title: "Teaching Underprivileged Children",
            buttonText: "➔",
        }

    ];



    return (
        <div className="sanskarpage">
            <div className='navbar'><Navbar /></div>

            <div className='banner'><BannerCompo
                image={bannerimg}
                title={"Sapno Ka School Project"}
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

export default SapneSchoolScreen