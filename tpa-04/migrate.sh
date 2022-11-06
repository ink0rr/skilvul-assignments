mysql -u root < migrations/db_drop.sql
mysql -u root < migrations/db_create.sql
mysql -u root tpa-04 < migrations/customers.sql
mysql -u root tpa-04 < migrations/categories.sql
mysql -u root tpa-04 < migrations/products.sql
mysql -u root tpa-04 < migrations/orders.sql
mysql -u root tpa-04 < migrations/order_products.sql
