import './styles.css'
import Logo1 from '../assets/logos/1.png';
import Logo2 from '../assets/logos/2.png';
import Logo3 from '../assets/logos/3.png';
import Logo4 from '../assets/logos/4.png';
import Logo5 from '../assets/logos/5.png';

function MediaPartners () {
    return (
        <div className='media-partners-container'>
            <div className='media-partner-title'>
                <h1>Sponsors & Media Partners</h1>
            </div>
            <div className='media-partners-logos'>
                <img src={Logo1} alt='1' width={100}></img>
                <img src={Logo2} alt='1' width={100}></img>
                <img src={Logo3} alt='1' width={100}></img>
                <img src={Logo4} alt='1' width={100}></img>
                <img src={Logo5} alt='1' width={100}></img>
            </div>
        </div>
    )
}

export default MediaPartners;