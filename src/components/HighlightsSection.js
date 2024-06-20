

const HighlightsSection = () => {

    return(
        <div className="highlightsSection">
            <section>
                <h1 className="displayText">This Week’s Specials!</h1>
                <button className="buttonPrimary">
                    <p className="itemText">Online Menu</p>
                </button>
            </section>
            <section>
                <article className="highlightsCard">
                    <section className="cardImageSection">
                        <img src="/greek salad.png" alt="Greek Salad" />
                    </section>
                    <section className="cardTextSection">
                        <section>
                            <h3>Greek Salad</h3>
                            <p className="priceTag">$12.99</p>
                        </section>
                        <section>
                            <p className="cardDescription">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        </section>
                        <section>
                            <a className="orderDeliveryCard" href="URL here">Order a delivery</a>
                            <img alt="bikeLogo"/>
                        </section>
                    </section>
                </article>
                <article className="highlightsCard">
                    <section className="cardImageSection">
                        <img src="/Bruchetta.png" alt="Bruchetta" />
                    </section>
                    <section className="cardTextSection">
                        <section>
                            <h3>Bruchetta</h3>
                            <p className="priceTag">$5.99</p>
                        </section>
                        <section>
                            <p className="cardDescription">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                        </section>
                        <section>
                            <a className="orderDeliveryCard" href="URL here">Order a delivery</a>
                            <img alt="bikeLogo"/>
                        </section>
                    </section>
                </article>
                <article className="highlightsCard">
                    <section className="cardImageSection">
                        <img src="lemon dessert.png" alt="Lemon Dessert" />
                    </section>
                        <section className="cardTextSection">
                        <section>
                            <h3>Lemon Dessert</h3>
                            <p className="priceTag">$5.00</p>
                        </section>
                        <section>
                            <p className="cardDescription">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </p>
                        </section>
                        <section>
                            <a className="orderDeliveryCard" href="URL here">Order a delivery</a>
                            <img alt="bikeLogo"/>
                        </section>
                    </section>
                </article>
            </section>
        </div>
    )
}

export default HighlightsSection;