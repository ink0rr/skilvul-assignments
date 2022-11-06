-- Nominal rata-rata transaksi yang dilakukan oleh pelanggan dalam 1 bulan terakhir.
SELECT AVG(order_products.quantity * products.product_price) AS average_spent
FROM orders
    INNER JOIN customers ON customers.customer_id = orders.customer_id
    INNER JOIN order_products ON orders.order_id = order_products.order_id
    INNER JOIN products ON order_products.product_id = products.product_id;