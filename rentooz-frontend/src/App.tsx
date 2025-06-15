import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedItems from './components/FeaturedItems';
import DonateSection from './components/DonateSection';
import AuthModal from './components/auth/AuthModal';
import RentForm from './components/forms/RentForm';
import DonateForm from './components/forms/DonateForm';
import Shop from './pages/Shop';
import Wishlist from './pages/Wishlist';
import Coins from './pages/Coins';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isRentFormOpen, setIsRentFormOpen] = useState(false);
  const [isDonateFormOpen, setIsDonateFormOpen] = useState(false);

  const handleStartRenting = () => {
    setIsRentFormOpen(true);
  };

  const handleDonateNow = () => {
    setIsDonateFormOpen(true);
  };

  const handleProfileClick = () => {
    setIsAuthOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'shop':
        return <Shop />;
      case 'wishlist':
        return <Wishlist />;
      case 'coins':
        return <Coins />;
      default:
        return (
          <>
            <Hero onRentClick={handleStartRenting} onDonateClick={handleDonateNow} />
            <FeaturedItems />
            <DonateSection onDonateClick={handleDonateNow} />
          </>
        );
    }
  };

  return (
    <CartProvider>
      <WishlistProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar 
            onProfileClick={handleProfileClick}
            onPageChange={setCurrentPage}
            currentPage={currentPage}
          />
          <main>
            {renderPage()}
          </main>
          <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p>© 2024 Rentooz. All rights reserved.</p>
              </div>
            </div>
          </footer>

          <AuthModal 
            isOpen={isAuthOpen} 
            onClose={() => setIsAuthOpen(false)} 
            onLoginSuccess={() => {
            setCurrentPage('home');
            setIsAuthOpen(false);
            }}
          />
          <RentForm 
            isOpen={isRentFormOpen} 
            onClose={() => setIsRentFormOpen(false)} 
          />
          <DonateForm 
            isOpen={isDonateFormOpen} 
            onClose={() => setIsDonateFormOpen(false)} 
          />
        </div>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;