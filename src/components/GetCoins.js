import Article from './Article';
import Description from './Description';
import Footer from './Footer';
import Hero from './Hero';
import Home from './Home';
import Navbar from './Navbar';
import Card from './UI/Card';

const GetCoins = ({ fetchCoins }) => {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Description />
      {fetchCoins.coins?.map((item) => (
        <Card
          key={item.uuid}
          name={item.name}
          img={item.iconUrl}
          price={item.price}
          market={item.marketCap}
          change={item.change}
        />
      ))}
      <Hero />
      <Article />
      <Footer />
    </div>
  );
};

export default GetCoins;
