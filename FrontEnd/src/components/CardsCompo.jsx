import React from 'react'
import '../css/CardsCompo.css'
export const CardsCompo = ({ title, image }) => {



    return (


        <div className='cards '>

            <div class="card-img"  >

                <img src={image} className='image' />

            </div>


            <div className='card-content'  >

                <div className='btnandtitle'>

                    <div className='title'>{title}</div>
                    <div className='btndiv'>{">>"}</div>
                </div>
            </div>

        </div>



    )
}

export default CardsCompo;