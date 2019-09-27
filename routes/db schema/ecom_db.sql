-- -----------------------------------------------------
-- Schema ecom_db
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `ecom_db` ;

-- -----------------------------------------------------
-- Schema ecom_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ecom_db` DEFAULT CHARACTER SET utf8 ;
USE `ecom_db` ;

-- -----------------------------------------------------
-- Table `ecom_db`.`Contacts`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ecom_db`.`Contacts` ;

CREATE TABLE IF NOT EXISTS `ecom_db`.`Contacts` (
  `contacts_id` INT NOT NULL AUTO_INCREMENT,
  `full_name` VARCHAR(200) NULL,
  `email` VARCHAR(200) NULL,
  `message` VARCHAR(200) NULL,
  PRIMARY KEY (`contacts_id`));

INSERT INTO `ecom_db`.`Contacts`(full_name, email, message)
VALUES ('Marvin Thapa Renteral', 'mar_bin@gmail.com', 'Poggers!'),
	   ('Anh Truong', 'aTruong@hotmail.com', 'Such cute products :3'),
       ('Alina Madsourvong', 'usa09@gmail.com','I demand more cute things.'),
       ('Nakia Isler', 'izl3r18@gmail.com', 'I want more Pokemon.'),
       ('Amirah Young', 'halsey_002@hotmail.com', 'I love your store and Halsey.'),
       ('Phuong Nguyen', 'P_Nguyen24@hotmail.com', 'Can you offer more shounen stuff in store please?'),
       ('Scarlett Law', 'cupcakes_cookies@gmail.com', 'OMG I WANT MORE STUFF PLEASE!'),
       ('Harrison Law', 'h_law_ninja@gmail.com', 'FLIP FLOP I WANT MORE YEET'),
       ('Nickie Tang', 'a_3y3_nT@gmail.com', 'The products you have here are cute.'),
       ('Kiana Truong', 'k_truong_304@hotmail.com', 'I WANT MORE CUTE STUFF PLEASE!');

SELECT * FROM `ecom_db`.`Contacts`;
-- -----------------------------------------------------
-- Table `ecom_db`.`Customers`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ecom_db`.`Customers` ;

CREATE TABLE IF NOT EXISTS `ecom_db`.`Customers` (
  `customer_id` INT NOT NULL AUTO_INCREMENT,
  `full_name` VARCHAR(200),
  `email` VARCHAR(200),
  `address` VARCHAR(200) ,
  `city` VARCHAR(45),
  `state` VARCHAR(45),
  `zipcode` VARCHAR(10),
  PRIMARY KEY (`customer_id`));


INSERT INTO `ecom_db`.`Customers`(full_name, email, address, city, state, zipcode)
VALUES ('Hersha Tylmen', 'qehihaxo-8370@gmail.com', '70 SW. Shirley St', 'Alpharetta', 'Georgia','30004'),
       ('Melanie Clark', 'yumpy@outlook.com', '489 Westminster Ave.', 'Palm Bay', 'Flordia', '32907'),
       ('Zion Glass', 'meier@yahoo.com', '49 Cypress St.', 'Bedford', 'Ohio', '44146'),
       ('Bob Ball', 'oechslin@icloud.com', '7 Glenholme St.', 'Snohomish', 'Washington', '98290'),
       ('Kyle Raven', 'jamuir@gmail.com', '901 Tailwater St.', 'Delaware', 'Ohio', '43015'),
       ('James Calvin', 'dleconte@yahoo.com', '388 Creek St', 'West New York', 'New York', '07093'),
       ('Colten Kallen', 'parksh@yahoo.com', '8841 Saxon St.', 'Oswego', 'New York', '13126'),
       ('Mabel Lauren', 'aschmitz@hotmail.com', '13 Penn Lane', 'Toledo', 'Ohio', '43612'),
       ('Val Huggins', 'credmond@icloud.com', '731 Linden Street', 'Bradenton', 'Flordia', '34203'),
       ('Julis Givings', 'forsberg@hotmail.com', '367 Airport Drive','Cornelius', 'North Carolina', '28031');

SELECT * FROM `ecom_db`.`Customers`;

-- -----------------------------------------------------
-- Table `ecom_db`.`Order_details`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ecom_db`.`Order_details` ;

CREATE TABLE IF NOT EXISTS `ecom_db`.`Order_details` (
  `orders_details_id` INT NOT NULL AUTO_INCREMENT,
  `quanity` INT NOT NULL,
  `Orders_order_id` INT NULL,
  `Products_products_id` INT NULL,
  PRIMARY KEY (`orders_details_id`),
  INDEX `products_id_idx` (`Products_products_id` ASC) VISIBLE,
  INDEX `order_id_idx` (`Orders_order_id` ASC) VISIBLE,
  CONSTRAINT `order_id`
    FOREIGN KEY (`Orders_order_id`)
    REFERENCES `ecom_db`.`Orders` (`orders_id`)
    ON DELETE NO ACTION
    ON UPDATE SET NULL,
  CONSTRAINT `products_id`
    FOREIGN KEY (`Products_products_id`)
    REFERENCES `ecom_db`.`Products` (`products_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
    
    INSERT INTO `ecom_db`.`Order_details`(quanity, Orders_order_id, Products_products_id)
    VALUES (1, 1, 4),
		   (4, 1, 5),
           (2, 1, 7),
           (1, 2, 1),
           (3, 6, 1),
           (1, 4, 2),
           (2, 5, 3),
           (1, 5, 2),
           (1, 2, 4),
           (2, 2, 5)
		;

	SELECT * FROM `ecom_db`.`Order_details`;
-- -----------------------------------------------------
-- Table `ecom_db`.`Orders`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ecom_db`.`Orders` ;

CREATE TABLE IF NOT EXISTS `ecom_db`.`Orders` (
  `orders_id` INT NOT NULL AUTO_INCREMENT,
  `date_order` TIMESTAMP NOT NULL,
  `Customers_customer_id` INT NULL,
  PRIMARY KEY (`orders_id`),
  INDEX `customer_id_idx` (`Customers_customer_id` ASC) VISIBLE,
  CONSTRAINT `Customer_customer_id`
    FOREIGN KEY (`Customers_customer_id`)
    REFERENCES `ecom_db`.`Customers` (`customer_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

INSERT INTO `ecom_db`.`Orders` (date_order, Customers_customer_id)
VALUES ('2019-07-10 09:10:23', 1),
	   ('2019-07-14 10:56:45' , 2),
       ('2019-07-14 11:05:01', 3),
       ('2019-07-15 12:00:56', 4),
       ('2019-07-20 06:20:45', 5),
       ('2019-07-24 05:56:10', 6),
       ('2019-07-27 4:20:45', 7),
       ('2019-07-30 01:23:12', 8),
       ('2019-08-01 07:50:09', 9),
       ('2019-08-01 03:01:00', 10);

SELECT * FROM `ecom_db`.`Orders`;

-- -----------------------------------------------------
-- Table `ecom_db`.`Price`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ecom_db`.`Price` ;

CREATE TABLE IF NOT EXISTS `ecom_db`.`Price` (
  `price_id` INT NOT NULL AUTO_INCREMENT,
  `price` DECIMAL(3,2) NULL,
  `Products_products_id` INT NOT NULL,
  `currency` VARCHAR(20) NULL,
  `discount` DECIMAL(3,2) NULL,
  PRIMARY KEY (`price_id`),
  INDEX `products_id_idx` (`Products_products_id` ASC) VISIBLE,
  CONSTRAINT `Products_products_id`
    FOREIGN KEY (`Products_products_id`)
    REFERENCES `ecom_db`.`Products` (`products_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

INSERT INTO `ecom_db`.`Price`(price, Products_products_id, currency, discount)
VALUES (5.00, 1, 'USD', NULL),
	   (4.00, 2, 'USD',NULL),
	   (4.00, 3, 'USD', NULL),
       (4.00, 4, 'USD', NULL),
       (3.00, 5, 'USD', NULL),
       (3.00, 6, 'USD', NULL),
       (4.00, 7, 'USD', NULL),
       (5.00, 8, 'USD', NULL),
       (3.00, 9,'USD', NULL),
       (5.00, 10, 'USD', NULL),
       (5.00, 11, 'USD', NULL),
       (4.00, 12, 'USD', NULL)
       ;   

SELECT * FROM `ecom_db`.`Price`;

-- -----------------------------------------------------
-- Table `ecom_db`.`Products`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ecom_db`.`Products` ;

CREATE TABLE IF NOT EXISTS `ecom_db`.`Products` (
  `products_id` INT NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(100) NULL,
  `product_desc` VARCHAR(150) NULL,
  `img` VARCHAR(300) NULL,
  `product_type` VARCHAR(45) NULL,
  `alt` VARCHAR(100) NULL,
  PRIMARY KEY (`products_id`));

INSERT INTO `ecom_db`.`Products`(product_name, product_desc,img, product_type, alt)
VALUES ("Blue Pusheenosaurus Plush",
"Dinosaurs are back and cuter than ever as the era of Pusheenosaur begins! This Blue Pusheenosaurus has a fierce tail and blue dino stripes.",
"https://cdn.shopify.com/s/files/1/0770/2163/products/blue_e7ce7bdb-c910-450b-b45f-dcbea2912cb1_large.jpg?v=1561584623",
"animal","Blue Pusheenosaurus Plush"),
("Graduated Pikachu Plush","Pikachu is ready to graduate in cap and gown! Go and get him with his diploma in hand!", 
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRq7Iwq2EL8w7lCdfOc7j89zI82q3nYFFZx4DOTWDLDhdjGXjlKHtswaZVkFwYVSnA-5eafsjfu9y8&usqp=CAc",
"character", "Graduated Pickachu Plush"),
("Tokage with Mom Plush", "Tokage looks so cute snuggling with his mom! This plush is so soft and a great size for cuddling.",
"https://cdn.shopify.com/s/files/1/0770/2163/products/1_c2b56760-77df-4b00-95c8-3f832140d0f9_large.jpg?v=1556238236",
"animal", "Tokage"),
("Steins;Gate Okabe Chibi Plush","Everyone’s favorite mad scientist from Steins;Gate, Rintarou Okabe, appears as a super-cute chibi plushie.",
"https://d3ieicw58ybon5.cloudfront.net/ex/350.350/shop/product/77060c0dc597452aaf87b8f8e6c1dd6e.jpg.webp", "character", "Steins;Gate Okabe ヽ(*ﾟдﾟ)ノ (Kaiba-!) Chibi Plush"),
("Ditto As Glaceon Plush", "Wait... Is this a Pokémon in disguise!? Those eyes, that smile—it's gotta be Ditto!", "https://www.pokemoncenter.com/wcsstore/PokemonCatalogAssetStore/images/catalog/products/P5160/701-04091/P5160_701-04091_02.jpg",
"character", "Ditto As Glaceon Plush"),
("Rabi-dango Grass Field", "This is the perfect home for three Rabi-dango to cuddle up and rest! Add this grass field to your collection!", "https://d3ieicw58ybon5.cloudfront.net/ex/350.350/shop/product/43f3af6616a54ad3a18712d3e226349c.jpg.webp",
"other", "Rabi-dango Grass Field"),
("Mochi Mochi Chukaman Cushion", "Can you image how much delicious filling would be inside a real Chinese steamed bun the size of this plushie? Care to take a bite?", "https://d3ieicw58ybon5.cloudfront.net/ex/350.350/shop/product/84c5028df7aa4d62955207ac91477fe9.jpg.webp",
"other", "Fans Mochi Mochi Chukaman Cushion"),
("Mogucchi Banana Beanbag Cushion Plush", "Bananas - they’re so good for you! These ones are an even better way to give yourself a boost as they’re just so darn cute too.", "https://d3ieicw58ybon5.cloudfront.net/ex/350.350/shop/product/4b723bf6aade4df5982ce8fbf51175ef.jpg.webp",
"other", "Mogucchi Banana Beanbag Cushion Plush Collection"),
("Popuko Pipimi Stuffed Plush","Pipimi joins the battle in her new stuffed plushie form ready to create memes for the majority.", "https://images-na.ssl-images-amazon.com/images/I/61TyXOXeTUL._SL1000_.jpg","character",
"Mikucos Pop Team Epic Poputepipikku Popuko Pipimi Stuffed Plush"),
("Jinbei-San, Mr. Whale Shark Plush", "This whale shark is filled with a marshmallow type cotton that makes it extremely soft to the touch.","https://www.thelittlestgiftboutique.com/images/sanX/MR-58301.jpg",
"animal", "Jinbei-San, Mr. Whale Shark Plush"),
("FGO Summer Jeanne D'Arc Alter Plush","Jalter is ready for the summer heat and chaning her class to beserker! She's ready to get summoned!","https://aitaikuji.com/content/images/thumbs/0029776_ichiban-kuji-fategrand-order-summer-servant-resort-festival-chokonokko-plush-jeanne-darc-alter.jpeg",
"character", "Jalter" ),
("Sushiyuki Premium XL Plush: Maguro", "Sushi doesn’t just make the perfect meal - it makes the perfect plushie too!","https://d3ieicw58ybon5.cloudfront.net/ex/350.350/shop/product/0184eb8e11a345a5acf237528593cf09.jpg.webp", "other", "Sushiyuki Premium XL Plush Part 2: Maguro");

SELECT * FROM `ecom_db`.`Products`;


/* api/products */
SELECT ecom_db.Products.products_id, ecom_db.Products.product_name, ecom_db.Products.product_desc, ecom_db.Products.product_type,
ecom_db.Products.img, ecom_db.Products.alt, ecom_db.Price.price, ecom_db.Price.currency
 FROM ecom_db.Price
	INNER JOIN ecom_db.Products
    ON ecom_db.Price.Products_products_id = ecom_db.Products.products_id ;
    
    