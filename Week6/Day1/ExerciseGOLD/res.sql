-- CREATE TABLE students(
-- 	id SERIAL NOT NULL,
-- 	first_name VARCHAR(30) NOT NULL,
-- 	last_name VARCHAR(30) NOT NULL,
-- 	birth_date DATE NOT NULL
-- );
-- INSERT INTO students(first_name, last_name, birth_date)
-- VALUES
-- 	('Marc', 'Benichou', '02/11/1998'),
-- 	('Yoan', 'Cohen', '03/12/2010'),
-- 	('Lea', 'Benichou', '27/07/1987'),
-- 	('Amelia', 'Dux', '07/04/1996'),
-- 	('David', 'Grez', '14/06/2003'),
-- 	('Omer', 'Simpson', '03/10/1980');

-- SELECT * FROM students ORDER BY first_name ASC LIMIT 4;
-- SELECT * FROM students ORDER BY birth_date DESC LIMIT 1;
-- SELECT * FROM students OFFSET 3;