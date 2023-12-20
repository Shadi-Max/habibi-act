import Nav from '../components/Nav'
import NextEvent from '../components/NextEvent'
import Footer from '../components/Footer'
import PastEvents from '../components/PastEvents'

function Events() {
    return (
        <>
            <div>
                <Nav />
                <NextEvent />
                <PastEvents />
                <Footer />
            </div>
        </>
    );
}

export default Events;