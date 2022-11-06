CREATE TABLE IF NOT EXISTS customers(
    customer_id INT NOT NULL AUTO_INCREMENT,
    customer_name VARCHAR(50) NOT NULL,
    customer_email VARCHAR(50) NOT NULL UNIQUE,
    customer_phone VARCHAR(50) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (customer_id)
);