import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";

const HighlightsSection = () => {

    return(
        <div className="highlightsSection" id="highlightsSection">
            <section id="highlightsSectionBanner">
                <h1 className="displayText" id="highlightsSectionBannerText">This week’s specials!</h1>
                <button className="buttonPrimary">
                    <p className="itemText">Online Menu</p>
                </button>
            </section>
            <section id="highlightsSectionCards">
                <article className="highlightsCard">
                    <section className="cardImageSection">
                        <img src="greek salad.png" alt="Greek Salad" />
                    </section>
                    <section className="cardTextSection">
                        <section className="cardTitleRow">
                            <h3 className="cardTitleText">Greek Salad</h3>
                            <p className="cardSubTitleText">$12.99</p>
                        </section>
                        <section className="cardDescriptionRow">
                            <p id="cardDescription" className="paragraphTextRegular">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        </section>
                        <section className="cardLinkRow">
                            <a className="cardLinkText" href="URL here">Order a delivery</a>
                            <FontAwesomeIcon icon={faBicycle} />
                        </section>
                    </section>
                </article>
                <article className="highlightsCard">
                    <section className="cardImageSection">
                        <img src="Bruchetta.png" alt="Bruchetta" />
                    </section>
                    <section className="cardTextSection">
                        <section className="cardTitleRow">
                            <h3 className="cardTitleText">Bruchetta</h3>
                            <p className="cardSubTitleText">$5.99</p>
                        </section>
                        <section className="cardDescriptionRow">
                            <p id="cardDescription" className="paragraphTextRegular">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                        </section>
                        <section className="cardLinkRow">
                            <a className="cardLinkText" href="URL here">Order a delivery</a>
                            <FontAwesomeIcon icon={faBicycle} />
                        </section>
                    </section>
                </article>
                <article className="highlightsCard">
                    <section className="cardImageSection">
                        <img src="lemon dessert.png" alt="Lemon Dessert" />
                    </section>
                        <section className="cardTextSection">
                        <section className="cardTitleRow">
                            <h3 className="cardTitleText">Lemon Dessert</h3>
                            <p className="cardSubTitleText">$5.00</p>
                        </section>
                        <section className="cardDescriptionRow">
                            <p id="cardDescription" className="paragraphTextRegular">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </p>
                        </section>
                        <section className="cardLinkRow">
                            <a className="cardLinkText" href="URL here">Order a delivery</a>
                            <FontAwesomeIcon icon={faBicycle} />
                        </section>
                    </section>
                </article>
            </section>
        </div>
    )
}

export default HighlightsSection;