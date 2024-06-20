

const HeroSection= () => {

    return(
     <div className="heroSection">
        <section className="heroTextSection">
            <h1 className="displayText" id="restaurantTitle">Little Lemon</h1>
            <h2 className="subtitleText" id="restaurantSubTitle">Chicago</h2>
            <p className="displayDescriptionText" id="restaurantDescription">We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
            <button className="buttonPrimary">
                <p className="itemText">Reserve a Table</p>
            </button>
        </section>
        <section className="heroImageSection">
            <img className="heroImage" src="/restauranfood.png" alt="Hero"></img>
        </section>

     </div>
    )
}

export default HeroSection;