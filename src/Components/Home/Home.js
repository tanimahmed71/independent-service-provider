import "./Home.css";
import Services from "./Services/Services";

const allServices =[
  {id:1,
    name:'THE BRAZILIN AMAZON',
  img:"https://i.ibb.co/d2XH0Rr/images-1.jpg",
  price:"300$",
    description:" The brazilin amazon is probably one of the world's most well-known jungles. Home to over 10,000 species, with more being discovered every day, it's a hotbed of incredible biodiversity.Spanning over 9 countries.."
 },
 {
   id:2,
   name:"NATURE, BRAZIL",
   img:"https://i.ibb.co/56FHhFm/img1.jpg",
   price:"500$",
   description:"Brazil is a popular birding destination and a multitude of birds can be found throughout the country.  There are dozens of parrot species, the most common and well known being the macaw."
 },
 {
   id:3,
   name:"SINHARAJA FOREST RESERVE - SRI LANKA",
   img:"https://i.ibb.co/S6Dt9Xq/img3.jpg",
   price:"700$",
   description:"Another very Jungle Book-inspired destination,  have a distinct aura of enigma and intrigue.With ancient structures throughout and tropical flora and fauna, ..."
 }
]
const Home = () => {
  return (
    <div className='home-container'>
      <h1>Wild photography</h1>
      <img src={"https://i.ibb.co/kGmxxLr/closeup-shot-cute-elephant-walking-dry-grass-wilderness.jpg"}  alt="" />
        <h1 style={{margin:"50px"}}>Services</h1>
     <div className="services-container">
        {
          allServices.map(Service=><Services  services 
            key={Service.id}
            Services={Service}
            ></Services>)
          }
      </div>
          </div>
  );
};

export default Home;