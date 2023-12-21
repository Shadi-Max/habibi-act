import Nav from '../components/Nav'
import NextEvent from '../components/NextEvent'
import Footer from '../components/Footer'
import PastEvents from '../components/PastEvents'
import EventsHero from '../components/EventsHero'

function Events() {
    return (
        <>
            <div>
                <Nav />
                <EventsHero />
                <NextEvent />
                <PastEvents />
                <Footer />
            </div>
        </>
    );
}

export default Events;