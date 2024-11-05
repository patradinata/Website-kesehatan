import { useState } from "react";
import { Link } from "react-router-dom";

const TesButaWarna = () => {
  const [posisiGambar, setPosisiGambar] = useState(0);
  const [hasil, setHasil] = useState(false);

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
          "Buta warna total tidak melihat apapun.",
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
        [
          "Semua orang melihat angka 12, jika tidak, dia berbohong!",
        ],
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
    setPosisiGambar((prevPosisi) => prevPosisi + 1);
  };

  const artikel = [
    {
      linkCover:
        "https://ciputrahospital.com/wp-content/uploads/2024/09/man-sleeping-bed-morning-2-1-1024x683.jpg",
      linkArtikel: "https://ciputrahospital.com/cara-agar-cepat-tidur/",
      judulArtikel:
        "11 Cara Ampuh Tidur Cepat dan Nyenyak untuk Atasi Insomnia",
      authorArtikel: "Ciputra hospitals",
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
              <img className="col-span-4" src={gambar[posisiGambar].data[0]} />
              {hasil ? (
                <div className="col-start-8 col-span-12 space-y-5">
                  <h1 className="text-xl font-bold">Hasil</h1>
                  <>
                    {gambar[posisiGambar].data[2].map((datu, index) => (
                      <button
                        onClick={tampilkanHasil}
                        key={index}
                        className="w-full text-center bg-gray-100 font-bold py-3 rounded-md"
                      >
                        {datu}
                      </button>
                    ))}
                    <button
                      onClick={gambarSelanjutnya}
                      className="w-full bg-red-500 text-white font-bold py-3 rounded-md"
                    >
                      Gambar selanjutnya
                    </button>
                  </>
                </div>
              ) : (
                <>
                  <div className="col-start-9 col-span-5 space-y-5">
                    <h1 className="text-xl font-bold">Apa yang kamu lihat?</h1>
                    {gambar[posisiGambar].data[1].map((datu, index) => (
                      <button
                        onClick={tampilkanHasil}
                        key={index}
                        className="w-full text-center bg-gray-100 font-bold py-3 rounded-md"
                      >
                        {datu}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </form>
          </div>
          <div className="px-0 lg:px-60 xl:px-96 space-y-10">
            <div>
              <h2 className="text-lg sm:text-xl font-bold">
                Pengenalan kalkulator siklus tidur
              </h2>
              <p className="text-sm sm:text-base mt-2">
                Kalkulator siklus tidur adalah alat yang dirancang untuk
                membantu menghitung dan memantau pola tidur seseorang. Alat ini
                biasanya berfungsi dengan mengumpulkan informasi dari pengguna
                mengenai waktu tidur mereka, lalu menggunakan algoritma untuk
                menganalisis data tersebut dan memberikan informasi mengenai
                siklus tidur pengguna.
              </p>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">Tabel jam tidur</h2>
              <p className="text-sm sm:text-base mt-2">
                Sebagian orang tidak menyadari jumlah tidur yang mereka
                butuhkan, meskipun kebanyakan orang dewasa dianjurkan tidur
                tujuh hingga sembilan jam per malam, dengan kebutuhan lebih
                tinggi untuk bayi, anak-anak, dan remaja; jumlah tidur yang
                optimal dapat bervariasi tergantung kondisi kesehatan individu.
              </p>
              <table
                className="border border-collapse border-black mt-10"
                cellPadding={10}
              >
                <tr>
                  <th className="text-sm sm:text-base border border-collapse border-black">
                    Kategori
                  </th>
                  <th className="text-sm sm:text-base border border-collapse border-black">
                    Rentang usia
                  </th>
                  <th className="text-sm sm:text-base border border-collapse border-black">
                    Rekomendasi tidur harian
                  </th>
                </tr>
                {/* {tableJamTidur.map((dataJamTidur, index) => (
                  <tr key={index}>
                    <td className="text-sm sm:text-base border border-collapse border-black">
                      {dataJamTidur.kategori}
                    </td>
                    <td className="text-sm sm:text-base border border-collapse border-black">
                      {dataJamTidur.rentangUsia}
                    </td>
                    <td className="text-sm sm:text-base border border-collapse border-black">
                      {dataJamTidur.rekomendasi}
                    </td>
                  </tr>
                ))} */}
              </table>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">
                Cara Meningkatkan Tidur
              </h2>
              <p className="text-sm sm:text-base my-2">
                Sejumlah perubahan gaya hidup sederhana dapat diterapkan untuk
                meningkatkan kualitas tidur, yang dapat menghasilkan kesehatan
                fisik, kognitif, dan emosional yang lebih baik.
              </p>
              <ul className="text-sm sm:text-base list-disc list-inside">
                <li>Hindari kafein</li>
                <li>Kurangi konsumsi alkohol sebelum tidur</li>
                <li>Singkirkan perangkat elektronik</li>
                <li>Berolahraga setiap hari</li>
                <li>Jadikan kamar tidur gelap dan tenang</li>
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
