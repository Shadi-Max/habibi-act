import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import NextEvent from '../components/NextEvent'
import MediaPartners from '../components/MediaPartners'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
            <Nav />
            <Hero />
            <About />
            <NextEvent />
            <MediaPartners />
            <Footer />
        </div>
    );
}

export default Home;