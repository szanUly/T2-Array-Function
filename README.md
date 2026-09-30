# Tugas 2 - Array Function

## Identitas

- **Nama:** Sri Zul'Aini Ulya
- **NIM:** F1D02410096
- **Kelas:** 5C
- **Mata Kuliah:** Pemrograman Web Lanjut

## Deskripsi Tugas

Tugas ini bertujuan untuk memahami dan menerapkan enam metode array pada JavaScript, yaitu `map()`, `filter()`, `reduce()`, `find()`, `some()`, dan `every()`.

Pada tugas ini digunakan data berupa daftar teman yang terdiri dari nama, angka NIM, hobi, jumlah jam melakukan hobi dalam satu minggu, dan keterangan apakah hobi tersebut dilakukan di luar ruangan.

Data yang digunakan dibuat sendiri dan terdiri dari 10 data teman.

## Data yang Digunakan

Data array yang digunakan memiliki beberapa atribut, yaitu:

- `nama` → nama teman
- `angkaNim` → angka yang diambil dari NIM
- `hobi` → hobi masing-masing teman
- `jamPerMinggu` → jumlah waktu melakukan hobi dalam satu minggu
- `outdoor` → keterangan apakah hobi dilakukan di luar ruangan atau tidak

Data tersebut digunakan sebagai dasar penerapan keenam metode array dengan kasus yang berbeda.

---

# Implementasi

## 1. map()

### Tujuan

Mengubah seluruh nama teman menjadi huruf kapital.

### Kode dan Hasil Output

![Map](screenshot/map.png)

### Hasil

Metode `map()` berhasil menghasilkan array baru yang berisi seluruh nama teman dalam bentuk huruf kapital.

---

## 2. filter()

### Tujuan

Mengambil data teman yang memiliki angka NIM lebih dari 50.

### Kode dan Hasil Output

![Filter](screenshot/filter.png)

### Hasil

Metode `filter()` menghasilkan 7 data teman yang memiliki angka NIM lebih dari 50, yaitu Ulya, Rifqy, Akbar, Anis, Liya, Firda, dan Sagos.

---

## 3. reduce()

### Tujuan

Menghitung total seluruh angka NIM dari data teman.

### Kode dan Hasil Output

![Reduce](screenshot/reduce.png)

### Hasil

Metode `reduce()` menghasilkan total seluruh angka NIM sebesar **687**.

---

## 4. find()

### Tujuan

Mencari teman pertama yang memiliki hobi "Nonton".

### Kode dan Hasil Output

![Find](screenshot/find.png)

### Hasil

Metode `find()` menemukan **Ratu** sebagai data pertama yang memiliki hobi "Nonton".

---

## 5. some()

### Tujuan

Mengecek apakah terdapat teman yang melakukan hobinya lebih dari 8 jam dalam satu minggu.

### Kode dan Hasil Output

![Some](screenshot/some.png)

### Hasil

Metode `some()` menghasilkan `true` karena terdapat teman yang melakukan hobi lebih dari 8 jam dalam satu minggu, yaitu Sagos dengan durasi 10 jam.

---

## 6. every()

### Tujuan

Mengecek apakah semua teman memiliki angka NIM lebih dari 0.

### Kode dan Hasil Output

![Every](screenshot/every.png)

### Hasil

Metode `every()` menghasilkan `true` karena seluruh data teman memiliki angka NIM lebih dari 0.

---

# Kesimpulan

Dari tugas ini dapat dipahami bahwa keenam metode array memiliki fungsi yang berbeda.

`map()` digunakan untuk mengubah atau menghasilkan data baru dari setiap elemen. `filter()` digunakan untuk mengambil data yang memenuhi kondisi tertentu. `reduce()` digunakan untuk mengolah seluruh data menjadi satu nilai. `find()` digunakan untuk mencari data pertama yang sesuai dengan kondisi.

Sementara itu, `some()` digunakan untuk mengecek apakah terdapat setidaknya satu data yang memenuhi kondisi, sedangkan `every()` digunakan untuk mengecek apakah seluruh data memenuhi kondisi.

Dengan memahami keenam metode tersebut, pengolahan data array pada JavaScript dapat dilakukan dengan lebih sederhana dan terstruktur.