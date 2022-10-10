# Writing and Presentation Test Week #3

## Array

Array adalah sebuah struktur data yang digunakan untuk menyimpan kumpulan nilai. Array bisa menyimpan nilai dengan tipe data yang berbeda.

### Deklarasi Array

Array di deklarasikan dengan menggunakan tanda kurung siku `[]` dan di dalam kurung siku tersebut berisi nilai-nilai yang akan disimpan.

```js
const fruits = ["apple", "banana", "orange"];
```

### Akses Nilai Array

Nilai-nilai yang ada di dalam array bisa diakses dengan menggunakan indeks-nya. Indeks array dimulai dari 0.

```js
const fruits = ["apple", "banana", "orange"];

console.log(fruits[1]);
```

Output:

```
banana
```

### Properti Array

- #### length

  Properti ini digunakan untuk mendapatkan jumlah item dalam array.

  ```js
  const fruits = ["apple", "banana", "orange"];
  console.log(fruits.length);
  ```

  Output:

  ```
  3
  ```

### Method Array

Berikut adalah beberapa method yang bisa digunakan untuk array:

- #### push()

  Method ini digunakan untuk menambahkan item baru ke akhir array.

  ```js
  const fruits = ["apple", "banana", "orange"];
  fruits.push("grape");
  console.log(fruits);
  ```

  Output:

  ```
  ["apple", "banana", "orange", "grape"]
  ```

- #### pop()

  Method ini digunakan untuk menghapus item terakhir dari array.

  ```js
  const fruits = ["apple", "banana", "orange"];
  fruits.pop();
  console.log(fruits);
  ```

  Output:

  ```
  ["apple", "banana"]
  ```

- #### shift()

  Method ini digunakan untuk menghapus item pertama dari array.

  ```js
  const fruits = ["apple", "banana", "orange"];
  fruits.shift();
  console.log(fruits);
  ```

  Output:

  ```
  ["banana", "orange"]
  ```

- #### unshift()

  Method ini digunakan untuk menambahkan item baru ke awal array.

  ```js
  const fruits = ["apple", "banana", "orange"];
  fruits.unshift("grape");
  console.log(fruits);
  ```

  Output:

  ```
  ["grape", "apple", "banana", "orange"]
  ```

- #### forEach()

  Method ini digunakan untuk melakukan iterasi pada setiap item di dalam array.

  ```js
  const fruits = ["apple", "banana", "orange"];
  fruits.forEach((fruit) => {
    console.log(fruit);
  });
  ```

  Output:

  ```
  apple
  banana
  orange
  ```

- #### map()

  Method ini digunakan untuk melakukan iterasi pada setiap item di dalam array dan mengembalikan array baru.

  ```js
  const fruits = ["apple", "banana", "orange"];
  const newFruits = fruits.map((fruit) => {
    return fruit.toUpperCase();
  });
  console.log(newFruits);
  ```

  Output:

  ```
  ["APPLE", "BANANA", "ORANGE"]
  ```

### Array Multidimensi

Array multidimensi adalah array yang memiliki array di dalamnya. Array multidimensi bisa digunakan untuk menyimpan data dalam bentuk tabel.

```js
const employees = [
  ["John", 33, "Manager"],
  ["Jane", 32, "Engineer"],
  ["Dave", 34, "Designer"],
];

console.log(employees[0]);
console.log(employees[1][2]);

employees.forEach((emp) => {
  console.log(`Name: ${emp[0]} | Age: ${emp[1]} | Job: ${emp[2]}`);
});
```

Output:

```
["John", 33, "Manager"]
Engineer
Name: John | Age: 33 | Job: Manager
Name: Jane | Age: 32 | Job: Engineer
Name: Dave | Age: 34 | Job: Designer
```

## Object

Object adalah sebuah struktur data yang digunakan untuk menyimpan kumpulan nilai. Object bisa menyimpan nilai dengan tipe data yang berbeda. Nilai-nilai yang ada di dalam object disimpan dalam bentuk pasangan key-value.

### Deklarasi Object

Object di deklarasikan dengan menggunakan tanda kurung kurawal `{}` dan di dalam kurung kurawal tersebut berisi pasangan key-value yang akan disimpan.

```js
const person = {
  name: "John",
  age: 33,
  job: "Manager",
};
```

### Akses Nilai Object

Nilai-nilai yang ada di dalam object bisa diakses dengan menggunakan key-nya.

```js
const person = {
  name: "John",
  age: 33,
  job: "Manager",
};
console.log(person.name);
console.log(person.age);
// atau bisa juga menggunakan square brackets
console.log(person["job"]);
```

Output:

```
John
33
Manager
```

### Mengubah Nilai Object

Nilai-nilai yang ada di dalam object bisa diubah dengan cara mengakses key-nya dan memberikan nilai baru.

```js
const person = {
  name: "John",
  age: 33,
  job: "Manager",
};

person.name = "Jane";

console.log(person);
```

Output:

```
{ name: "Jane", age: 33, job: "Manager" }
```

### Method Object

Berikut adalah beberapa method yang bisa digunakan untuk object:

- #### Object.keys()

  Properti ini digunakan untuk mendapatkan semua key yang ada di dalam object.

  ```js
  const person = {
    name: "John",
    age: 33,
    job: "Manager",
  };
  console.log(Object.keys(person));
  ```

  Output:

  ```
  ["name", "age", "job"]
  ```

- #### Object.values()

  Properti ini digunakan untuk mendapatkan semua value yang ada di dalam object.

  ```js
  const person = {
    name: "John",
    age: 33,
    job: "Manager",
  };
  console.log(Object.values(person));
  ```

  Output:

  ```
  ["John", 33, "Manager"]
  ```

- #### Object.entries()

  Properti ini digunakan untuk mendapatkan semua pasangan key-value yang ada di dalam object dalam bentuk array.

  ```js
  const person = {
    name: "John",
    age: 33,
    job: "Manager",
  };
  console.log(Object.entries(person));
  ```

  Output:

  ```
  [["name", "John"], ["age", 33], ["job", "Manager"]]
  ```

### Looping Object

Berikut adalah beberapa cara untuk melakukan looping pada object:

- #### for...in

  ```js
  const person = {
    name: "John",
    age: 33,
    job: "Manager",
  };

  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  ```

  Output:

  ```
  name: John
  age: 33
  job: Manager
  ```

- #### Object.entries()

  ```js
  const person = {
    name: "John",
    age: 33,
    job: "Manager",
  };

  Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  ```

  Output:

  ```
  name: John
  age: 33
  job: Manager
  ```

## Recursive Function

Recursive function adalah fungsi yang memanggil dirinya sendiri. Recursive function biasanya digunakan untuk menyelesaikan masalah yang kompleks dengan cara membaginya menjadi masalah yang lebih kecil.

Berikut adalah contoh recursive function untuk menghitung faktorial.

```js
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));
```

Output:

```
120
```

Sebuah fungsi rekursif harus memiliki kondisi yang menghentikan fungsi tersebut agar tidak terjadi infinite loop. Kondisi ini disebut sebagai base case. Contoh base case untuk fungsi faktorial diatas adalah `n === 0`.

## Regular Expression

Regular expression adalah sebuah pola yang digunakan untuk mencocokkan string. Regular expression digunakan untuk melakukan validasi input, mencari dan mengganti string, dan lain-lain.

### Deklarasi Regular Expression

Ada dua cara untuk mendeklarasikan regular expression, yaitu dengan menggunakan tanda slash `/` atau dengan menggunakan constructor `RegExp()`.

```js
const regex1 = /hello/;
const regex2 = new RegExp("hello");
```

### Method RegExp

Berikut adalah beberapa method yang bisa digunakan untuk regular expression:

- #### test()

  Method ini digunakan untuk mencocokkan string dengan regular expression. Method ini akan mengembalikan nilai `true` jika string cocok dengan regular expression dan `false` jika tidak cocok.

  ```js
  const regex = /hello/;
  console.log(regex.test("hello world"));
  console.log(regex.test("hello"));
  console.log(regex.test("world"));
  ```

  Output:

  ```
  true
  true
  false
  ```

- #### exec()

  Method ini digunakan untuk mencocokkan string dengan regular expression. Method ini akan mengembalikan array yang berisi hasil pencocokan jika string cocok dengan regular expression dan `null` jika tidak cocok.

  ```js
  const regex = /hello/;
  console.log(regex.exec("hello world"));
  console.log(regex.exec("hello"));
  console.log(regex.exec("world"));
  ```

  Output:

  ```
  ["hello", index: 0, input: "hello world", groups: undefined]
  ["hello", index: 0, input: "hello", groups: undefined]
  null
  ```

- #### match()

  Method ini sebenarnya bukan merupakan method dari regular expression, melainkan merupakan method dari string. Method ini digunakan untuk mencocokkan string dengan regular expression. Method ini akan mengembalikan array yang berisi hasil pencocokan jika string cocok dengan regular expression dan `null` jika tidak cocok.

  ```js
  const regex = /hello/;
  console.log("hello world".match(regex));
  console.log("hello".match(regex));
  console.log("world".match(regex));
  ```

  Output:

  ```
  ["hello", index: 0, input: "hello world", groups: undefined]
  ["hello", index: 0, input: "hello", groups: undefined]
  null
  ```

- #### Meta Character

  Meta character adalah karakter khusus yang digunakan untuk mencocokkan string dengan regular expression. Berikut adalah beberapa meta character yang sering digunakan:

  - #### \d

    Meta character ini digunakan untuk mencocokkan string yang berisi angka.

    ```js
    /d/.exec("123"); // Match '1'
    /d/.exec("abc"); // No match
    /d+/.exec("123"); // Match '123'
    ```

  - #### \w

    Meta character ini digunakan untuk mencocokkan string yang berisi huruf, angka, dan underscore.

    ```js
    /w/.exec("123"); // Match '1'
    /w/.exec("abc"); // Match 'a'
    /w/.exec("_"); // Match '_'
    /w/.exec(" "); // No match
    /w+/.exec("123abc_"); // Match '123abc_'
    ```

  - #### \s

    Meta character ini digunakan untuk mencocokkan string yang berisi whitespace.

    ```js
    /s/.exec("123"); // No match
    /s/.exec("abc"); // No match
    /s/.exec("_"); // No match
    /s/.exec(" "); // Match ' '
    /s+/.exec("123 abc_"); // Match ' '
    ```

  - #### .

    Meta character ini digunakan untuk mencocokkan string yang berisi karakter apapun.

    ```js
    /./.exec("abc"); // Match 'a'
    /./.exec("123"); // Match '1'
    /.*/.exec("abc123"); // Match 'abc123'
    /h.llo/.exec("hello"); // Match 'hello'
    /h.llo/.exec("hallo"); // Match 'hallo'
    ```

  ### Flags

  Flags adalah karakter khusus yang digunakan untuk mengubah cara kerja regular expression. Berikut adalah beberapa flags yang sering digunakan:

  - #### g

    Flag ini digunakan untuk mencocokkan semua string yang cocok dengan regular expression.

    ```js
    /hello/.exec("hello hello world"); // Match 'hello'
    /hello/g.exec("hello hello world"); // Match ['hello', 'hello']
    ```

  - #### i

    Flag ini digunakan untuk mencocokkan string tanpa memperdulikan huruf besar atau kecil.

    ```js
    /hello/.exec("Hello"); // No match
    /hello/i.exec("Hello"); // Match 'Hello'
    ```

  ### Quantifiers

  Quantifiers adalah karakter khusus yang digunakan untuk mengulang pencocokan string dengan regular expression. Berikut adalah contoh penggunaan quantifiers:

  ```js
  /hello{3}/.exec("hello"); // No match
  /hello{3}/.exec("hellooo"); // Match 'hellooo'
  ```

  ### Anchors

  Anchors adalah karakter khusus yang digunakan untuk membatasi pencocokan string dengan regular expression. Anchor `^` digunakan untuk membatasi pencocokan string di awal, sedangkan anchor `$` digunakan untuk membatasi pencocokan string di akhir.

  ```js
  /^hello/.exec("hello world"); // Match 'hello'
  /^world/.exec("hello world"); // No match
  /hello$/.exec("hello world"); // No match
  /world$/.exec("hello world"); // Match 'world'
  ```

## Asynchronous JavaScript

Asynchronous adalah sebuah proses dimana sebuah proses berjalan secara paralel dengan proses lainnya. JavaScript merupakan bahasa pemrograman yang bersifat single-threaded, artinya JavaScript hanya dapat menjalankan satu proses dalam satu waktu. Namun, JavaScript memiliki kemampuan untuk menjalankan proses secara asynchronous.

```js
function func1() {
  console.log(1);
}

function func2() {
  setTimeout(() => {
    console.log(2);
  }, 1000);
}

function func3() {
  console.log(3);
}

func1();
func2();
func3();
```

Output:

```
1
3
2
```

### Callback

Callback adalah sebuah fungsi yang diberikan sebagai parameter ke fungsi lain. Callback biasanya digunakan untuk menangani hasil dari fungsi lain.

```js
function hello(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

hello("John", () => {
  console.log("Callback called");
});
```

Output:

```
Hello John
Callback called
```

### Promise

Promise adalah sebuah objek yang digunakan untuk menangani hasil dari operasi asynchronous. Promise memiliki 3 state:

- #### Pending

  State ini menandakan bahwa promise belum selesai.

- #### Fulfilled

  State ini menandakan bahwa promise selesai dan berhasil.

- #### Rejected

  State ini menandakan bahwa promise selesai dan gagal.

```js
function isEven(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n % 2 === 0) {
        resolve(`${n} is even`);
      } else {
        reject(`${n} is odd`);
      }
    }, 1000);
  });
}

isEven(2)
  .then((result) => {
    console.log(`Success: ${result}`);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });

isEven(3)
  .then((result) => {
    console.log(`Success: ${result}`);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });
```

Output:

```
Success: 2 is even
Error: 3 is odd
```

### Promise Chaining

Promise chaining adalah sebuah teknik untuk menangani hasil dari promise yang dipanggil secara berurutan.

```js
fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.name);
  })
  .catch((err) => {
    console.log(err);
  });
```

Output:

```
bulbasaur
```

### Promise All

Promise all adalah sebuah teknik untuk menangani hasil dari promise yang dipanggil secara bersamaan.

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success 1");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success 2");
  }, 2000);
});

Promise.all([promise1, promise2]).then((result) => {
  console.log(result);
});
```

Output:

```
["Success 1", "Success 2"]
```

## Web Storage

Web storage adalah sebuah teknologi yang digunakan untuk menyimpan data di browser. Web storage terdiri dari 2 jenis:

### Local Storage

Local storage menyimpan data dengan format key-value. Data yang disimpan di local storage tidak akan hilang ketika browser ditutup.

```js
localStorage.setItem("name", "John");
console.log(localStorage.getItem("name"));
```

Output:

```
John
```

### Session Storage

Session storage menyimpan data dengan format key-value. Data yang disimpan di session storage akan hilang ketika browser ditutup.

```js
sessionStorage.setItem("name", "John");
console.log(sessionStorage.getItem("name"));
```

Output:

```
John
```
