
import Espresso from "../assets/Espresso.jpg";
import Americano from "../assets/Americano.jpg";
import Cappuccino from "../assets/Cappuccino.jpg";
import ColdBrew from "../assets/ColdBrew.jpg";
import Frappuccino from "../assets/Frappuccino.avif";
import IcedCoffee from "../assets/IcedCoffee.jpg";
import Latte from "../assets/Latte.jpg";
import mocha from "../assets/Mocha.jpg";

// Sample coffee items
const menuItems = [
  { id: 1, name: "Espresso", price: "$3.50", category: "Hot", img: Espresso },
  { id: 2, name: "Cappuccino", price: "$4.50", category: "Hot", img: Cappuccino },
  { id: 3, name: "Latte", price: "$4.75", category: "Hot", img: Latte },
  { id: 4, name: "Iced Coffee", price: "$3.75", category: "Cold", img: IcedCoffee },
  { id: 5, name: "Mocha", price: "$5.00", category: "Hot", img: mocha },
  { id: 6, name: "Americano", price: "$3.25", category: "Hot", img: Americano },
  { id: 7, name: "Cold Brew", price: "$4.25", category: "Cold", img: ColdBrew },
  { id: 8, name: "Frappuccino", price: "$5.50", category: "Cold", img: Frappuccino },
];

export default menuItems