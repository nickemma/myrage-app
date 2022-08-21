import { useState, useEffect } from 'react';
import './App.css';
import GetCoins from './components/GetCoins';

const App = () => {
  const [fetchCoins, setFetchCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      const res = await fetch(
        'https://coinranking1.p.rapidapi.com/coins?limit=12',
        {
          headers: {
            'x-rapidAPI-key':
              '0123393eeamsh1bee10a3a220057p1fbee7jsn7ef939fd62ca',
            'x-rapidAPI-host': 'coinranking1.p.rapidapi.com',
          },
        },
      );
      const coin = await res.json();
      setFetchCoins(coin.data);
    };
    fetchCoins();
  }, []);

  return <GetCoins fetchCoins={fetchCoins} />;
};

export default App;
