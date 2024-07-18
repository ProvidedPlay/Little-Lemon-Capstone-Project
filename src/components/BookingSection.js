import BookingForm from "./BookingForm"

const BookingSection = () => {

    return(
        <div className="bookingSection">
            <section id="bookingSectionBanner">
                <h1 className="sectionTitle" id="bookingSectionBannerText">FIND A TABLE</h1>
            </section>
            <BookingForm/>
        </div>
    )
}

export default BookingSection;