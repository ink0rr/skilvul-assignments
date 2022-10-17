# Writing and Presentation Test Week #4

## Fetch

Fetch adalah sebuah API yang digunakan untuk mengirim dan menerima request dari sebuah server. Fetch dapat digunakan untuk menggantikan `XMLHttpRequest` dan `jQuery.ajax()`.

```js
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

### Async/Await

`async` adalah sebuah keyword yang digunakan untuk menandakan bahwa sebuah function akan mengembalikan sebuah `Promise`. `async` dapat digunakan di depan sebuah function atau sebuah arrow function. `await` adalah sebuah keyword yang digunakan untuk menunggu sebuah `Promise` untuk selesai dijalankan. `await` hanya dapat digunakan di dalam sebuah function yang ditandai dengan `async`.

```js
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}
```

## Git & GitHub Lanjutan

### Fork

Fork adalah sebuah proses untuk membuat sebuah copy dari sebuah repository. Fork dapat digunakan untuk membuat sebuah copy dari sebuah repository untuk digunakan pada akun GitHub Anda.

### Branch

Branch adalah sebuah cabang dari sebuah repository. Branch digunakan untuk mengembangkan sebuah fitur atau memperbaiki sebuah bug tanpa mengganggu branch utama. Branch utama biasanya disebut dengan `master` atau `main`.

### Merge

Merge adalah sebuah proses untuk menggabungkan sebuah branch ke branch lainnya. Biasanya branch yang akan digabungkan ke branch lainnya adalah branch yang telah selesai dikerjakan.

### Pull Request

Pull Request adalah sebuah proses untuk meminta perubahan pada sebuah branch untuk di merge ke branch utama. Pull Request dapat digunakan untuk meminta perubahan pada sebuah branch atau untuk memberikan feedback pada sebuah branch.
