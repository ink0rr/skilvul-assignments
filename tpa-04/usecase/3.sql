-- Melihat Kategori barang yang paling banyak barangnya.
SELECT categories.category_name,
    COUNT(*) AS total_quantity
FROM categories
    INNER JOIN products ON categories.category_id = products.category_id
GROUP BY categories.category_name
ORDER BY COUNT(*) DESC
LIMIT 1;