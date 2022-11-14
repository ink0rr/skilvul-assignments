# Writing and Presentation Test Week #7

## SQL

SQL atau Structured Query Language merupakan suatu bahasa (Language) yang digunakan untuk mengakses database.

### DDL (Data Definition Language)

DDL merupakan kumpulan perintah SQL yang digunakan untuk membuat, mengubah dan menghapus struktur dan definisi metadata dari objek-objek Database.

#### CREATE

```sql
CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);
```

#### ALTER

```sql
ALTER TABLE employees
ADD COLUMN age INT NOT NULL;
```

#### DROP

```sql
DROP TABLE employees;
```

### DML (Data Manipulation Language)

DML merupakan kumpulan perintah SQL yang digunakan untuk mengakses data dari database.

#### INSERT

```sql
INSERT INTO employees (name, email, age)
VALUES ('John Doe', 'johndoe@example.com', 25);
```

#### UPDATE

```sql
UPDATE employees
SET age = 26
WHERE id = 1;
```

#### DELETE

```sql
DELETE FROM employees
WHERE id = 1;
```

### DQL (Data Query Language)

DQL merupakan kumpulan perintah SQL yang digunakan untuk mengambil data dari database.

#### SELECT

```sql
SELECT * FROM employees;
```

### DCL (Data Control Language)

DCL merupakan kumpulan perintah SQL yang digunakan untuk mengontrol akses data dari database.

#### GRANT

```sql
GRANT SELECT, INSERT, UPDATE, DELETE
ON employees
TO 'user'@'localhost';
```

#### REVOKE

```sql

REVOKE SELECT, INSERT, UPDATE, DELETE
ON employees
FROM 'user'@'localhost';
```

### Aggregation Function

Aggregation Function merupakan fungsi yang digunakan untuk menghitung nilai dari suatu kolom.

#### MAX

```sql
SELECT MAX(age) FROM employees;
```

#### MIN

```sql
SELECT MIN(age) FROM employees;
```

#### AVG

```sql
SELECT AVG(age) FROM employees;
```

#### COUNT

```sql
SELECT COUNT(*) FROM employees;
```

#### SUM

```sql
SELECT SUM(age) FROM employees;
```

## Authentication

Authentication adalah proses untuk memastikan bahwa pengguna yang sedang berinteraksi dengan sistem adalah pengguna yang benar. Authentication biasanya dilakukan dengan meminta pengguna untuk memasukkan username dan password. Setelah username dan password diterima, sistem akan melakukan pengecekan terhadap database untuk mengetahui apakah username dan password tersebut valid. Jika valid, maka pengguna akan diizinkan untuk berinteraksi dengan sistem. Jika tidak valid, maka sistem akan menolak permintaan pengguna untuk berinteraksi dengan sistem.

### Authentication Details

Authentication bisa dikategorikan sebagai berikut:

- Knowledge-based &mdash; Authentication yang menggunakan informasi yang diketahui oleh pengguna. Contoh: password, PIN.
- Possession-based &mdash; Authentication yang menggunakan informasi yang dimiliki oleh pengguna. Contoh: token, handphone.
- Inherence-based &mdash; Authentication yang menggunakan informasi yang dimiliki oleh pengguna. Contoh: fingerprint, retina.

## Authorization

Authorization adalah proses untuk memastikan bahwa pengguna yang sedang berinteraksi dengan sistem memiliki hak akses yang cukup untuk melakukan aksi yang diminta. Authorization biasanya dilakukan dengan memeriksa hak akses pengguna yang sedang berinteraksi dengan sistem. Jika pengguna memiliki hak akses yang cukup, maka pengguna akan diizinkan untuk berinteraksi dengan sistem. Jika tidak, maka sistem akan menolak permintaan pengguna untuk berinteraksi dengan sistem.

### Authorization Details

Authorization bisa dikategorikan sebagai berikut:

- Role-based &mdash; Authorization yang menggunakan informasi tentang peran pengguna. Contoh: admin, user.
- Permission-based &mdash; Authorization yang menggunakan informasi tentang hak akses pengguna. Contoh: read, write.

## Session Based Authentication

Session based authentication adalah salah satu metode authentication yang menggunakan session untuk menyimpan informasi tentang pengguna yang sedang berinteraksi dengan sistem. Session based authentication biasanya digunakan untuk aplikasi web.

### Express Session

Express session adalah middleware yang digunakan untuk membuat session pada aplikasi web yang dibangun dengan Express.js.

#### Instalasi

```sh
npm i express-session
```

#### Penggunaan

```js
const express = require("express");
const session = require("express-session");

const app = express();

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
```

## Token Based Authentication

Token based authentication adalah salah satu metode authentication yang menggunakan token untuk menyimpan informasi tentang pengguna yang sedang berinteraksi dengan sistem. Token based authentication biasanya digunakan untuk aplikasi mobile.

### JWT

JWT adalah salah satu metode token based authentication yang menggunakan JSON Web Token untuk menyimpan informasi tentang pengguna yang sedang berinteraksi dengan sistem.

#### Instalasi

```sh
npm i jsonwebtoken
```

#### Penggunaan

```js
const jwt = require("jsonwebtoken");

const secret = "keyboard cat";
const token = jwt.sign({ foo: "bar" }, secret);

jwt.verify(token, secret, function (err, decoded) {
  console.log(decoded.foo); // bar
});
```

#### JWT Components

JWT terdiri dari 3 bagian yang dipisa dengan tanda titik (.) yaitu:

- Header
- Payload
- Signature

##### Header

Header merupakan bagian pertama dari JWT yang berisi informasi tentang algoritma yang digunakan untuk membuat signature.

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

##### Payload

Payload merupakan bagian kedua dari JWT yang berisi informasi tentang pengguna yang sedang berinteraksi dengan sistem.

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

##### Signature

Signature merupakan bagian ketiga dari JWT yang berisi hasil enkripsi dari header dan payload menggunakan secret key.

```js
HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret);
```

## Sequelize

Sequelize adalah salah satu ORM yang digunakan untuk mengakses database dengan menggunakan JavaScript.

### Instalasi

```sh
npm i sequelize
```

### Penggunaan

```js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define("User", {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});

const jane = await User.create({
  username: "janedoe",
  birthday: new Date(1980, 6, 20),
});

const users = await User.findAll();
```
