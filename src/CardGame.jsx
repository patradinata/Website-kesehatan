import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CardGame = () => {
  const data = [
    {
      id: 1,
      tebakan:
        "https://img-cdn.medkomtek.com/3YZVz31RXjKAe0EJ1LCTEiKfbAg=/730x411/smart/filters:quality(100):format(webp)/article/vwZErIib6aj8Qpf1zSbqQ/original/076960300_1562037218-Manfaat-Buah-untuk-Kesehatan-Alpukat-By-Krasula-Shutterstock.jpg?w=1920&q=100",
    },
    {
      id: 1,
      tebakan:
        "https://img-cdn.medkomtek.com/3YZVz31RXjKAe0EJ1LCTEiKfbAg=/730x411/smart/filters:quality(100):format(webp)/article/vwZErIib6aj8Qpf1zSbqQ/original/076960300_1562037218-Manfaat-Buah-untuk-Kesehatan-Alpukat-By-Krasula-Shutterstock.jpg?w=1920&q=100",
    },
    {
      id: 2,
      tebakan:
        "https://cdn.antaranews.com/cache/1200x800/2020/12/20/Screenshot_2020-12-20-10-16-58-41_copy_1080x720.jpg",
    },
    {
      id: 2,
      tebakan:
        "https://cdn.antaranews.com/cache/1200x800/2020/12/20/Screenshot_2020-12-20-10-16-58-41_copy_1080x720.jpg",
    },
    {
      id: 3,
      tebakan:
        "https://lingkarwilis.com/wp-content/uploads/2024/05/pexels-pixabay-327098-scaled.jpg",
    },
    {
      id: 3,
      tebakan:
        "https://lingkarwilis.com/wp-content/uploads/2024/05/pexels-pixabay-327098-scaled.jpg",
    },
    {
      id: 4,
      tebakan: "https://tentik.com/wp-content/uploads/2015/02/buah9.jpg",
    },
    {
      id: 4,
      tebakan: "https://tentik.com/wp-content/uploads/2015/02/buah9.jpg",
    },
    {
      id: 5,
      tebakan:
        "https://www.astronauts.id/blog/wp-content/uploads/2023/04/Manfaat-Kesehatan-Buah-Mangga-yang-Mungkin-Belum-Kamu-Ketahui.jpg",
    },
    {
      id: 5,
      tebakan:
        "https://www.astronauts.id/blog/wp-content/uploads/2023/04/Manfaat-Kesehatan-Buah-Mangga-yang-Mungkin-Belum-Kamu-Ketahui.jpg",
    },
  ];

  const shuffledData = [...data].sort(() => Math.random() - 0.5);

  const [cards, setCards] = useState(shuffledData);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);

  const handleCardClick = (index) => {
    if (
      flippedIndices.includes(index) ||
      matchedCards.includes(cards[index].id)
    )
      return;
    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      const [firstIndex, secondIndex] = newFlipped;
      if (cards[firstIndex].tebakan === cards[secondIndex].tebakan) {
        setMatchedCards([...matchedCards, cards[firstIndex].id]);
      }
      setTimeout(() => setFlippedIndices([]), 1000);
    }
  };

  useEffect(() => {
    if (matchedCards.length === data.length / 2) {
      setShowPopup(true);
    }
  }, [matchedCards]);

  const handleRestartGame = () => {
    setCards([...data].sort(() => Math.random() - 0.5));
    setMatchedCards([]);
    setFlippedIndices([]);
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col h-screen gap-y-2">
      <div className="flex p-5">
        <Link
          className="flex items-center gap-x-1 bg-red-600 px-5 py-2 rounded-3xl text-white"
          to="/"
        >
          <p className="text-base sm:text-xl font-semibold">Back</p>
        </Link>
      </div>
      <div className="flex-grow overflow-y-auto p-5 space-y-5">
        <h1 className="text-xl lg:text-3xl font-extrabold text-center">
          Memory Card Game
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card transform transition-transform duration-500 cursor-pointer ${
                flippedIndices.includes(index) || matchedCards.includes(card.id)
                  ? "flipped"
                  : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-inner relative w-full h-32 sm:h-40 md:h-48 lg:h-56">
                <div className="card-front absolute w-full h-full flex items-center justify-center text-xl font-bold text-white bg-red-500 rounded-lg">
                  ?
                </div>
                <img
                  src={card.tebakan}
                  className="card-back object-cover absolute w-full h-full flex items-center justify-center text-xl font-bold border-4 border-red-500 rounded-lg transform rotate-y-180"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {showInstructions && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-lg max-w-md w-full text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-red-600">
              Ketentuan Permainan
            </h2>
            <ol className="text-left text-sm sm:text-base list-decimal list-inside text-gray-700 mb-4">
              <li>
                Cari 2 <b>buah</b> yang sama!
              </li>
              <li>Ga ketemu? cari lagi!</li>
              <li>
                Cari sampai ketemu 5 pasang <b>buah!</b>
              </li>
            </ol>
            <button
              onClick={() => setShowInstructions(false)}
              className="bg-red-600 hover:bg-red-700 transition-colors text-white px-4 py-2 rounded-lg text-sm sm:text-base"
            >
              Mulai Bermain
            </button>
          </div>
        </div>
      )}

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Selamat kamu menang!</h2>
            <p className="mb-4">Semua buah telah berpasangan</p>
            <button
              onClick={handleRestartGame}
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Bermain lagi
            </button>
          </div>
        </div>
      )}

      <footer className="w-full py-2 bg-white">
        <p className="text-sm sm:text-base text-center">
          &copy;Joan Orlando Purba | 2024
        </p>
      </footer>
    </div>
  );
};

export default CardGame;
