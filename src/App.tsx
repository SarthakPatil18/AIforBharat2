import React, { useState } from 'react';
import { Search, User, Bell, Menu, X, Globe, MapPin } from 'lucide-react';
import HomeScreen from './components/HomeScreen';
import ProviderProfile from './components/ProviderProfile';
import UserProfile from './components/UserProfile';
import SearchResults from './components/SearchResults';
import ServiceCategory from './components/ServiceCategory';
import MapView from './components/MapView';
import TrackingScreen from './components/TrackingScreen';

type Screen = 'home' | 'search' | 'provider' | 'profile' | 'category' | 'map' | 'tracking';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProfessional, setSelectedProfessional] = useState('');

  const translations = {
    en: {
      home: 'Home',
      profile: 'Profile',
      notifications: 'Notifications',
      location: 'Pune, Maharashtra'
    },
    hi: {
      home: 'होम',
      profile: 'प्रोफाइल',
      notifications: 'सूचनाएं',
      location: 'पुणे, महाराष्ट्र'
    }
  };

  const t = translations[language];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentScreen('search');
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentScreen('category');
  };

  const handleProfessionalSelect = (professional: string) => {
    setSelectedProfessional(professional);
    setCurrentScreen('map');
  };
  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={setCurrentScreen} onSearch={handleSearch} onCategorySelect={handleCategorySelect} language={language} />;
      case 'search':
        return <SearchResults query={searchQuery} onNavigate={setCurrentScreen} language={language} />;
      case 'category':
        return <ServiceCategory category={selectedCategory} onNavigate={setCurrentScreen} onProfessionalSelect={handleProfessionalSelect} language={language} />;
      case 'map':
        return <MapView professional={selectedProfessional} onNavigate={setCurrentScreen} language={language} />;
      case 'provider':
        return <ProviderProfile onNavigate={setCurrentScreen} language={language} />;
      case 'tracking':
        return <TrackingScreen onNavigate={setCurrentScreen} language={language} />;
      case 'profile':
        return <UserProfile onNavigate={setCurrentScreen} language={language} />;
      default:
        return <HomeScreen onNavigate={setCurrentScreen} onSearch={handleSearch} onCategorySelect={handleCategorySelect} language={language} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center">
                <Search className="w-5 h-5 text-white" />
              </div>
              <div className="ml-3">
                <span className="text-xl font-bold text-gray-900">LocalLens</span>
                <div className="flex items-center text-xs text-gray-500">
                  <MapPin className="w-3 h-3 mr-1" />
                  {t.location}
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => setCurrentScreen('home')}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  currentScreen === 'home'
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                }`}
              >
                {t.home}
              </button>
              
              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors rounded-full hover:bg-gray-50"
              >
                <Globe className="w-4 h-4 mr-1" />
                {language === 'en' ? 'हिं' : 'EN'}
              </button>

              {/* Notifications */}
              <button className="p-2 text-gray-700 hover:text-indigo-600 transition-colors rounded-full hover:bg-gray-50">
                <Bell className="w-5 h-5" />
              </button>

              {/* Profile */}
              <button
                onClick={() => setCurrentScreen('profile')}
                className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-50 transition-colors"
              >
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face"
                  alt="Profile"
                  className="w-8 h-8 rounded-full border-2 border-gray-200"
                />
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-indigo-600 transition-colors rounded-full hover:bg-gray-50"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-3 space-y-2">
              <button
                onClick={() => {
                  setCurrentScreen('home');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-xl transition-colors"
              >
                {t.home}
              </button>
              <button
                onClick={() => {
                  setCurrentScreen('profile');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-xl transition-colors"
              >
                {t.profile}
              </button>
              <button
                onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                className="flex items-center w-full px-4 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-xl transition-colors"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language === 'en' ? 'हिंदी' : 'English'}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {renderScreen()}
      </main>
    </div>
  );
}

export default App;