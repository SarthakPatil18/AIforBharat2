import React, { useState } from 'react';
import { ArrowLeft, Star, MapPin, Shield, Clock, Filter, SlidersHorizontal } from 'lucide-react';

interface SearchResultsProps {
  query: string;
  onNavigate: (screen: string) => void;
  language: 'en' | 'hi';
}

const SearchResults: React.FC<SearchResultsProps> = ({ query, onNavigate, language }) => {
  const [sortBy, setSortBy] = useState<'rating' | 'distance' | 'price'>('rating');
  const [showFilters, setShowFilters] = useState(false);

  const translations = {
    en: {
      back: 'Back',
      searchResults: 'Search Results',
      foundFor: 'Found for',
      sortBy: 'Sort by',
      rating: 'Rating',
      distance: 'Distance',
      price: 'Price',
      filters: 'Filters',
      viewProfile: 'View Profile',
      bookNow: 'Book Now',
      verified: 'Verified',
      experience: 'years exp',
      responseTime: 'Response time'
    },
    hi: {
      back: 'वापस',
      searchResults: 'खोज परिणाम',
      foundFor: 'के लिए मिला',
      sortBy: 'क्रमबद्ध करें',
      rating: 'रेटिंग',
      distance: 'दूरी',
      price: 'मूल्य',
      filters: 'फिल्टर',
      viewProfile: 'प्रोफाइल देखें',
      bookNow: 'अभी बुक करें',
      verified: 'सत्यापित',
      experience: 'वर्ष अनुभव',
      responseTime: 'प्रतिक्रिया समय'
    }
  };

  const t = translations[language];

  const providers = [
    {
      id: 1,
      name: "Ravi Kumar",
      service: language === 'en' ? "Expert Electrician" : "विशेषज्ञ विद्युत तकनीशियन",
      rating: 4.9,
      reviews: 156,
      distance: "0.8 km",
      price: "₹299",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      verified: true,
      experience: 8,
      responseTime: "< 30 min",
      specialties: ["Wiring", "Repairs", "Installation"]
    },
    {
      id: 2,
      name: "Suresh Patel",
      service: language === 'en' ? "Senior Electrician" : "वरिष्ठ विद्युत तकनीशियन",
      rating: 4.8,
      reviews: 203,
      distance: "1.2 km",
      price: "₹350",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      verified: true,
      experience: 12,
      responseTime: "< 45 min",
      specialties: ["Commercial", "Residential", "Emergency"]
    },
    {
      id: 3,
      name: "Amit Singh",
      service: language === 'en' ? "Certified Electrician" : "प्रमाणित विद्युत तकनीशियन",
      rating: 4.7,
      reviews: 89,
      distance: "2.1 km",
      price: "₹275",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      verified: true,
      experience: 6,
      responseTime: "< 1 hr",
      specialties: ["Home Automation", "Solar", "Repairs"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {t.back}
          </button>
        </div>

        {/* Search Info */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{t.searchResults}</h1>
          <p className="text-gray-600">
            {providers.length} professionals {t.foundFor} "<span className="font-medium text-indigo-600">{query}</span>"
          </p>
        </div>

        {/* Sort and Filter */}
        <div className="flex items-center justify-between mb-6 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-700">{t.sortBy}:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-1 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="rating">{t.rating}</option>
              <option value="distance">{t.distance}</option>
              <option value="price">{t.price}</option>
            </select>
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            {t.filters}
          </button>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {providers.map((provider) => (
            <div key={provider.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                {/* Provider Info */}
                <div className="flex items-start space-x-4 flex-1">
                  <div className="relative">
                    <img
                      src={provider.image}
                      alt={provider.name}
                      className="w-16 h-16 rounded-2xl object-cover"
                    />
                    {provider.verified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                        <Shield className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-lg font-semibold text-gray-900">{provider.name}</h3>
                      {provider.verified && (
                        <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full font-medium">
                          {t.verified}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-2">{provider.service}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-medium text-gray-900">{provider.rating}</span>
                        <span className="ml-1">({provider.reviews})</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{provider.distance}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{provider.responseTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {provider.specialties.map((specialty, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-sm text-gray-600">
                      {provider.experience} {t.experience}
                    </p>
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex md:flex-col items-center md:items-end space-x-4 md:space-x-0 md:space-y-3">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-indigo-600">{provider.price}</p>
                    <p className="text-sm text-gray-500">starting from</p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => onNavigate('provider')}
                      className="px-4 py-2 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                    >
                      {t.viewProfile}
                    </button>
                    <button
                      onClick={() => onNavigate('provider')}
                      className="px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium"
                    >
                      {t.bookNow}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;