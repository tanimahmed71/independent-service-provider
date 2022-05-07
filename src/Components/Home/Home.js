import "./Home.css";
import Services from "./Services/Services";

const allServices =[
  {id:1,
    name:'amazon',
  img:"https://i.ibb.co/d2XH0Rr/images-1.jpg",
  price:"300$"
 },
 {
   id:2,
   name:"mangrope",
   img:"https://i.ibb.co/56FHhFm/img1.jpg",
   price:"500$"
 },
//  {
//    id:3,
//    name:"kfdkfjj",
//    img:"https://i.ibb.co/cQMwy4R/img2.jpg"
//  },
 {
   id:4,
   name:"fkdjfkd",
   img:"https://i.ibb.co/S6Dt9Xq/img3.jpg",
   price:"700$"
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