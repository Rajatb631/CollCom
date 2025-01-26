import React from 'react'



export const BannerCompo = ({image,title,pagename}) => {
    return (
        <div className='maindiv'>
            <div className='imgContainer'>
                <img src={image} className='img' />
                <div className='BannerContents'>
                    <h3>{title}</h3>
                    <p>Home {">"} {pagename}</p>
                </div>
            </div>

        </div>
    )
}


export default BannerCompo;