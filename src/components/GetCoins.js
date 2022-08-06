import Home from "./Home";
import Navbar from "./Navbar";
import Card from "./UI/Card";

const GetCoins = ({fetchCoins}) => {
 return (
   <div className='App'>
     <Navbar />
     <Home/>
     {fetchCoins.coins?.map((item) => (
       <Card key={item.uuid} name={item.name} img={item.iconUrl} />
     ))}
   </div>
 );
}
 
export default GetCoins;