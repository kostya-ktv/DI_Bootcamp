-- SELECT item FROM items ORDER BY price ASC;
-- SELECT item, price FROM items WHERE price >=80 ORDER BY price DESC;
-- SELECT first_name FROM customers ORDER BY first_name ASC LIMIT 3;
-- SELECT last_name FROM customers ORDER BY last_name DESC;

-- CREATE TABLE purchases(
-- 	customer_id INTEGER REFERENCES customers (customer_id),
-- 	item_id INTEGER REFERENCES items (item_id)
-- );

-- INSERT INTO purchases (customer_id, item_id)
-- VALUES 
-- 	(4,2),
-- 	(3,2),
-- 	(4,2),
-- 	(1,1),
-- 	(5,1);
	
-- SELECT * FROM purchases
-- INNER JOIN customers
-- ON purchases.customer_id = customers.customer_id;

-- SELECT * FROM purchases
-- INNER JOIN customers
-- ON purchases.customer_id = customers.customer_id
-- WHERE purchases.customer_id = 4;


-- SELECT * FROM purchases
-- INNER JOIN items
-- ON purchases.item_id = items.item_id
-- WHERE item LIKE 'Small%' OR item LIKE 'Large%';


-- INSERT INTO items (item, price) VALUES ('RAM', 200);

-- SELECT customer_id FROM customers WHERE last_name = 'Scott' AND first_name = 'Scott' RETURNING *;

-- UPDATE purchases
-- SET item_id = (SELECT item_id FROM items WHERE item = 'RAM')
-- WHERE customer_id = (SELECT customer_id FROM customers WHERE last_name = 'Scott' AND first_name = 'Scott');

-- SELECT first_name, last_name FROM purchases
-- INNER JOIN customers
-- ON customers.customer_id = purchases.customer_id;















