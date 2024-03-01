---
title: "Sejarah SQL"
lastUpdate: 2024-03-01
---

## Makalah yang mengawali zaman basis data relasional

Pada Juni 1970, [makalah](https://www.seas.upenn.edu/~zives/03f/cis550/codd.pdf) Edgar Frank "[Ted](https://en.wikipedia.org/wiki/Edgar_F._Codd)" Codd (1923-2003) bertajuk *A Relational Model of Data for Large Shared Data Banks* terbit di jurnal Association of Computer Machinery (ACM). Ted adalah orang Inggris yang pada waktu itu bekerja sebagai ilmuwan komputer untuk IBM di Laboratorium Riset San Jose. Pada tahun 1981, Ted menerima Turing Award. Setahun setelah kematiannya, [SIGMOD](https://en.wikipedia.org/wiki/SIGMOD), kelompok minat khusus dalam ACM di bidang manajemen data, mengganti nama penghargaan tertinggi mereka yang diberikan tiap tahun menjadi ACM SIGMOD [Edgar F. Codd Innovations Award](https://en.wikipedia.org/wiki/SIGMOD_Edgar_F._Codd_Innovations_Award).

Sebelum makalah legendaris ini terbit, yang jamak dipakai adalah sistem basis data berbasis [hierarki](https://web.archive.org/web/20190214224454/http://idcp.marist.edu/pdfs/ztidbitz/22%20zTidBits%20%28IMS_Then%26ToDay%29.pdf) dan [jaringan](https://web.archive.org/web/20060904190944/http://coronet.iicm.edu/wbtmaster/allcoursescontent/netlib/ndm1.htm). Keduanya barangkali bisa disebut sebagai model "navigasional". Model hierarkis dipakai oleh IBM Information Management System ([IMS](https://en.wikipedia.org/wiki/IBM_Information_Management_System)). Model jaringan distandarkan oleh konsorsium Conference/Committee on Data Systems Languages ([CODASYL](https://en.wikipedia.org/wiki/CODASYL)).

Model tersebut menyimpan struktur data pohon atau graf ke disk dan menggunakan *pointer* untuk menjaga hubungan antar data. Mengambil catatan (*records*) yang disimpan di bagian bawah pohon memerlukan navigasi melalui semua catatan leluhurnya. Basis data ini cepat (IMS masih digunakan oleh banyak lembaga keuangan karena alasan ini) tetapi tidak fleksibel.

Program yang menggunakan database hierarki atau jaringan harus mengetahui bagaimana data yang disimpan disusun. Program harus mengetahui hal ini karena mereka bertanggung jawab untuk menelusuri struktur ini untuk menemukan informasi yang mereka butuhkan. Pemrogram [menjadi navigator](https://people.csail.mit.edu/tdanford/6830papers/bachman-programmer-as-navigator.pdf). Ketika ini yang terjadi, bisa dipastikan program akan rusak jika struktur basis data berubah. Melihat kondisi demikian, Ted menawarkan gagasan baru: model relasional.

Model relasional mengubah paradigma dalam pengelolaan data dengan memperlakukan data sebagai kumpulan relasi (tabel). Pendekatan ini memberikan fleksibilitas yang lebih besar dalam mengelola dan mengakses data, karena relasi dapat ditambahkan, diubah, atau dihapus tanpa memengaruhi relasi lainnya. Model relasional “menyediakan sarana untuk mendeskripsikan data dengan struktur alaminya saja,” sehingga program dapat dengan aman mengabaikan struktur buatan apa pun (seperti pohon atau jaringan) yang diterapkan pada data hanya untuk tujuan penyimpanan dan pengambilan. Abstraksi ini memungkinkan sistem basis data untuk berkembang secara organik seiring kebutuhan bisnis yang berubah, tanpa memerlukan perubahan besar pada struktur data atau program akses data. Dan dengan demikian, model relasional memungkinkan pengembangan bahasa data tingkat tinggi untuk mengabstraksi kompleksitas pengambilan dan manipulasi data, memungkinkan pengguna untuk mengekspresikan pertanyaan secara ringkas dan intuitif.

## Lahirnya SQL

Donald D. Chamberlin (1944) dan Raymond F. Boyce (1946-1974) adalah ilmuwan komputer Amerika yang bekerja untuk IBM di Pusat Riset Thomas J. Watson.

Pada 1972, mereka menghadiri [simposium riset Edgar Codd](https://www.inf.unibz.it/~franconi/teaching/2006/kbdb/Codd72a.pdf) tentang model relasional, Aljabar Relasional dan Kalkulus Relasional. Bagi Don dan Ray, simposium itu adalah sebuah [wahyu](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6359709). Mengapa demikian? Karena saat itulah mereka tahu bahwa kombinasi antara model relasional, aljabar relasional, dan kalkulus relasional memungkinkan pengambilan data hanya dalam beberapa baris.

Begini kira-kira kueri untuk menemukan nama-nama aeon yang kekuatan serangannya lebih tinggi dari aeon yang lemah terhadapnya:

```text

aeon
| nama    | serangan     | kelemahan     |
|---------|--------------|---------------|
| Valefor | 1200         | Ifrit         |
| Ifrit   | 1800         | Shiva         |
| Ixion   | 2200         | Valefor       |
| Shiva   | 2000         | Ixion         |
| Bahamut | 2500         | None          |


a. Aljabar relasional
---------------------
π a.nama (σ a.serangan > w.serangan (ρ(a.aeon) ⋈ a.kelemahan = w.nama ρ(w.aeon)))

b. Kalkulus relasional
----------------------
RANGE aeon a;
RANGE aeon w;
GET w (a.nama): ∃ m((a.kelemahan = w.nama) ∧ (a.serangan > w.serangan))

```

Ray dan Don terkesan dengan betapa ringkasnya kueri yang ditawarkan Ted untuk menjawab pertanyaan yang kompleks. Namun, pada saat yang sama, mereka percaya bahwa sangat mungkin untuk merancang bahasa relasional yang lebih mudah dari itu, yang dapat diakses oleh pengguna tanpa pelatihan formal dalam matematika atau pemrograman komputer.

Percobaan mereka dalam bereksperimen menciptakan bahasa tingkat tinggi ini dimulai dengan SQUARE (Specifying Queries As Relational Expressions). Kemudian pada 1973 mereka pindah ke Laboratorium Riset San Jose untuk bergabung ke proyek System R dan mengembangkan bahasa kueri baru, [SEQUEL](http://www.almaden.ibm.com/cs/people/chamberlin/sequel-1974.pdf) (Structured English Query Language). Sebulan setelah terbitnya makalah SEQUEL, Ray meninggal di usia 26 tahun karena aneurisma otak.

Pertanyaan yang sama seperti di atas, dalam bahasa SEQUEL menjadi:

```
SELECT a.nama
FROM aeon a, aeon w
WHERE a.kelemahan = w.nama AND a.serangan > w.serangan
```

Pada 1977, SEQUEL berganti nama menjadi SQL (Sturctured Query Language) karena masalah merek dagang. SQL bi(a)sa dieja sebagai es-kyu-el atau si-kwel. Hingga kini, SQL terus berkembang dan menjadi (atau tetap menjadi) bahasa data antargalaksi (*the intergalactic dataspeak*).
