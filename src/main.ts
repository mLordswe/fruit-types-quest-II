import { fruits } from "./fruits/fruits";
import "./styles.css";
import {
  getColor,
  getFruit,
  getFruitsByCategory,
  getIcon,
  getCategory,
  numberOfColoredFruits,
  getIconsByCategory,
  getIconsByColor,
  getArrOfCategory,
  getAllColors,
} from "./fruits/utils";
fruits;
console.log("Welcome to fruit-types-quest-II, please fix the code!");

// skriv ett program här nedan som testar alla de funktioner som finns i fruits/utils
console.log(getFruit("melon"));
console.log(getIcon("🍉"));
console.log(getColor("blue"));
console.log(getCategory("tangerine"));
console.log(numberOfColoredFruits("svart"));
console.log(getFruitsByCategory("berry"));
console.log(getIconsByCategory("berry"));
console.log(getIconsByColor("red"));
console.log(getArrOfCategory(fruits));
console.log(getAllColors(fruits));
