export default {
  "/isi/": [
    {
      title: "I. Pengantar",
      items: [
        {
          title: "Tentang Buku",
          to: "/isi/bagian-i/tentang-buku/",
        },
        {
          title: "Tentang Penulis",
          to: "/isi/bagian-i/tentang-penulis/",
        },
        {
          title: "Tentang SQL",
          to: "/isi/bagian-i/tentang-sql/",
        },
      ],
    },
    {
      title: "II. Menengok Kembali",
      collapsible: true,
      items: [
        { title: "SELECT", to: "/isi/bagian-ii/select/" },
        { title: "FROM", to: "/isi/bagian-ii/from/" },
      ],
    },
  ],
};
