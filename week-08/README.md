# Writing and Presentation Test Week #8

## MongoDB

MongoDB adalah salah satu jenis database NoSQL yang cukup populer digunakan dalam pengembangan website. Berbeda dengan database jenis SQL yang menyimpan data menggunakan relasi tabel, MongoDB menggunakan dokumen dengan format JSON.

Sistem database ini menggunakan beberapa komponen penting, yaitu:

- Database &ndash; merupakan wadah dengan struktur penyimpanan yang disebut collection.
- Collection &ndash; merupakan tempat kumpulan informasi data yang berbentuk dokumen. Collection dipadankan seperti tabel-tabel yang berisi data pada database SQL.
- Document &ndash; merupakan satuan unit terkecil dalam MongoDB

Sebagai satuan terkecil, dokumen akan berisi baris-baris data tanpa schema tertentu, tapi berupa struktur pasangan key-value. Key digunakan untuk melacak objek dengan (value) nilai yang bervariasi, seperti data angka, string, atau objek kompleks lainnya.

## Mongoose

Mongoose adalah ODM (Object Document Mapping) yang digunakan untuk menghubungkan aplikasi Node.js dengan MongoDB. ODM ini memungkinkan pengembang untuk menggunakan model yang mirip dengan model pada database SQL, seperti tabel dan kolom. Mongoose juga menyediakan fitur untuk melakukan validasi data, seperti tipe data, panjang karakter, dan lain-lain.

### Instalasi

```sh
npm i mongoose
```

### Penggunaan

```js
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/week-08")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
```

### Mongoose Schema

Mongoose Schema digunakan untuk mendefinisikan struktur dari dokumen yang akan disimpan dalam collection. Schema ini juga digunakan untuk melakukan validasi data, seperti tipe data, panjang karakter, dan lain-lain.

```js
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
```

### Mongoose Model

Mongoose Model digunakan untuk mengakses collection yang sudah dibuat. Model ini juga digunakan untuk melakukan operasi CRUD (Create, Read, Update, Delete) terhadap collection.

```js
const User = mongoose.model("User", userSchema);
```

### Mongoose Query

Mongoose Query digunakan untuk melakukan operasi CRUD terhadap collection. Query ini juga digunakan untuk melakukan filter data.

```js
const user = new User({
  name: "John Doe",
  age: 25,
});

user.save().then((result) => {
  console.log(result);
});

User.find({ name: "John Doe" }).then((result) => {
  console.log(result);
});
```

## Docker

Docker adalah sebuah platform yang digunakan untuk membuat, mengelola, dan menjalankan container. Container adalah sebuah unit yang berisi aplikasi beserta semua dependency yang dibutuhkan untuk menjalankannya.

### Cara Kerja Docker

Cara kerja Docker adalah dengan menciptakan sebuah ruang isolasi untuk meluncurkan aplikasi atau layanan. Ruang isolasi ini disebut Container, seperti ‘wadah’ yang akan menampung suatu benda agar tidak tumpah ke area lain.

### Penggunaan

#### Membuat image

```sh
docker build --tag hello .
```

#### Menjalankan container

```sh
docker run --rm hello
```
