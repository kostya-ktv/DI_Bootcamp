-- CREATE TABLE items(
-- 	item_id SERIAL PRIMARY KEY NOT NULL,
-- 	item VARCHAR(30) NOT NULL,
-- 	price FLOAT NOT NULL
-- );

-- INSERT INTO items (item, price)
-- VALUES
-- 	('CPU', 299.5),
-- 	('RAM', 115.5);

-- CREATE TABLE orders (
-- 	order_id SERIAL PRIMARY KEY NOT NULL,
-- 	item_id INTEGER REFERENCES items(item_id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL,
-- 	quantity INTEGER
-- );
-- INSERT INTO orders (item_id, quantity) VALUES ((SELECT item_id FROM items WHERE item = 'RAM'), 2);


CREATE OR REPLACE FUNCTION calculate_total(od_id INTEGER)
RETURNS INTEGER
	AS 
$$
DECLARE
	summary INTEGER;
BEGIN

	SELECT price * quantity 
	FROM items
	JOIN orders
	ON orders.item_id = items.item_id
	WHERE orders.order_id = od_id
	
	INTO summary;
	
	RETURN summary;	
	
END;
$$
LANGUAGE 'plpgsql';

SELECT calculate_total((SELECT order_id FROM orders INNER JOIN items ON items.item_id = orders.item_id WHERE item = 'RAM')) AS sum;