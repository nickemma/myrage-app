import { useState } from 'react';
import Panel from './images/image1.png';
import Panel2 from './images/image2.png';
import Panel3 from './images/image3.png';
import './css/Description.css';

const Description = () => {
  const [active, setActive] = useState(1);

  const onHandledToggle = (index) => {
    setActive(index);
  };

  return (
    <section className="tab-container">
      <div className={active === 1 ? 'content-item active' : 'content-item'}>
        <div className="content">
          <span>FOR DEVS TEAMS</span>
          <h3>This Is A Special Benefit For Devs</h3>
          <p>
            Get your customers touch point in one single place across all
            platforms and channels
          </p>
        </div>
        <div className="image-slide">
          <img src={Panel3} alt="" />
        </div>
      </div>
      <div className={active === 2 ? 'content-item active' : 'content-item'}>
        <div className="content">
          <span>ULTRA-FASTS RESULTS</span>
          <h3>Get Amazed By Powerful Results</h3>
          <p>
            Get your customers touch point in one single place across all
            platforms and channels
          </p>
        </div>
        <div className="image-slide">
          <img src={Panel2} alt="" />
        </div>
      </div>
      <div className={active === 3 ? 'content-item active' : 'content-item'}>
        <div className="content">
          <span>WIDE ACTIVATIONS</span>
          <h3>Work Great With Your Teams Seamlessly</h3>
          <p>
            Get your customers touch point in one single place across all
            platforms and channels
          </p>
        </div>
        <div className="image-slide">
          <img src={Panel} alt="" />
        </div>
      </div>
      <div className="nav-tab">
        <ul>
          <li
            onClick={() => onHandledToggle(1)}
            className={active === 1 ? 'tab active' : 'tab'}
          >
            Devs Features
          </li>
          <li
            onClick={() => onHandledToggle(2)}
            className={active === 2 ? 'tab active' : 'tab'}
          >
            Real-Time Results
          </li>
          <li
            onClick={() => onHandledToggle(3)}
            className={active === 3 ? 'tab active' : 'tab'}
          >
            Multiple Activations
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Description;
