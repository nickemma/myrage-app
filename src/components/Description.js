import Panel from '../components/images/image1.png';
import Panel2 from '../components/images/image2.png';
import Panel3 from '../components/images/image3.png';
import './css/Description.css';
const Description = () => {
  return (
    <section className='tab-container'>
      <div className='content-item'>
        <div className='content'>
          <span>FOR DEVS TEAMS</span>
          <h3>This Is A Special Benefit For Devs</h3>
          <p>
            Get your customer's touch point in one single place across all
            platforms and channels
          </p>
        </div>
        <div className='image-slide'>
          <img src={Panel3} alt='' />
        </div>
      </div>
      <div className='content-item'>
        <div className='content'>
          <span>ULTRA-FASTS RESULTS</span>
          <h3>Get Amazed By Powerful Results</h3>
          <p>
            Get your customer's touch point in one single place across all
            platforms and channels
          </p>
        </div>
        <div className='image-slide'>
          <img src={Panel2} alt='' />
        </div>
      </div>
      <div className='content-item'>
        <div className='content'>
          <span>WIDE ACTIVATIONS</span>
          <h3>Work Great With Your Teams Seamlessly</h3>
          <p>
            Get your customer's touch point in one single place across all
            platforms and channels
          </p>
        </div>
        <div className='image-slide'>
          <img src={Panel} alt='' />
        </div>
      </div>
      <div className='nav-tab'>
        <ul>
          <li className='tab'>Devs Features</li>
          <li className='tab'>Real-Time Results</li>
          <li className='tab'>Multiple Activations</li>
        </ul>
      </div>
    </section>
  );
};

export default Description;
