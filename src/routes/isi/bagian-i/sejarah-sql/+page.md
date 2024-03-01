---
title: "Sejarah SQL"
lastUpdate: 2023-10-12
---

## Makalah yang mengawali zaman basis data relasional

Pada Juni 1970, [makalah](https://www.seas.upenn.edu/~zives/03f/cis550/codd.pdf) Edgar Frank "[Ted](https://en.wikipedia.org/wiki/Edgar_F._Codd)" Codd (1923-2003) bertajuk *A Relational Model of Data for Large Shared Data Banks* terbit di jurnal Association of Computer Machinery (ACM). Ted adalah orang Inggris yang pada waktu itu bekerja sebagai ilmuwan komputer untuk IBM. Pada tahun 1981, Ted menerima Turing Award. Setahun setelah kematiannya, [SIGMOD](https://en.wikipedia.org/wiki/SIGMOD), kelompok minat khusus dalam ACM di bidang manajemen data, mengganti nama penghargaan tertinggi mereka yang diberikan tiap tahun menjadi ACM SIGMOD [Edgar F. Codd Innovations Award](https://en.wikipedia.org/wiki/SIGMOD_Edgar_F._Codd_Innovations_Award).

Sebelum makalah legendaris ini terbit, yang jamak dipakai adalah sistem basis data berbasis [hierarki](https://web.archive.org/web/20190214224454/http://idcp.marist.edu/pdfs/ztidbitz/22%20zTidBits%20%28IMS_Then%26ToDay%29.pdf) dan [jaringan](https://web.archive.org/web/20060904190944/http://coronet.iicm.edu/wbtmaster/allcoursescontent/netlib/ndm1.htm). Keduanya barangkali bisa disebut sebagai model "navigasional". Model hierarkis dipakai oleh IBM Information Management System ([IMS](https://en.wikipedia.org/wiki/IBM_Information_Management_System)). Model jaringan distandarkan oleh konsorsium Conference/Committee on Data Systems Languages ([CODASYL](https://en.wikipedia.org/wiki/CODASYL)).

Model tersebut menyimpan struktur data pohon atau graf ke disk dan menggunakan *pointer* untuk menjaga hubungan antar data. Mengambil catatan (*records*) yang disimpan di bagian bawah pohon memerlukan navigasi melalui semua catatan leluhurnya. Basis data ini cepat (IMS masih digunakan oleh banyak lembaga keuangan karena alasan ini) tetapi tidak fleksibel.

Program yang menggunakan database hierarki atau jaringan harus mengetahui bagaimana data yang disimpan disusun. Program harus mengetahui hal ini karena mereka bertanggung jawab untuk menelusuri struktur ini untuk menemukan informasi yang mereka butuhkan. Pemrogram [menjadi navigator](https://people.csail.mit.edu/tdanford/6830papers/bachman-programmer-as-navigator.pdf). Ketika ini yang terjadi, bisa dipastikan program akan rusak jika struktur basis data berubah. Melihat kondisi demikian, Ted menawarkan gagasan baru: model relasional.

Model relasional mengubah paradigma dalam pengelolaan data dengan memperlakukan data sebagai kumpulan relasi (tabel). Pendekatan ini memberikan fleksibilitas yang lebih besar dalam mengelola dan mengakses data, karena relasi dapat ditambahkan, diubah, atau dihapus tanpa memengaruhi relasi lainnya. Model relasional “menyediakan sarana untuk mendeskripsikan data dengan struktur alaminya saja,” sehingga program dapat dengan aman mengabaikan struktur buatan apa pun (seperti pohon atau jaringan) yang diterapkan pada data hanya untuk tujuan penyimpanan dan pengambilan. Abstraksi ini memungkinkan sistem basis data untuk berkembang secara organik seiring kebutuhan bisnis yang berubah, tanpa memerlukan perubahan besar pada struktur data atau program akses data. Dan dengan demikian, model relasional memungkinkan pengembangan bahasa data tingkat tinggi untuk mengabstraksi kompleksitas pengambilan dan manipulasi data, memungkinkan pengguna untuk mengekspresikan pertanyaan secara ringkas dan intuitif.

## Lahirnya SQL

* 1972: SQUARE
* 1973: [SEQUEL](https://web.archive.org/web/20070926212100/http://www.almaden.ibm.com/cs/people/chamberlin/sequel-1974.pdf) (Structured English Query Language)
* 1977: SQL

## Tabel
* Tabel adalah satu-satunya struktur data dalam sistem basis data relasional. Tidak ada yang lain.
* Di dalam tabel, terdapat kolom dan baris.
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
