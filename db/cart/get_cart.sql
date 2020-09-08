SELECT * FROM cart c
JOIN menu m ON m.menu_id = c.menu_id
WHERE c.user_id = $1;