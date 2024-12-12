import { fruits, Fruit } from "./fruits";

export const getFruit = (name: String) => {
  // använd fruits-arrayen och returnera det fruit-objekt som matchar name
  // finns det ingen sådan fruit så returnera undefined
  // name => matcha => returnera
  const fruitMatch = fruits.find((el) => el.name === name);
  return fruitMatch;
};

export const getIcon = (icon: String) => {
  // använd fruits-arrayen och returnera ikonen som matchar frukten name
  // finns det ingen sådan frukt så returnera undefined
  const fruitMatch = fruits.find((el) => el.icon === icon);
  return fruitMatch;
};

export const getColor = (color: String) => {
  // använd fruits-arrayen och returnera färgen som matchar frukten name
  // finns det ingen sådan frukt så returnera undefined
  const fruitMatch = fruits.find((el) => el.color === color);
  return fruitMatch;
};
export const getCategory = (name: String) => {
  const fruitMatch = fruits.find((el) => el.name === name);
  return fruitMatch?.category;
};
// gör en till funktion som man ger ett fruktnamn och som returnerar en frukts kategori

export const numberOfColoredFruits = (color: String) => {
  let count: number = 0;
  for (const i of fruits) {
    if (i.color === color) {
      count++;
    }
  }
  return count;
  // använd fruits-arrayen och returnera hur många frukter det finns av en given färg color
  // finns det inga frukter av den färgen så svara 0
};

// gör en numberOfCategoryFruits här också
// använd fruits-arrayen och returnera hur många frukter det finns av en given kategori

export const getFruitsByCategory = (category: String) => {
  let amountOfFruitsInCategory: number = 0;
  for (const i of fruits) {
    if (i.category === category) {
      amountOfFruitsInCategory++;
    }
  }

  return amountOfFruitsInCategory;
  // använd fruits-arrayen
  // ta emot en kategori och returnera en array av alla frukter som ingår i den kategorin
};

// gör en getFruitsByColor också

export const getIconsByCategory = (category: string) => {
  let iconsInCategory: string[] = [];
  for (const i of fruits) {
    if (i.category === category) {
      iconsInCategory.push(i.icon);
    }
  }

  return iconsInCategory;
  // använd fruits-arrayen
  // ta emot en kategori och returnera alla ikoner från alla frukter i den kategorin
};

// gör en getIconsByColor också
export const getIconsByColor = (color: string) => {
  let iconsByColor: string[] = [];
  for (const i of fruits) {
    if (i.color === color) {
      iconsByColor.push(i.icon);
    }
  }
  return iconsByColor;
};
export const getArrOfCategory = (bajs: Fruit[]) => {
  let arrOfCategory: string[] = [];
  bajs.forEach((b) => {
    arrOfCategory.push(b.category);
  });
  let a = new Set(arrOfCategory);

  return Array.from(a);
};

// gör en getCategories som returnerar en array av alla kategorier

export const getAllColors = (color: Fruit[]) => {
  let arrOfColors: string[] = [];
  color.forEach((b) => {
    arrOfColors.push(b.color);
  });
  let a = new Set(arrOfColors);

  return Array.from(a);
};
// gör en getColors som returnerar en array av alla färge
