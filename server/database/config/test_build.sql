BEGIN;

DROP TABLE IF EXISTS users;


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL
);


INSERT INTO users (name, location)
VALUES
('Ali', 'Gaza'),
('Ahmad', 'Nablus'),
('Sara', 'Jerusalem');


COMMIT;