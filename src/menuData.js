import { MENU_IMAGE_URLS as I } from './menuImageUrls.js';

// MIKUN menu transcribed from the supplied menu board. Keep these prices in sync
// with the customer-facing menu and the payment validation data.
export const menuDataNoImages = [
  { id: 1, name: 'Semo with Beef', price: 1500, desc: 'Smooth semo served with seasoned beef stew.', category: 'Dishes', available: true, image: I.semoBeef },
  { id: 2, name: 'Eba with Beef', price: 1500, desc: 'Soft eba served with seasoned beef stew.', category: 'Dishes', available: true, image: I.ebaBeef },
  { id: 3, name: 'Small Plate of Jollof & Fried Rice with Beef', price: 1700, desc: 'A small mixed plate of jollof and fried rice with beef.', category: 'Dishes', available: true, image: I.jollofFriedRiceBeef },
  { id: 4, name: 'Spag with Beef', price: 1700, desc: 'Spaghetti with rich beef sauce.', category: 'Dishes', available: true, image: I.spagBeef },
  { id: 5, name: 'Pounded Yam per Plate', price: 1700, desc: 'One plate of smooth pounded yam with soup.', category: 'Dishes', available: true, image: I.poundedYam },
  { id: 6, name: 'Small Plate of Asun Jollof with Beef', price: 1900, desc: 'Small jollof plate with spicy, smoky beef.', category: 'Dishes', available: true, image: I.asunJollof },
  { id: 7, name: 'Rice and Beans Small Plate with Beef', price: 1900, desc: 'Small plate of rice and beans with beef.', category: 'Dishes', available: true, image: I.riceBeansBeef },
  { id: 8, name: 'Village Rice with Beef Small Plate', price: 1900, desc: 'Small plate of village-style rice with beef.', category: 'Dishes', available: true, image: I.villageRiceBeef },
  { id: 9, name: 'Big Plate of Jollof & Fried Rice with Beef', price: 2200, desc: 'A big mixed plate of jollof and fried rice with beef.', category: 'Dishes', available: true, image: I.jollofFriedRiceBeef },
  { id: 10, name: 'Big Plate of Asun Jollof with Beef', price: 2600, desc: 'Big jollof plate with spicy, smoky beef.', category: 'Dishes', available: true, image: I.asunJollof },
  { id: 11, name: 'Rice and Beans with Beef Big Plate', price: 2500, desc: 'Big plate of rice and beans with beef.', category: 'Dishes', available: true, image: I.riceBeansBeef },
  { id: 12, name: 'Village Rice with Beef Big Plate', price: 2600, desc: 'Big plate of village-style rice with beef.', category: 'Dishes', available: true, image: I.villageRiceBeef },
  { id: 13, name: 'Yam and Egg', price: 3000, desc: 'Yam served with egg and a rich pepper sauce.', category: 'Dishes', available: true, image: I.yamEgg },
  { id: 14, name: 'Small Chicken', price: 2000, desc: 'A smaller serving of seasoned chicken.', category: 'Proteins', available: true, image: I.chicken },
  { id: 15, name: 'Big Chicken', price: 2500, desc: 'A generous serving of seasoned chicken.', category: 'Proteins', available: true, image: I.chicken },
  { id: 16, name: 'Turkey', price: 3000, desc: 'Seasoned turkey portion.', category: 'Proteins', available: true, image: I.turkey },
  { id: 17, name: 'Fish', price: 1500, desc: 'Seasoned fish portion.', category: 'Proteins', available: true, image: I.fish },
  { id: 18, name: 'Egg', price: 300, desc: 'One egg.', category: 'Proteins', available: true, image: I.egg },
  { id: 19, name: 'Table Water', price: 250, desc: 'Chilled table water.', category: 'Drinks', available: true, image: I.drinks },
  { id: 20, name: 'Big Coke', price: 500, desc: 'Chilled big Coke.', category: 'Drinks', available: true, image: I.drinks },
  { id: 21, name: 'Big Fanta', price: 500, desc: 'Chilled big Fanta.', category: 'Drinks', available: true, image: I.drinks },
  { id: 22, name: 'Big Sprite', price: 500, desc: 'Chilled big Sprite.', category: 'Drinks', available: true, image: I.drinks },
];

export default menuDataNoImages;
