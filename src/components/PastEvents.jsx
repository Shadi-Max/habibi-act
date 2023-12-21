import './styles.css'
import one from '../assets/arabtronica/1.png';
import EventPhoto2 from '../assets/past-events/milad-khawam.png';
import EventPhoto3 from '../assets/past-events/abo-gabi.jpg';
import EventPhoto4 from '../assets/past-events/habibi-act-ping.jpg';
import EventPhoto5 from '../assets/past-events/worringer-weekender.png';
import EventPhoto6 from '../assets/past-events/habibi-act-open-mic.jpg';


function PastEvents() {
    return (
    <div>
        <div className='past-events-title'>
            <h1>Past Events</h1>
        </div>
        <div className='events-container'>
            <div className = "event-card">
                <img src={one} alt="Arabtronica Night"></img>
                <div className="card-content">
                    <div className='card-title'>
                        <h2>Arabtronica Night</h2>
                        <h4>DJ Party</h4>
                        <h3><i class="fa-solid fa-location-dot"></i> Düsseldorf . <i class="fa-solid fa-calendar-days"></i> 07.10.2023</h3>
                    </div>
                    <p>
                        Habibi Act! präsentiert die Arabtronica Night - Klänge aus dem Nahen Osten.
                        Erlebt mit uns diese spannende musikalische Erfahrung und tanzt zu elektronischer Musik mit östlichen Klängen und Vocals.
                    </p>
                    </div>
            </div>
            <div className = "event-card">
                <img src={EventPhoto2} alt="Milad Khawam"></img>
                <div className="card-content">
                    <div className='card-title'>
                        <h2>Milad Khawam</h2>
                        <h4>Konzert</h4>
                        <h3><i class="fa-solid fa-location-dot"></i> Düsseldorf . <i class="fa-solid fa-calendar-days"></i> 03.09.2023</h3>
                    </div>
                    <p>
                        Habibi Act präsentiert crossover Jazz mit Milad Khawam und seinem spannenden Band.
                        Im Anschluss folgt eine Afterparty mit DJ Anta Can.
                    </p>
                    </div>
            </div>
            <div className = "event-card">
                <img src={EventPhoto3} alt="Abo Gabi"></img>
                <div className="card-content">
                    <div className='card-title'>
                        <h2>Abo Gabi</h2>
                        <h4>Konzert</h4>
                        <h3><i class="fa-solid fa-location-dot"></i> Düsseldorf . <i class="fa-solid fa-calendar-days"></i> 30.07.2023</h3>
                    </div>
                    <p>
                        HABIBI ACT präsentiert Abo Gabi live in Concert in DÜSSELDORF! Lasst euch von ABO GABI auf eine mitreißende Musikreise entführen.
                        Begleitet wird ABO GABI von Haneen Choir . 🎶🎤🎵

                    </p>
                    </div>
            </div>
            <div className = "event-card">
                <img src={EventPhoto4} alt="Habibi Act x Ping"></img>
                <div className="card-content">
                    <div className='card-title'>
                        <h2>Habibi Act x Ping</h2>
                        <h4>DJ Sunset Party</h4>
                        <h3><i class="fa-solid fa-location-dot"></i> Düsseldorf . <i class="fa-solid fa-calendar-days"></i> 28.07.2023</h3>
                    </div>
                    <p>
                    legt diesen Freitag, 28. Juli von 18** — 22** Uhr wieder an die Preview Party für das Ehrenhof-Open auf, diesmal im Bühnenraum vom Theatermuseum Düsseldorf.
                    </p>
                    </div>
            </div>
            <div className = "event-card">
                <img src={EventPhoto5} alt="Habibi Act @ La Terazza"></img>
                <div className="card-content">
                    <div className='card-title'>
                        <h2>HA @ La Terrazza</h2>
                        <h4>DJ Party</h4>
                        <h3><i class="fa-solid fa-location-dot"></i> Düsseldorf . <i class="fa-solid fa-calendar-days"></i> 24.06.2023</h3>
                    </div>
                    <p>
                        Habibi Act! presents DJ Sets from Shadi Max & Pekmez Papi @ La Terraza - In collabration with Worringer Weekender.
                    </p>
                    </div>
            </div>
            <div className = "event-card">
                <img src={EventPhoto6} alt="Habibi Act Open Mic"></img>
                <div className="card-content">
                    <div className='card-title'>
                        <h2>Habibi Open-Stage</h2>
                        <h4>Open Stage</h4>
                        <h3><i class="fa-solid fa-location-dot"></i> Düsseldorf . <i class="fa-solid fa-calendar-days"></i> 27.04.2023</h3>
                    </div>
                    <p>
                        Wir freuen uns sehr, unser erstes Event vorzustellen, Habibi Act! Begleite uns am 27. April in Düsseldorf, Deutschland, während wir Vielfalt und Inklusion mit Musik, Tanz und Kunst feiern.
                    </p>
                    </div>
            </div>
        </div>
    </div>
    );
}

export default PastEvents;