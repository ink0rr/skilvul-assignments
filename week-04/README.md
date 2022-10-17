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

## Responsive Web Design

Responsive web design adalah tentang menggunakan HTML dan CSS untuk secara otomatis menyesuaikan tampilan pada berbagai macam ukuran layar dan viewport supaya website dapat terlihat bagus di seluruh perangkat. Responsive web design menggunakan teknik-teknik seperti media query, flexible layout, dan flexible images.

### Media Query

Media query adalah sebuah aturan CSS yang digunakan untuk menyesuaikan tampilan pada berbagai macam ukuran layar dan viewport. Media query dapat digunakan untuk mengatur tampilan pada berbagai macam ukuran layar dan viewport.

```css
@media (max-width: 600px) {
  .container {
    width: 100%;
  }
}
```

### Flexible Layout

Flexible layout adalah sebuah teknik untuk membuat layout yang dapat menyesuaikan ukuran layar dan viewport. Flexible layout menggunakan teknik-teknik seperti `flexbox` dan `grid`.

```css
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

### Flexible Images

Flexible images adalah sebuah teknik untuk membuat gambar yang dapat menyesuaikan ukuran layar dan viewport. Flexible images menggunakan teknik-teknik seperti `max-width` dan `height`.

```css
img {
  max-width: 100%;
  height: auto;
}
```

## Bootstrap

Bootstrap adalah sebuah framework CSS yang digunakan untuk membangun sebuah website. Bootstrap menggunakan teknik-teknik seperti grid system, components, dan utilities.

### Cara Menggunakan Bootstrap

Ada beberapa cara untuk menggunakan Bootstrap pada sebuah website, salah satunya adalah dengan menggunakan CDN. Kita dapat menggunakan Bootstrap hanya dengan menambahkan tag berikut pada bagian `<head>` dari sebuah file HTML.

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
  crossorigin="anonymous"
/>
<script
  defer
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
  crossorigin="anonymous"
></script>
```

### Grid System

Grid system adalah sebuah teknik untuk membuat layout yang dapat menyesuaikan ukuran layar dan viewport. Grid system menggunakan teknik-teknik seperti `container`, `row`, dan `col`.

```html
<div class="container">
  <div class="row">
    <div class="col">1 / 2</div>
    <div class="col">2 / 2</div>
  </div>
  <div class="row">
    <div class="col">1 / 3</div>
    <div class="col">2 / 3</div>
    <div class="col">3 / 3</div>
  </div>
</div>
```

### Components

Components adalah sebuah elemen HTML yang dapat digunakan untuk membangun sebuah website. Berikut adalah contoh penggunaan component `card`, dan `button`.

```html
<div class="container">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <a class="btn btn-primary" href="#" role="button">Link</a>
    </div>
  </div>
</div>
```

### Utilities

Utilities adalah sebuah kumpulan aturan CSS yang dapat digunakan untuk membangun sebuah website.

```html
<div class="mb-4">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input
    type="email"
    class="form-control border-success"
    id="exampleFormControlInput1"
    placeholder="name@example.com"
  />
</div>

<div class="h4 pb-2 mb-4 text-danger border-bottom border-danger">Dangerous heading</div>

<div class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
  Changing border color and width
</div>
```
