// menghitung Persegi
const luasPersegi = (sisi) => sisi * 2;
const kelilingPersegi = (sisi) => 4 * sisi;

// menghitung Persegi panjang
const luasPersegiPanjang = (panjang,lebar) => panjang * lebar;
const kelilingPersegiPanjang = (panjang,lebar) => 2 * (panjang + lebar);

// menghitung Segitiga
const luasSegitiga = (alas,tinggi) => 0.5 * (alas * tinggi);
const kelilingSegitiga = (sisi1,sisi2,sisi3) => sisi1 + sisi2 + sisi3;

// menghitung Jajar Genjang
const luasJajargenjang = (alas,tinggi) => alas * tinggi;
const kelilingJajargenjang = (alas,sisimiring) => 2 * (alas + sisimiring);

// menghitung Layang-layang
const luasLayang = (diameter1,diameter2) => 0.5 * diameter1 * diameter2;
const kelilingLayang = (sisi1,sisi2,sisi3,sisi4) => sisi1 + sisi2 + sisi3 + sisi4;

// menghitung Trapesium
const luasTrapesium = (atas,bawah,tinggi) => 0.5 * (atas + bawah) * tinggi;
const kelilingTrapesium = (sisi1,sisi2,sisi3,sisi4) => sisi1 + sisi2 + sisi3 + sisi4;

// menghitung Belah Ketupat
const luasBelahketupat = (diameter1,diameter2) => 0.5 * diameter1 * diameter2;
const kelilingBelahketupat = (sisi1,sisi2,sisi3,sisi4) => sisi1 + sisi2 + sisi3 + sisi4;