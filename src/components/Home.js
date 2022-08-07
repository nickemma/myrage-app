import Image from '../components/images/home.png';
import './css/Home.css';
const Home = () => {
  return (
    <section className='home'>
      <div className='content'>
        <span>WE GO BLACK</span>
        <h3>Convert visitors into Loyal Customers</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div className='image'>
        <img src={Image} alt='' />
      </div>
    </section>
  );
};

export default Home;
