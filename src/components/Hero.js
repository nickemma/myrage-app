import Image from '../components/images/image4.png';
import './css/Hero.css';
const Hero = () => {
  return (
    <section className='hero'>
      <div className='box'>
        <div className='content'>
          <span>WE GO BLACK</span>
          <h3>Powerful products for a great cause</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <a href='#'>More about our story</a>
        </div>
        <div className='image'>
          <img src={Image} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
