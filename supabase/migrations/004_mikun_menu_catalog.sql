-- MIKUN menu board refresh. Safe to run after the existing menu_items table
-- has been created by the Supabase project setup.
create table if not exists public.menu_items (
  id integer primary key,
  name text not null,
  description text not null default '',
  price numeric not null check (price >= 0),
  category text not null,
  available boolean not null default true,
  image_url text,
  unavailable_until timestamptz
);

insert into public.menu_items (id, name, description, price, category, available, image_url)
values
  (3, 'Small Plate of Jollof & Fried Rice with Beef', 'A small mixed plate of jollof and fried rice with beef.', 1700, 'Dishes', true, '/images/jollof-fried-rice-beef.jpg'),
  (4, 'Spag with Beef', 'Spaghetti with rich beef sauce.', 1700, 'Dishes', true, '/images/spaghetti-nigerian.jpg'),
  (5, 'Pounded Yam per Plate', 'One plate of smooth pounded yam with soup.', 1700, 'Dishes', true, '/images/pounded-yam-real.jpg'),
  (6, 'Small Plate of Asun Jollof with Beef', 'Small jollof plate with spicy, smoky beef.', 1900, 'Dishes', true, '/images/asun-rice-real.jpg'),
  (7, 'Rice and Beans Small Plate with Beef', 'Small plate of rice and beans with beef.', 1900, 'Dishes', true, '/images/rice-beans-nigeria.jpg'),
  (8, 'Village Rice with Beef Small Plate', 'Small plate of village-style rice with beef.', 1900, 'Dishes', true, '/images/fried-rice-real.jpg'),
  (9, 'Big Plate of Jollof & Fried Rice with Beef', 'A big mixed plate of jollof and fried rice with beef.', 2200, 'Dishes', true, '/images/jollof-fried-rice-beef.jpg'),
  (10, 'Big Plate of Asun Jollof with Beef', 'Big jollof plate with spicy, smoky beef.', 2600, 'Dishes', true, '/images/asun-rice-real.jpg'),
  (11, 'Rice and Beans with Beef Big Plate', 'Big plate of rice and beans with beef.', 2500, 'Dishes', true, '/images/rice-beans-nigeria.jpg'),
  (12, 'Village Rice with Beef Big Plate', 'Big plate of village-style rice with beef.', 2600, 'Dishes', true, '/images/fried-rice-real.jpg'),
  (13, 'Yam and Egg', 'Yam served with egg and a rich pepper sauce.', 3000, 'Dishes', true, '/images/yam-egg-real.jpg'),
  (14, 'Small Chicken', 'A smaller serving of seasoned chicken.', 2000, 'Proteins', true, '/images/grilled-chicken.jpg'),
  (15, 'Big Chicken', 'A generous serving of seasoned chicken.', 2500, 'Proteins', true, '/images/grilled-chicken.jpg'),
  (16, 'Turkey', 'Seasoned turkey portion.', 3000, 'Proteins', true, '/images/fried-turkey-real.jpg'),
  (17, 'Fish', 'Seasoned fish portion.', 1500, 'Proteins', true, '/images/fish-real.jpg'),
  (18, 'Egg', 'One egg.', 300, 'Proteins', true, '/images/egg-real.jpg'),
  (19, 'Table Water', 'Chilled table water.', 250, 'Drinks', true, '/images/drinks-real.jpg'),
  (20, 'Big Coke', 'Chilled big Coke.', 500, 'Drinks', true, '/images/drinks-real.jpg'),
  (21, 'Big Fanta', 'Chilled big Fanta.', 500, 'Drinks', true, '/images/drinks-real.jpg'),
  (22, 'Big Sprite', 'Chilled big Sprite.', 500, 'Drinks', true, '/images/drinks-real.jpg')
on conflict (id) do update set
  name = excluded.name,
  description = excluded.description,
  price = excluded.price,
  category = excluded.category,
  available = excluded.available,
  image_url = excluded.image_url,
  unavailable_until = null;

delete from public.menu_items where id in (1, 2) or id > 22;
