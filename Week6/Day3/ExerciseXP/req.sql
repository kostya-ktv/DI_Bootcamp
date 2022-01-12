--1 Get a list of all film languages.

-- SELECT name FROM language;

--2 Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
-- Get all films, even if they don’t have languages.
-- Get all languages, even if there are no films in those languages.

-- SELECT film.title, language.name from film Join language ON film.language_id = language.language_id
-- SELECT film.title, language.name from film FULL Join language ON film.language_id = language.language_id

--3 Create a new table called new_film with the following columns : id, name. Add some new films to the table.

-- CREATE TABLE new_film(
-- 	id SERIAL PRIMARY KEY,
-- 	name VARCHAR(50) NOT NULL
-- );
-- INSERT INTO new_film(name)
-- VALUES ('Venom'),('Spiderman'),('Batman'),('Starwars');

--4 Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.

-- CREATE TABLE customer_review(
-- 	review_id SERIAL PRIMARY KEY,
-- 	film_id INTEGER REFERENCES new_film (id) ON DELETE CASCADE,
-- 	language_id INTEGER REFERENCES language ON DELETE NO ACTION,
-- 	title VARCHAR(100) NOT NULL,
-- 	score SMALLINT NOT NULL,
-- 	review_text TEXT,
-- 	last_update TIMESTAMP		
-- );

--5 Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

-- INSERT INTO customer_review 
-- (film_id, language_id, title, score, review_text, last_update)
-- VALUES
-- (
-- 	(SELECT id FROM new_film WHERE name LIKE 'Venom'),
-- 	(SELECT language_id FROM language WHERE name='English'),
-- 	'Venom review',
-- 	7,
-- 	'really good film',
-- 	NOW()
-- ),
-- (
-- 	(SELECT id FROM new_film WHERE name LIKE 'Batman'),
-- 	(SELECT language_id FROM language WHERE name='German'),
-- 	'Batman review',
-- 	5,
-- 	'can be better',
-- 	NOW()
-- );

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?

SELECT * FROM customer_review;

-- DELETE FROM new_film WHERE id = 3;

-- Film and reviews were deleted because we have DELETE CASCADE




