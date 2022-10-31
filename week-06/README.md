# Writing and Presentation Test Week #6

## Web Server

Web Server dibagi menjadi 2 bagian, yaitu:

- Hardware

  Pada bagian hardware, web server adalah komputer yang menyimpan software web server dan file komponen sebuah website seperti file HTML, CSS, dan JavaScript, serta file assets seperti gambar dan video. Web server juga dapat menyimpan database untuk menyimpan data yang digunakan oleh website.

- Software

  Pada bagian software, web server adalah sebuah software yang berfungsi untuk menerima request dari client dan mengirimkan response ke client. Web server juga dapat digunakan untuk mengatur akses ke file-file yang ada pada web server. Web server biasanya menggunakan protokol HTTP untuk menerima request dan mengirimkan response.

## RESTful API

RESTful API adalah web application yang menggunakan arsitektur REST untuk menerima request dan mengirimkan response.

### REST

REST adalah sebuah arsitektur untuk membuat sebuah API yang mudah untuk digunakan dan diimplementasikan. REST menggunakan HTTP method untuk menerima request dan mengirimkan response.

### HTTP Method

HTTP method digunakan untuk mengatur akses ke sebuah resource.

- `GET` &ndash; digunakan untuk mengambil data dari sebuah resource.

- `POST` &ndash;digunakan untuk membuat sebuah resource baru.

- `PUT` &ndash; digunakan untuk mengubah data dari sebuah resource.

- `DELETE` &ndash; digunakan untuk menghapus sebuah resource.

### HTTP Status Code

HTTP status code digunakan untuk memberikan informasi mengenai status dari sebuah request.

- `1xx` &ndash; digunakan untuk memberikan informasi mengenai proses request.

- `2xx` &ndash; digunakan untuk memberikan informasi mengenai suksesnya sebuah request.

- `3xx` &ndash; digunakan untuk memberikan informasi mengenai redirect.

- `4xx` &ndash; digunakan untuk memberikan informasi mengenai kesalahan yang terjadi pada sisi client.

- `5xx` &ndash; digunakan untuk memberikan informasi mengenai kesalahan yang terjadi pada sisi server.

## Node.js

Node.js adalah sebuah runtime environment untuk JavaScript yang berjalan di luar browser. Node.js dapat digunakan untuk membuat aplikasi web server, CLI, dan desktop. Node.js menggunakan V8 engine untuk menjalankan JavaScript. Node.js juga menggunakan event loop dan non-blocking I/O untuk menjalankan JavaScript secara asynchronous.

### Built-in Modules

Node.js menyediakan beberapa built-in modules seperti:

- `process` &ndash; digunakan untuk mengakses informasi tentang proses Node.js yang sedang berjalan dan untuk mengontrol proses tersebut.

  ```js
  console.log(process.cwd()); // Menampilkan current working directory
  ```

- `os` &ndash; digunakan untuk mengakses informasi tentang sistem operasi yang digunakan.

  ```js
  const os = require("os");
  console.log(os.homedir()); // Menampilkan path home directory
  ```

- `fs` &ndash; digunakan untuk mengakses file system.

  ```js
  const fs = require("fs");
  fs.readFileSync("path/to/file"); // Membaca file secara synchronous
  ```

- `http` &ndash; digunakan untuk membuat web server.

  ```js
  const http = require("http");
  const server = http.createServer((req, res) => {
    res.end("Hello World!"); // Mengirimkan response ke client
  });
  server.listen(3000); // Menjalankan web server pada port 3000
  ```

### NPM

Node Package Manager (NPM) merupakan pengelola package untuk JavaScript yang dapat memudahkan kita dalam mengelola package yang tersedia pada https://www.npmjs.com/. NPM merupakan package manager yang disediakan oleh Node.js dan terinstall otomatis ketika kita menginstall Node.js.

## Express.js

Express.js adalah sebuah framework untuk Node.js yang memudahkan kita dalam membuat web server. Kita dapat menginstall Express.js dengan menggunakan:

```bash
npm install express
```

Express.js menyediakan beberapa fitur seperti:

- Middleware

  Middleware adalah sebuah fungsi yang dapat dipanggil sebelum atau sesudah request diterima oleh web server. Middleware dapat digunakan untuk melakukan validasi, mengatur CORS, dan lain-lain.

  ```js
  const express = require("express");
  const app = express();

  app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
  });

  app.use((req, res, next) => {
    console.log("Middleware 2");
    next();
  });

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(3000);
  ```

- Router

  Router adalah sebuah fungsi yang digunakan untuk mengatur routing pada web server. Router dapat digunakan untuk mengatur routing untuk HTTP method tertentu.

  ```js
  const express = require("express");
  const app = express();

  const home = express.Router();
  home.get("/", (req, res) => {
    res.send("Home");
  });

  const about = express.Router();
  about.get("/", (req, res) => {
    res.send("About");
  });

  app.use("/", home);
  app.use("/about", about);

  app.listen(3000);
  ```

## Design Database with MySQL

### Database

Database adalah sebuah kumpulan data yang disimpan secara terstruktur. Database dapat digunakan untuk menyimpan data yang digunakan oleh aplikasi web. Database biasanya digunakan untuk menyimpan data yang sering diakses dan data yang memiliki hubungan satu sama lain.

### Entity Relationship Diagram

Entity Relationship Diagram (ERD) adalah sebuah diagram yang digunakan untuk menggambarkan hubungan antar entitas pada database. ERD biasanya digunakan untuk membuat database design sebelum database dibuat. Kita dapat membuat ERD dengan menggunakan aplikasi seperti MySQL Workbench, Microsoft Visio, atau aplikasi lainnya.

### Relational Database

Relational Database adalah sebuah database yang menyimpan data dalam bentuk tabel. Setiap tabel pada database memiliki kolom dan baris. Kolom pada tabel digunakan untuk menyimpan atribut dari entitas yang direpresentasikan oleh tabel tersebut. Baris pada tabel digunakan untuk menyimpan data dari entitas yang direpresentasikan oleh tabel tersebut.

### MySQL

MySQL adalah sebuah database management system (DBMS) yang menggunakan SQL sebagai bahasa query-nya. MySQL termasuk ke dalam relational databse.

### Primary Key

Primary Key adalah sebuah kolom pada tabel yang digunakan untuk mengidentifikasi baris pada tabel tersebut. Primary Key harus memiliki nilai yang unik dan tidak boleh bernilai NULL. Primary Key biasanya digunakan untuk mengidentifikasi baris pada tabel.

### Foreign Key

Foreign Key adalah sebuah kolom pada tabel yang digunakan untuk mengidentifikasi baris pada tabel lain. Foreign Key harus memiliki nilai yang sama dengan Primary Key dari tabel lain. Foreign Key biasanya digunakan untuk mengidentifikasi baris pada tabel lain.

### One-to-One Relationship

Contoh hubungan ini adalah hubungan antara tabel `users` dan tabel `profiles`.

```sql
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE profiles (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### One-to-Many Relationship

Contoh hubungan ini adalah hubungan antara tabel `users` dan tabel `posts`.

```sql
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE posts (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### Many-to-Many Relationship

Contoh hubungan ini adalah hubungan antara tabel `users` dan tabel `roles`.

```sql
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE user_roles (
  user_id INT NOT NULL,
  role_id INT NOT NULL,
  PRIMARY KEY (user_id, role_id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (role_id) REFERENCES roles(id)
);
```
