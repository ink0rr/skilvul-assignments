CREATE TABLE IF NOT EXISTS orders(
    order_id INT NOT NULL AUTO_INCREMENT,
    customer_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (order_id),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);