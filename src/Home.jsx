import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-12 gap-5 p-5 h-screen">
        <Link to="/imt" className="flex justify-center items-center bg-gradient-to-r from-red-400 to-red-700 hover:from-red-600 hover:to-red-600 col-span-6 row-span-6 rounded-lg cursor-pointer">
          <h1 className="text-3xl font-bold text-white">Index massa tubuh</h1>
        </Link>
        <Link to="/imt" className="flex justify-center items-center bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-yellow-600 hover:to-yellow-600 col-span-6 row-span-6 rounded-lg cursor-pointer">
          <h1 className="text-3xl font-bold text-white">Berat badan ideal</h1>
        </Link>
        <Link to="/imt" className="flex justify-center items-center bg-gradient-to-r from-green-400 to-green-700 hover:from-green-600 hover:to-green-600 col-span-6 row-span-6 rounded-lg cursor-pointer">
          <h1 className="text-3xl font-bold text-white">Tinggi badan ideal</h1>
        </Link>
        <Link to="/imt" className="flex justify-center items-center bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-600 hover:to-blue-600 col-span-6 row-span-6 rounded-lg cursor-pointer">
          <h1 className="text-3xl font-bold text-white">Prediksi kapan melahirkan</h1>
        </Link>
      </div>
    </>
  )
}

export default Home;