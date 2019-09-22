import React from 'react';
import { useTitle } from 'hookrouter';
import HomeSlider from './HomeSlider';

const Home = () => {
    useTitle("Kiwi's Paradise | Home")
    return (
        <div className="container-home">
            <div className="slider-wrapper">
                <HomeSlider />
            </div>
            <article>
                <h2 className="abt-head">About Us!</h2>
                <p className="para">
                    Welcome to Kiwi’s Paradise, your number one source for getting your hands on plushies! We're dedicated to giving you the very best plushies we can give you, with a focus on dependability, customer service and uniqueness.Founded in 2013 by Lens
                    Rentals, Kiwi’s Paradise has come a long way from its beginnings in a small home office. When Lens first started out, her passion for providing people with the best quality plushies drove her to quit her day job, and gave her the
                    impetus to turn hard work and inspiration into to a booming online store. We now serve customers all over the world and are thrilled to be a part of the quirky wing of the plushie industry. We hope you enjoy our products as much as we enjoy
                    offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                </p>
            </article>
            <hr />
            <section>
                <h2 className="abt-head">Our Team</h2>
                <div className="card-wrapper">

                    <div className="card">
                        <img src="https://images.squarespace-cdn.com/content/v1/56b02a1660b5e9fa821ce814/1554153048675-XVBAABV9XW715B1I0UHU/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/sarina-headshot.jpg" alt="Sabrina Headshot" />
                        <h3>Sabrina Brown</h3>
                        <h4>Marketing Manager</h4>
                        <p>
                            Sabrina works closely with the agency’s enterprise software and professional service PR team to create compelling, timely and thoughtful content for a variety of audiences.
                        </p>
                    </div>

                    <div className="card">
                        <img src="https://truestudios.biz/images/headshots/Free_Headshot_Columbus_7.jpg" alt="Lens Headshot" />
                        <h3>Lens Rentals</h3>
                        <h4>CEO</h4>
                        <p>
                            Len has served in leadership roles in the nonprofit world, having been the Executive Director of the Oak Park Children's Museum and overseeing numerous programs at a nonprofit in New Haven, Connecticut.
                        </p>
                    </div>
                    <div className="card">
                        <img src="http://www.proheadshots.ca/wp-content/uploads/2016/02/VLR-3011-Edit-1024x1024.jpg" alt="David Headshot" />
                        <h3>David Burnington</h3>
                        <h4>Production Manager</h4>
                        <p>
                            David has raised venture capital, sold companies and bought companies. He has hands-on experience in a number of our industry verticals and in several functional areas from operations to sales to finance.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home;