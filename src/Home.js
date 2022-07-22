import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src="https://i.insider.com/5fa5b19df7d1cb0019e3a510?width=1000&format=jpeg&auto=webp" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5></h5>
                                <p></p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="https://i0.wp.com/dayton937.com/wp-content/uploads/2021/11/holiday-BB-Promotion-01.jpg?ssl=1" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5></h5>
                                <p></p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.insider.com/5fa595a0f7d1cb0019e3a463?width=1136&format=jpeg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5></h5>
                                <p></p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://img.myloview.com/stickers/vector-summer-sale-banner-design-with-red-sale-text-and-colorful-elements-in-beach-sand-background-for-shopping-discount-promotion-vector-illustration-400-93055882.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5></h5>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="home__row">
                        <Product
                            id="12321341"
                            title="Iphone 7 32GB unlock "
                            price={149.96}
                            rating={5}
                            image="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-7r4.jpg"
                        />
                        <Product
                            id="49538094"
                            title="HD Touch-Screen Dell inspiron Laptop - Intel i5-8265U - 8GB DDR4-256GB SSD - Windows 10"
                            price={449.00}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/51if47n2aPL._AC_SL1000_.jpg"
                        />
                        <Product
                            id="49538094"
                            title="CompTIA A+ 220-801 and 220-802 Exam Cram: Comp A+ 2208 2208 "
                            price={16.49}
                            rating={5}
                            image="https://books.google.com/books/publisher/content?id=PdM7AAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0b5gPsmMFZsdr_7kCe52MLqmVMWg&w=1280"
                        />

                </div>

                <div className="home__row">
                        <Product
                            id="4903850"
                            title="6 Inch Portable Fan with Cord, 3 Speeds Strong Airflow, Quiet Personal Desk Fan & Clip Fan"
                            price={14.99}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/61Ob--lOCRL._AC_SX679_.jpg"
                        />

                        <Product
                            id="23445930"
                            title="Bluetooth Headphones Wireless, sound Proof color(black)"
                            price={19.99}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/81fZuI4SvzL._AC_SX679_.jpg"
                        />

                        <Product
                            id="3254354345"
                            title="15.6-17' Laptop Cooler Cooling Pad - Slim Portable USB Powered (3 Fans), Black/Blue"
                            price={17.99}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/81k9Wd5QZyL._AC_UY327_FMwebp_QL65_.jpg"
                        />
                </div>

                <div className="home__row">
                        <Product
                            id="90829332"
                            title=" Computer Tray for Bed Laptop Table Adjustable Lap Desks for Eating Working Study Foldable and Portable"
                            price={29.99}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/71ygd1S3GtL._AC_SX679_.jpg"
                        />
                        <Product
                            id="90829332"
                            title=" The Power of Your Subconscious Mind (Roughcut)"
                            price={10.99}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/81zx+oQoquL._AC_UY327_FMwebp_QL65_.jpg"
                        />
                    
                </div>
            </div>   
        </div> 
    )
}

export default Home
