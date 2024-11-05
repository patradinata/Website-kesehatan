import { useState } from "react";
import { Link } from "react-router-dom";

const TesButaWarna = () => {
  const [posisiGambar, setPosisiGambar] = useState(0);
  const [hasil, setHasil] = useState(false);

  const artikel = [
    {
      linkCover:
        "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/06/12042347/Buta-Warna-1.jpg.webp",
      linkArtikel:
        "https://www.halodoc.com/kesehatan/buta-warna?srsltid=AfmBOoqi-zxz-EifF2KEJyuSNE3VI5pObZXRLhl52oR09PUU8-7Ey1WJ",
      judulArtikel: "Buta Warna",
      authorArtikel: "Halodoc",
    },
    {
      linkCover:
        "https://cdn.hellosehat.com/wp-content/uploads/2018/12/Manfaat-Kesehatan-dan-Risiko-Tidur-di-Lantai.jpg?w=750&q=75",
      linkArtikel:
        "https://hellosehat.com/sehat/informasi-kesehatan/manfaat-dan-risiko-tidur-di-lantai/",
      judulArtikel:
        "Tidur di Lantai Sebetulnya Baik Atau Buruk Buat Kesehatan?",
      authorArtikel: "Hallo Sehat",
    },
    {
      linkCover:
        "https://thumb.viva.co.id/media/frontend/thumbs3/2020/03/25/5e7a4ac4a2461-dokter-tirta-mandira_1265_711.jpg",
      linkArtikel:
        "https://www.viva.co.id/digital/digilife/1719798-dokter-tirta-jelaskan-pentingnya-tidur-malam-dan-batasi-begadang",
      judulArtikel:
        "Dokter Tirta Jelaskan Pentingnya Tidur Malam dan Batasi Begadang",
      authorArtikel: "Viva",
    },
  ];

  const gambar = [
    {
      data: [
        "https://app.honestdocs.id/calculators/color-blind-quiz/images/plate-2.png",
        [8, 3, "Tidak ada"],
        [
          "Mata normal melihat angka 8.",
          "Buta warna hijau merah melihat angka 3.",
          "Buta warna total tidak melihat apapun.",
        ],
      ],
    },
    {
      data: [
        "https://app.honestdocs.id/calculators/color-blind-quiz/images/plate-3.png",
        [29, 70, "Tidak ada"],
        [
          "Mata normal melihat angka 29.",
          "Buta warna hijau merah melihat angka 70.",
          "Buta warna total tidak melihat apapun.",
        ],
      ],
    },
    {
      data: [
        "https://app.honestdocs.id/calculators/color-blind-quiz/images/plate-4.png",
        [5, 2, "Tidak ada"],
        [
          "Mata normal melihat angka 5.",
          "Buta warna hijau merah melihat angka 2.",
          "Buta warna total tidak melihat apapun.",
        ],
      ],
    },
    {
      data: [
        "https://app.honestdocs.id/calculators/color-blind-quiz/images/plate-9.png",
        [45, "Tidak ada"],
        [
          "Mata normal melihat angka 45.",
          "Buta warna tidak melihat dengan jelas.",
        ],
      ],
    },
    {
      data: [
        "https://app.honestdocs.id/calculators/color-blind-quiz/images/plate-10.png",
        [5, "Tidak ada"],
        [
          "Mata normal melihat angka 5.",
          "Buta warna tidak melihat dengan jelas.",
        ],
      ],
    },
    {
      data: [
        "https://app.honestdocs.id/calculators/color-blind-quiz/images/plate-12.png",
        [16, "Tidak ada"],
        [
          "Mata normal melihat angka 16.",
          "Buta warna total tidak melihat apapun.",
        ],
      ],
    },
    {
      data: [
        "https://app.honestdocs.id/calculators/color-blind-quiz/images/plate-15.png",
        ["Tidak ada", 45],
        [
          "Mata normal dan buta tidak melihat angka apapun.",
          "Buta warna hijau merah melihat angka 45.",
        ],
      ],
    },
    {
      data: [
        "https://app.honestdocs.id/calculators/color-blind-quiz/images/plate-17.png",
        [42, "2,4", "4,2"],
        [
          "Mata normal melihat angka 42.",
          "Buta warna merah (protanopia) melihat angka 2,4",
          "Buta warna hijau (deuteranopia) melihat angka 4,2",
        ],
      ],
    },
    {
      data: [
        "https://app.honestdocs.id/calculators/color-blind-quiz/images/plate-1.png",
        [12, "Tidak ada"],
        ["Semua orang melihat angka 12, jika tidak, dia berbohong!"],
      ],
    },
  ];

  const tampilkanHasil = (e) => {
    e.preventDefault();
    setHasil(true);
  };

  const gambarSelanjutnya = (e) => {
    e.preventDefault();
    setHasil(false);

    if (gambar[posisiGambar].data[1][0] === 12) {
      setPosisiGambar(0);
    } else {
      setPosisiGambar((prevPosisi) => prevPosisi + 1);
    }
  };

  return (
    <>
      <div className="p-5 flex flex-col gap-y-5">
        <div className="flex">
          <Link
            className="flex items-center gap-x-1 bg-red-600 px-5 py-2 rounded-3xl text-white"
            to="/"
          >
            <p className="text-base sm:text-xl font-semibold">Back</p>
          </Link>
        </div>
        <div className="h-0 lg:h-[400px] backgroundMata bg-no-repeat bg-cover bg-center flex justify-center items-center"></div>
        <div className="space-y-10">
          <h1 className="text-xl lg:text-3xl font-extrabold text-center">
            Tes Buta Warna
          </h1>
          <div className="px-0 lg:px-60 xl:px-96 space-y-10">
            <form
              onSubmit={tampilkanHasil}
              className="grid grid-cols-12 items-center"
            >
              <img
                className="w-full col-start-3 col-span-8 sm:col-start-4 sm:col-span-6 xl:col-span-5 2xl:col-span-4"
                src={gambar[posisiGambar].data[0]}
                alt="Color Blindness Test Plate"
              />
              {hasil ? (
                <div className="xl:col-start-7 col-span-12 space-y-5">
                  <h1 className="text-base md:text-xl font-bold">Hasil</h1>
                  {gambar[posisiGambar].data[2].map((datu, index) => (
                    <button
                      onClick={tampilkanHasil}
                      key={index}
                      className="w-full text-center bg-gray-100 font-bold p-2 rounded-md"
                    >
                      {datu}
                    </button>
                  ))}
                  <button
                    onClick={gambarSelanjutnya}
                    className="w-full bg-red-500 text-white text-sm sm:text-base font-bold p-2 rounded-md"
                  >
                    {gambar[posisiGambar].data[1][0] === 12
                      ? "Ulang?"
                      : "Gambar selanjutnya"}
                  </button>
                </div>
              ) : (
                <div className="xl:col-start-7 2xl:col-start-8 col-span-12 space-y-5">
                  <h1 className="text-xl font-bold">Apa yang kamu lihat?</h1>
                  {gambar[posisiGambar].data[1].map((datu, index) => (
                    <button
                      onClick={tampilkanHasil}
                      key={index}
                      className="w-full text-center bg-gray-100 text-sm sm:text-base font-bold py-3 rounded-md"
                    >
                      {datu}
                    </button>
                  ))}
                </div>
              )}
            </form>
          </div>
          <div className="px-0 lg:px-60 xl:px-96 space-y-10">
            <div>
              <h2 className="text-lg sm:text-xl font-bold">
                Pengenalan tes buta warna
              </h2>
              <p className="text-sm sm:text-base mt-2">
                Tes buta warna adalah pemeriksaan yang dilakukan untuk
                menentukan apakah seseorang mengalami kesulitan dalam membedakan
                warna tertentu. Tes ini bertujuan untuk mengidentifikasi jenis
                buta warna yang dialami dan seberapa parah kondisi tersebut.
              </p>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">Gejala</h2>
              <p className="text-sm sm:text-base mt-2">
                Gejala umum dari buta warna adalah perubahan penglihatan Anda.
                Misalnya, mungkin sulit membedakan antara warna merah dan hijau
                pada lampu lalu lintas. Warnanya mungkin nampak kurang cerah
                dari sebelumnya. Perbedaan corak warna mungkin semua nampak
                sama.
              </p>
              <p className="text-sm sm:text-base mt-2">
                Buta warna sering muncul ketika masih muda, ketika anak-anak
                mempelajari warna. Pada beberapa orang, masalah ini tidak
                terdeteksi karena mereka belajar mengasosiasikan warna khusus
                dengan benda tertentu.
              </p>
              <p className="text-sm sm:text-base mt-2">
                Misalnya mereka mengetahui bahwa warna rumput adalah hijau
                sehingga mereka menyebut warna yang mereka lihat hijau. Jika
                gejalanya ringan, orang lain mungkin tidak menyadari jika mereka
                menderita buta warna.
              </p>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">Penyebab</h2>
              <p className="text-sm sm:text-base my-2">
                Buta warna umumnya terjadi karena masalah pada sel-sel reseptor
                warna di retina mata. Berikut adalah beberapa penyebab utama
                buta warna:
              </p>
              <ul className="text-sm sm:text-base list-disc list-inside">
                <li>Genetik (Bawaan)</li>
                <li>Kerusakan atau Penyakit pada Mata</li>
                <li>Efek Penuaan</li>
                <li>Cedera atau Kerusakan pada Otak atau Saraf Optik</li>
                <li>Pengaruh Obat-obatan atau Bahan Kimia</li>
                <li>Paparan Berlebih terhadap Cahaya Terang</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">
                Cara mencegah buta warna
              </h2>
              <p className="text-sm sm:text-base my-2">
                Meskipun buta warna yang disebabkan oleh faktor genetik tidak
                dapat dicegah, ada beberapa langkah yang bisa diambil untuk
                mencegah atau mengurangi risiko gangguan penglihatan warna
                akibat faktor eksternal. Berikut beberapa cara mencegah buta
                warna yang terkait dengan faktor non-genetik:
              </p>
              <ul className="text-sm sm:text-base list-disc list-inside">
                <li>Lindungi Mata dari Paparan Cahaya Terang</li>
                <li>Kurangi Paparan terhadap Bahan Kimia Berbahaya</li>
                <li>Hindari Merokok dan Konsumsi Alkohol Berlebihan</li>
                <li>Periksa Mata Secara Rutin</li>
                <li>Perhatikan Asupan Nutrisi untuk Kesehatan Mata</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">Seputar tidur</h2>
              <div className="mt-2 grid grid-cols-12 gap-5">
                {artikel.map((data, index) => (
                  <a
                    key={index}
                    target="_blank"
                    href={data.linkArtikel}
                    className="flex flex-col justify-between items-stretch col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-6 2xl:col-span-4 bg-gray-100 p-3 rounded-lg h-full"
                  >
                    <div className="w-full h-40 rounded-md overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={data.linkCover}
                        alt=""
                      />
                    </div>
                    <p className="text-sm md:text-base font-medium mt-2 flex-1">
                      {data.judulArtikel}
                    </p>
                    <p className="bg-red-500 text-white text-sm md:text-base font-semibold mt-5 p-2 rounded-md text-center">
                      {data.authorArtikel}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <footer className="w-full">
          <p className="text-sm sm:text-base text-center">
            &copy;Joan Orlando Purba | 2024
          </p>
        </footer>
      </div>
    </>
  );
};

export default TesButaWarna;
