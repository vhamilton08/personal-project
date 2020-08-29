SELECT * FROM cart c
JOIN menu m ON menu_id = c.menu_id
WHERE c.user_id = $1;