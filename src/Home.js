import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            {/* <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/> */}
            {/* <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg" alt=""/> */}
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg" alt=""/>
            
            
            <div className="home__row">
            <Product 
            id="10000"
            title="Vivo V17 (Glacier Ice, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={1.50}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71iWvC-Sk1L._SY741_.jpg"
            
            />
            <Product 
            id="10001"
            title="Daniel Klein Analog Black Dial Men's Watch-DK12229-1"
            price={20}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71rr9h0v1YL._UY500_.jpg"
            
            />
            </div>
            <div className="home__row">
            <Product 
            id="10002"
            title="Turtle Beach Recon 150"
            price={7}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/811tCFHxNZL._SX679_.jpg"
            
            />
            <Product 
            id="10003"
            title="Van Heusen Men's Solid Regular Fit Polo"
            price={10}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81TyTRt4LVL._SX569._SX._UX._SY._UY_.jpg"
            
            />
            <Product 
            id="10004"
            title="Lapis O Lupo Women's Handbag"
            price={6}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81qk98di%2BuL._UY625_.jpg"
            
            />
            </div>
            <div className="home__row">
            <Product 
            id="10005"
            title="Amazon Brand - Solimo 500 ml Large Vegetable Chopper with 3 Blades, Blue"
            price={3}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51tjMeONVoL._SX569_.jpg"
            
            />
            
            </div>
            
        </div>
    )
}

export default Home
