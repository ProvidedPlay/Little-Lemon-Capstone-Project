import { Link } from "react-router-dom";

const HeroSection= () => {

    return(
     <div className="heroSection">
        <section className="heroTextSection">
            <p className="displayText" id="restaurantTitle">Little Lemon</p>
            <p className="subtitleText" id="restaurantSubTitle">Chicago</p>
            <p className="displayDescriptionText" id="restaurantDescription">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className="buttonPrimary">
                    <Link className="link" to="/reservations">
                    <p className="itemText">Reserve A Table</p>
                    </Link>
                </button>
        </section>
        <section className="heroImageSection">
            <img className="heroImage" src="/restauranfood.png" alt="Hero"></img>
        </section>

     </div>
    )
}

export default HeroSection;