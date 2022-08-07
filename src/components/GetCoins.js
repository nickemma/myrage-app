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
      <section className='card-container'>
        {fetchCoins.coins?.map((item) => (
          <Card
            key={item.uuid}
            name={item.name}
            img={item.iconUrl}
            price={item.price}
            symbol={item.symbol}
            change={item.change}
          />
        ))}
      </section>
      <Hero />
      <Article />
      <Footer />
    </div>
  );
};

export default GetCoins;
