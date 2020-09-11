UPDATE cart
SET quantity = $1
WHERE menu_id = $2 AND user_id = $3;
SELECT * FROM cart c
JOIN menu m ON m.menu_id = c.menu_id
WHERE c.user_id = $3;