---
title: Tabel
lastUpdate: 2024-03-01
---

* Tabel adalah satu-satunya struktur data dalam basis data SQL. Tidak ada yang lain.
* Di dalam tabel terdapat kolom dan baris.
* Kolom diurutkan dari kiri ke kanan.
* Baris disimpan tanpa urutan (**unordered** bag of rows).
* Dalam pembuatan tabel, tiap kolom ditentukan nama dan tipe datanya.
* Tiap sel, dalam tiap baris memiliki tipe data yang sama.
* Setiap tipe data memiliki nilai `NULL` untuk mengindikasikan tidak adanya nilai spesifik.
* Identifikasi baris menggunakan key. Dalam SQL, kurang masuk akal mengidentifikasi baris dalam tabel dengan urutan.
* Row variable binding: `SELECT t FROM T AS t`. Row variable `t` is iteratively bound to row values whose field values and types are determined by the rows of table `T`.
* Row types: Such row variables have types derrived from the Table.
* Row field access: Use dot notation or * `t.a` or `t.*`
* Field names are not first-class in SQL and must be verbatim
* Row comparisons between rows `t1, t2` are performed lexicographically and field by field.
* Row value is `NULL` iff all of its field values are `NULL`
