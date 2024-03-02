export default function Home() {
  return (
    <div className="w-16 md:w-20">
      <p className="text-white">White</p>
      <p className="text-black-100">Black 100</p>
      <p className="text-black-200">Black 200</p>
      <p className="text-black-300">Black 300</p>
      <p className="text-gray-100">Gray 100</p>
      <p className="text-gray-200">Gray 200</p>
      <div className="bg-gradient-to-r from-main_gradation-start to-main_gradation-end">
        <p className="text-white">Gradation</p>
      </div>
      <p className="text-main_blue">Main Blue</p>
      <p className="text-main_indigo">Main Indigo</p>
      <p className="text-yellow">Yellow</p>
      <p className="text-green">Green</p>
      <p className="text-pink">Pink</p>
      <p className="text-red">Red</p>
    </div>
  );
}
