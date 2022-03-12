import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img 
            className='home__image'
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt=""/>

            <div className='home__row'>
                <Product
                    id="5846638640" 
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" 
                    price={29.99} 
                    image="https://m.media-amazon.com/images/I/51N-u8AsmdL._SY346_.jpg"
                    rating={5}
                    />
                <Product 
                    id="34364354"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitches Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={239.0}
                    rating={4}
                    image="https://kitchenaid-h.assetsadobe.com/is/image/content/dam/global/kitchenaid/countertop-appliance/portable/images/hero-RKV25G0XER.tif"
                />

            </div>

            <div className='home__row'>
                <Product 
                    id="465465435"
                    title="Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature"
                    price={298.99}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/51MUa0WUSKL._AC_SL1080_.jpg"
                />
                <Product 
                    id="35135133"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image="https://www.bhphotovideo.com/images/images2500x2500/amazon_b07nftvp7p_echo_3rd_generation_charcoal_1512895.jpg"
                />
                <Product 
                    id="3155163513"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-silver-202104_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&.v=1617126635000"
                />
            </div>

            <div className='home__row'>
                <Product 
                    id="4656350435"
                    title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black, QHD, 120Hz"
                    price={1094.99}
                    rating={3}
                    image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSVPZlLaB8__gzIC4ghWN33Wf6f8LzB9jsDI7PLaPKX1w-qaNWj0qRBk7ra8-FjPPCl_ad0fKTJUc-o59QAyVaWnb0Gsafm"
                />
                
            </div>

        </div>
    </div>
  )
}

export default Home