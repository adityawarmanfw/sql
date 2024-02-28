export default {
  "/isi/": [
    {
      title: "I. Pengantar",
      collapsible: true,
      items: [
        {
          title: "Tentang Buku",
          to: "/isi/bagian-i/tentang-buku",
        },
        {
          title: "Tentang Penulis",
          to: "/isi/bagian-i/tentang-buku",
        },
      ],
    },
    {
      title: "II. Menengok Kembali",
      collapsible: true,
      items: [
        {
          title: "SQL: Structured Query Language",
          to: "/isi/bagian-ii/structured-query-language",
        },
        {
          title: "KLAUSA",
          collapsible: true,
          items: [
            { title: "SELECT", to: "" },
            { title: "FROM", to: "" },
          ],
        },
      ],
    },
  ],
};
