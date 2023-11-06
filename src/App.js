import "./App.css";
import CardList from "./Components/CarList";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainNavbar from "./Components/MainNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const CarsData = [
    {
      carImgLinks: [
        "https://th.bing.com/th/id/OIG.3m2u99YZVnV25Zg3QuB6?w=173&h=173&c=6&r=0&o=5&pid=ImgGn",
        "https://th.bing.com/th/id/OIG.76Sb.FSpAoDYYivxE4iB?pid=ImgGn",
        "https://th.bing.com/th/id/OIG.BuzwqAf7QImkDd5svrHI?w=173&h=173&c=6&r=0&o=5&pid=ImgGn"
      ],
      carName: "Mercedes",
      carInfo: "Mercedes-The German Car Manufacturer",
      carPrice: 2500000,
      circleColors: ["red", "blue", "green"]
    },
    {
      carImgLinks: [
        "https://th.bing.com/th/id/OIG.3m2u99YZVnV25Zg3QuB6?w=173&h=173&c=6&r=0&o=5&pid=ImgGn",
        "https://th.bing.com/th/id/OIG.76Sb.FSpAoDYYivxE4iB?pid=ImgGn",
        "https://th.bing.com/th/id/OIG.BuzwqAf7QImkDd5svrHI?w=173&h=173&c=6&r=0&o=5&pid=ImgGn"
      ],
      carName: "Mercedes",
      carInfo: "Mercedes-The German Car Manufacturer",
      carPrice: 2500000,
      circleColors: ["red", "blue", "green"]
    },
    {
      carImgLinks: [
        "https://th.bing.com/th/id/OIG.3m2u99YZVnV25Zg3QuB6?w=173&h=173&c=6&r=0&o=5&pid=ImgGn",
        "https://th.bing.com/th/id/OIG.76Sb.FSpAoDYYivxE4iB?pid=ImgGn",
        "https://th.bing.com/th/id/OIG.BuzwqAf7QImkDd5svrHI?w=173&h=173&c=6&r=0&o=5&pid=ImgGn"
      ],
      carName: "Mercedes",
      carInfo: "Mercedes-The German Car Manufacturer",
      carPrice: 2500000,
      circleColors: ["red", "blue", "green"]
    },
    {
      carImgLinks: [
        "https://th.bing.com/th/id/OIG.3m2u99YZVnV25Zg3QuB6?w=173&h=173&c=6&r=0&o=5&pid=ImgGn",
        "https://th.bing.com/th/id/OIG.76Sb.FSpAoDYYivxE4iB?pid=ImgGn",
        "https://th.bing.com/th/id/OIG.BuzwqAf7QImkDd5svrHI?w=173&h=173&c=6&r=0&o=5&pid=ImgGn"
      ],
      carName: "Mercedes",
      carInfo: "Mercedes-The German Car Manufacturer",
      carPrice: 2500000,
      circleColors: ["red", "blue", "green"]
    }
    // {
    //   carImgLinks: [
    //     'car_image_yellow.jpg',
    //     'car_image_black.jpg',
    //     'car_image_silver.jpg',
    //   ],
    //   carName:'Suzuki',
    //   carInfo: 'Car 2 Info',
    //   carPrice: 3500000,
    //   circleColors: ['yellow', 'black', 'silver'],
    // },
  ];
  const items = [
    {
      heading: "Customize Your Dream Car",
      imageUrl:
        "https://images.pexels.com/photos/9494958/pexels-photo-9494958.jpeg?cs=tinysrgb&w=1600",
      alt: "car1"
    },
    {
      heading: "High Safety Standards",
      imageUrl:
        "https://images.pexels.com/photos/5049266/pexels-photo-5049266.jpeg?auto=compress&cs=tinysrgb&w=2000",
      alt: "car3"
    },
    {
      heading: "Easy Registration",
      imageUrl:
        "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "car2"
    }
  ];
  return (
    <div className="App">
      <Header />
      <MainNavbar />
      <Carousel items={items} />
      <center>
        <h1 className="heading-card-list">CAR LISTINGS</h1>
      </center>
      <CardList carsData={CarsData} />
      <Footer />
    </div>
  );
}

export default App;
