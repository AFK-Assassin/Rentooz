

interface HeroProps {
  onRentClick: () => void;
  onDonateClick: () => void;
}

export default function Hero({ onRentClick, onDonateClick }: HeroProps) {
  return (
    <div className="relative bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-gray-900">
            <span className="block">Give Your Clothes a</span>
            <span className="block text-purple-600">Second Life</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-gray-500">
            Rent, sell, or donate your clothes. Earn Rentoons coins and shop sustainably.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow w-full sm:w-auto">
              <button
                onClick={onRentClick}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
              >
                Start Renting
              </button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto">
              <button
                onClick={onDonateClick}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}