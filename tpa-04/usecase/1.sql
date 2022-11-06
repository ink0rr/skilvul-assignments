-- 1 pelanggan membeli 3 barang yang berbeda.
INSERT INTO orders (customer_id)
VALUES (1);
INSERT INTO order_products (order_id, product_id, quantity)
VALUES (LAST_INSERT_ID(), 1, 1),
    (LAST_INSERT_ID(), 2, 3),
    (LAST_INSERT_ID(), 3, 2);