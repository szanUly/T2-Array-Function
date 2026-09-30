const teman = [
  {
    nama: "Ulya",
    angkaNim: 96,
    hobi: "Memasak",
    jamPerMinggu: 5,
    outdoor: false,
  },
  {
    nama: "Alya",
    angkaNim: 2,
    hobi: "Kulineran",
    jamPerMinggu: 6,
    outdoor: true,
  },
  {
    nama: "Ratu",
    angkaNim: 33,
    hobi: "Nonton",
    jamPerMinggu: 3,
    outdoor: true,
  },
  {
    nama: "Rifqy",
    angkaNim: 80,
    hobi: "Game",
    jamPerMinggu: 6,
    outdoor: false,
  },
  {
    nama: "Akbar",
    angkaNim: 75,
    hobi: "Nonton",
    jamPerMinggu: 7,
    outdoor: true,
  },
  {
    nama: "Yola",
    angkaNim: 39,
    hobi: "Membaca",
    jamPerMinggu: 2,
    outdoor: false,
  },
  {
    nama: "Anis",
    angkaNim: 100,
    hobi: "Nonton",
    jamPerMinggu: 5,
    outdoor: false,
  },
  {
    nama: "Liya",
    angkaNim: 86,
    hobi: "Musik",
    jamPerMinggu: 1,
    outdoor: false,
  },
  {
    nama: "Firda",
    angkaNim: 106,
    hobi: "Bernyanyi",
    jamPerMinggu: 2,
    outdoor: true,
  },
  {
    nama: "Sagos",
    angkaNim: 70,
    hobi: "Ngoding",
    jamPerMinggu: 10,
    outdoor: true,
  },
];

console.log("=================================================");
console.log("DATA TEMAN");
console.log("=================================================");
console.table(teman);


const daftarNama = teman.map((item) => item.nama.toUpperCase());

console.log("\n=================================================");
console.log("1. MAP()");
console.log("=================================================");
console.log("Daftar nama teman dalam huruf kapital:");
console.log(daftarNama);


const temanAngkaNimBesar = teman.filter((item) => item.angkaNim > 50);

console.log("\n=================================================");
console.log("2. FILTER()");
console.log("=================================================");
console.log("Teman dengan angka NIM lebih dari 50:");
console.table(temanAngkaNimBesar);


const totalAngkaNim = teman.reduce(
  (total, item) => total + item.angkaNim,
  0,
);

console.log("\n=================================================");
console.log("3. REDUCE()");
console.log("=================================================");
console.log("Total seluruh angka NIM:", totalAngkaNim);


const temanNonton = teman.find((item) => item.hobi === "Nonton");

console.log("\n=================================================");
console.log("4. FIND()");
console.log("=================================================");
console.log("Teman yang dicari berdasarkan hobi: Nonton");
console.log("Hasil pencarian:");
console.log(temanNonton);


const adaHobiLebihDari8Jam = teman.some(
  (item) => item.jamPerMinggu > 8,
);

console.log("\n=================================================");
console.log("5. SOME()");
console.log("=================================================");
console.log(
  "Apakah ada teman yang memiliki hobi lebih dari 8 jam per minggu?",
  adaHobiLebihDari8Jam,
);


const semuaAngkaNimPositif = teman.every(
  (item) => item.angkaNim > 0,
);

console.log("\n=================================================");
console.log("6. EVERY()");
console.log("=================================================");
console.log(
  "Apakah semua teman memiliki angka NIM lebih dari 0?",
  semuaAngkaNimPositif,
);

console.log("\n=================================================");
console.log("SELESAI");
console.log("=================================================");