-- Melihat 3 produk yang paling sering dibeli oleh pelanggan.
SELECT products.product_id,
    products.product_name,
    SUM(order_products.quantity) AS total_quantity
FROM order_products
    INNER JOIN products ON order_products.product_id = products.product_id
GROUP BY products.product_name
ORDER BY SUM(order_products.quantity) DESC
LIMIT 3;