CREATE TABLE users (
    user_id SERIAL PRIMARY KEY, 
    username VARCHAR(50),
    password VARCHAR(200)
);

CREATE TABLE menu (
    menu_id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    price INTEGER,
    image TEXT NOT NULL
    );

CREATE TABLE cart (
    cart_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES  users(user_id),
    menu_id INTEGER REFERENCES menu(menu_id),
    quantity INTEGER
)