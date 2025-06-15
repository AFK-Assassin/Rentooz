
import { Coins, Recycle, Heart } from 'lucide-react';

interface DonateSectionProps {
  onDonateClick: () => void;
}

export default function DonateSection({ onDonateClick }: DonateSectionProps) {
  return (
    <div className="bg-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Donate & Earn</h2>
          <p className="mt-4 text-lg text-gray-600">
            Give your pre-loved clothes a new purpose and earn Rentoons coins
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="flex justify-center">
              <Heart className="h-12 w-12 text-purple-600" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-gray-900">Donate Clothes</h3>
            <p className="mt-4 text-gray-500">
              Donate your gently used clothes to help those in need
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="flex justify-center">
              <Coins className="h-12 w-12 text-yellow-500" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-gray-900">Earn Coins</h3>
            <p className="mt-4 text-gray-500">
              Get Rentoons coins for every donation you make
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="flex justify-center">
              <Recycle className="h-12 w-12 text-green-500" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-gray-900">Shop Sustainably</h3>
            <p className="mt-4 text-gray-500">
              Use your coins for discounts on future purchases
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onDonateClick}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
          >
            Start Donating
          </button>
        </div>
      </div>
    </div>
  );
}