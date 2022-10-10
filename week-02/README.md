# Writing and Presentation Test Week #2

## Function

Function adalah sebuah blok kode yang bisa dipanggil berulang kali. Function bisa menerima parameter dan mengembalikan nilai.

- ### Deklarasi Function

  ![function](img/function.svg)

  Sebuah deklarasi function terdiri dari:

  - Keyword `function`
  - Nama function, diikuti dengan tanda kurung `()`
  - Body function, berupa blok kode yang dibungkus dengan tanda kurung kurawal `{/* ... */}`

- ### Parameter

  Parameter adalah variabel yang digunakan untuk menerima nilai dari luar function. Sebuah function dapat memiliki lebih dari satu parameter yang dipisahkan dengan tanda koma `,`.

  ```js
  function sum(a, b) {
    return a + b;
  }
  ```

- ### Memanggil Function

  Function bisa dipanggil dengan menuliskan nama function diikuti dengan tanda kurung `()`. Jika function menerima parameter, parameter bisa dituliskan di dalam tanda kurung `()`.

  ```js
  function sayHello() {
    console.log("Hello");
  }

  sayHello(); // Hello
  ```

  ```js
  function sayHello(name) {
    console.log("Hello " + name);
  }

  sayHello("John"); // Hello John
  ```

- ### Return Value

  Return value adalah nilai yang dikembalikan oleh function. Return value bisa digunakan untuk mengisi variabel atau digunakan sebagai parameter function lain.

  ```js
  function sum(a, b) {
    return a + b;
  }

  let result = sum(1, 2);
  console.log(result); // 3
  console.log(sum(2, 3)); // 5
  ```

## Scope

Scope adalah konsep dalam flow data variabel. Scope menentukan suatu variable bisa diakses pada scope tertentu atau tidak.

- ### Global Scope

  Global scope berarti variabel bisa diakses dimana saja. Variabel yang berada di global scope bisa diakses di dalam function maupun di luar function.

  ```js
  let message = "Hello";

  function sayHello() {
    console.log(message);
  }

  sayHello(); // Hello
  console.log(message); // Hello
  ```

- ### Local Scope

  Local scope berarti variabel hanya bisa diakses di dalam block seperti function, if, for, while, dll. Variabel yang berada di local scope tidak bisa diakses di luar block.

  ```js
  function sayHello() {
    let message = "Hello";
    console.log(message);
  }

  sayHello(); // Hello
  console.log(message); // ReferenceError: message is not defined
  ```

## Built-in Method & Properties

- ### String

  Beberapa built-in method dan properties yang bisa digunakan untuk tipe data string adalah sebagai berikut:

  - `length` - panjang string
  - `toUpperCase()` - mengubah string menjadi huruf kapital
  - `toLowerCase()` - mengubah string menjadi huruf kecil
  - `charAt(index)` - mengambil karakter pada index tertentu
  - `indexOf(string)` - mencari index dari string tertentu
  - `substring(start, end)` - mengambil substring dari index start sampai index end
  - `split(separator)` - memecah string menjadi array berdasarkan separator
  - `trim()` - menghapus spasi di awal dan akhir string

- ### Number

  Beberapa built-in method dan properties yang bisa digunakan untuk tipe data number adalah sebagai berikut:

  - `toFixed(n)` - mengubah number menjadi string dengan n angka di belakang koma
  - `toString()` - mengubah number menjadi string
  - `toExponential(n)` - mengubah number menjadi string dengan notasi eksponensial
  - `toPrecision(n)` - mengubah number menjadi string dengan n digit angka

- ### Math

  Beberapa built-in method dan properties yang bisa digunakan untuk object math adalah sebagai berikut:

  - `Math.PI` - nilai pi
  - `Math.abs(x)` - nilai absolut dari x
  - `Math.ceil(x)` - pembulatan ke atas dari x
  - `Math.floor(x)` - pembulatan ke bawah dari x
  - `Math.round(x)` - pembulatan ke angka terdekat dari x
  - `Math.max(x, y)` - nilai terbesar dari x dan y
  - `Math.min(x, y)` - nilai terkecil dari x dan y
  - `Math.pow(x, y)` - x pangkat y
  - `Math.random()` - angka random dari 0 sampai 1

## DOM

Document Object Model atau DOM adalah interface yang disediakan oleh browser untuk mengakses dan memanipulasi HTML menggunakan JavaScript.

- ### DOM Selector

  DOM selector digunakan untuk mengambil elemen HTML. DOM selector bisa digunakan untuk mengambil satu elemen atau lebih dari satu elemen.

  - #### getElementById

    Mengambil elemen HTML berdasarkan id.

    ```js
    let element = document.getElementById("id");
    ```

  - #### getElementsByClassName

    Mengambil elemen HTML berdasarkan class.

    ```js
    let elements = document.getElementsByClassName("class-name");
    ```

  - #### getElementsByTagName

    Mengambil elemen HTML berdasarkan tag.

    ```js
    let elements = document.getElementsByTagName("h1");
    ```

  - #### querySelector

    Mengambil elemen HTML berdasarkan CSS selector.

    ```js
    let h1 = document.querySelector("h1"); // mengambil elemen dengan tag h1
    let p = document.querySelector(".paragraph"); // mengambil elemen dengan class paragraph
    let a = document.querySelector("#link"); // mengambil elemen dengan id link
    ```

- ### DOM Tree

  DOM Tree adalah struktur data yang merepresentasikan struktur HTML. DOM Tree terdiri dari node-node yang saling berhubungan. Setiap node memiliki tipe dan properti yang berbeda-beda.

  ![DOM Tree](img/dom-tree.gif)

  Node adalah elemen yang ada di dalam DOM Tree. Setiap node memiliki tipe dan properti yang berbeda-beda.

  ```html
  <div id="container">
    <p>Hello</p>
  </div>
  ```

  ```js
  let container = document.getElementById("container");
  ```

  - #### Element Node

    Element node adalah node yang merepresentasikan elemen HTML. Element node memiliki properti `tagName` yang berisi nama tag HTML.

    ```js
    console.log(container.tagName); // DIV
    ```

  - #### Text Node

    Text node adalah node yang merepresentasikan teks. Text node memiliki properti `textContent` yang berisi teks.

    ```js
    console.log(container.textContent); // Hello
    ```

  - #### Attribute Node

    Attribute node adalah node yang merepresentasikan atribut HTML. Attribute node memiliki properti `name` dan `value` yang berisi nama dan nilai atribut.

    ```js
    console.log(container.getAttributeNode("id").name); // id
    console.log(container.getAttributeNode("id").value); // container
    ```

  - #### Parent Node

    Parent node adalah node yang berada di atas node lain. Parent node bisa diakses melalui properti `parentNode`.

    ```js
    console.log(container.parentNode.tagName); // BODY
    ```

  - #### Child Node

    Child node adalah node yang berada di bawah node lain. Child node bisa diakses melalui properti `childNodes`.

    ```js
    console.log(container.childNodes[0].tagName); // P
    ```

- ### DOM Manipulation

  DOM Manipulation adalah proses untuk mengubah struktur DOM Tree. DOM Manipulation bisa dilakukan dengan mengubah properti node atau dengan menghapus dan menambahkan node.

  ```html
  <div id="container">
    <p>Hello</p>
  </div>
  ```

  ```js
  let container = document.getElementById("container");
  ```

  - #### Mengubah Properti Node

    Mengubah properti node bisa dilakukan dengan mengubah properti node secara langsung atau dengan menggunakan method-method yang disediakan oleh DOM API.

    ```js
    container.textContent = "Hello World";
    ```

    ```js
    container.setAttribute("id", "container-1");
    ```

  - #### Menghapus dan Menambahkan Node

    Menghapus dan menambahkan node bisa dilakukan dengan menggunakan method-method yang disediakan oleh DOM API.

    ```js
    container.removeChild(container.childNodes[0]);
    ```

    ```js
    let p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);
    ```

- ### DOM Event

  DOM Event adalah event yang terjadi pada elemen HTML. DOM Event bisa digunakan untuk menangani event yang terjadi pada elemen HTML.

  Beberapa jenis event yang bisa digunakan untuk menangani event yang terjadi pada elemen HTML adalah:

  - click
  - change
  - focus
  - hover
  - blur
  - scroll
  - submit

  Ada dua cara untuk menangani event yang terjadi pada elemen HTML yaitu dengan menggunakan event listener dan event handler.

  - #### Event Listener

    Event listener digunakan untuk menangani event yang terjadi pada elemen HTML. Event listener bisa ditambahkan dengan menggunakan method `addEventListener`.

    ```js
    button.addEventListener("click", () => {
      console.log("Button clicked");
    });
    ```

  - #### Event Handler

    Event handler digunakan untuk menangani event yang terjadi pada elemen HTML. Event handler bisa ditambahkan dengan menggunakan atribut `onEvent`.

    ```js
    button.onclick = () => {
      console.log("Button clicked");
    };
    ```

  - #### Perbedaan Event Listener dan Event Handler

    Ada sedikit perbedaan antara event listener dan event handler. Setiap elemen HTML hanya bisa memiliki satu event handler untuk setiap event. Sedangkan event listener bisa ditambahkan lebih dari satu untuk setiap event.

    ```js
    button.onclick = () => {
      console.log("Event handler 1");
    };
    button.onclick = () => {
      console.log("Event handler 2");
    };
    ```

    Ketika button diklik, hanya event handler 2 yang akan dijalankan.

    ```js
    button.addEventListener("click", () => {
      console.log("Event listener 1");
    });
    button.addEventListener("click", () => {
      console.log("Event listener 2");
    });
    ```

    Dengan menggunakan event listener, kedua event listener akan dijalankan ketika button diklik.

  - #### Menghapus Event Listener

    Event listener bisa dihapus dengan menggunakan method `removeEventListener`.

    ```js
    let handler = () => {
      console.log("Button clicked");
    };
    button.addEventListener("click", handler);
    button.removeEventListener("click", handler);
    ```
