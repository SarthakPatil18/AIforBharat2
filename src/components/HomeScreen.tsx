import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Zap, 
  Wrench, 
  Home, 
  Car, 
  Scissors, 
  Baby, 
  BookOpen, 
  Heart,
  MapPin,
  Star,
  TrendingUp,
  Sparkles,
  Shield,
  Clock
} from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
  onSearch: (query: string) => void;
  onCategorySelect: (category: string) => void;
  language: 'en' | 'hi';
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate, onSearch, onCategorySelect, language }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const translations = {
    en: {
      welcome: 'Find trusted local services',
      subtitle: 'AI-powered marketplace connecting you with verified professionals in your neighborhood',
      searchPlaceholder: "Describe your problem... AI will find the perfect match",
      trending: "Popular Services",
      categories: "Service Categories",
      nearbyProviders: "Verified Professionals Near You",
      viewProfile: "View Profile",
      aiPowered: "AI-Powered Matching",
      verified: "100% Verified",
      warranty: "Service Warranty",
      instantBooking: "Instant Booking"
    },
    hi: {
      welcome: 'विश्वसनीय स्थानीय सेवाएं खोजें',
      subtitle: 'AI-संचालित मार्केटप्लेस जो आपको आपके पड़ोस के सत्यापित पेशेवरों से जोड़ता है',
      searchPlaceholder: "अपनी समस्या बताएं... AI सही मैच ढूंढेगा",
      trending: "लोकप्रिय सेवाएं",
      categories: "सेवा श्रेणियां",
      nearbyProviders: "आपके पास सत्यापित पेशेवर",
      viewProfile: "प्रोफाइल देखें",
      aiPowered: "AI-संचालित मैचिंग",
      verified: "100% सत्यापित",
      warranty: "सेवा वारंटी",
      instantBooking: "तत्काल बुकिंग"
    }
  };

  const t = translations[language];

  const aiSuggestions = [
    "My tap is leaking water continuously",
    "Power socket not working in bedroom",
    "Need deep cleaning for 2BHK apartment",
    "AC not cooling properly",
    "Wooden furniture repair needed",
    "Wall painting for living room",
    "Washing machine making noise",
    "Ceiling fan installation required"
  ];

  const categories = [
    { icon: Zap, name: language === 'en' ? 'Electrical' : 'विद्युत', color: 'bg-yellow-500', jobs: '2.3k+' },
    { icon: Wrench, name: language === 'en' ? 'Plumbing' : 'प्लंबिंग', color: 'bg-blue-500', jobs: '1.8k+' },
    { icon: Home, name: language === 'en' ? 'Cleaning' : 'सफाई', color: 'bg-green-500', jobs: '3.1k+' },
    { icon: Car, name: language === 'en' ? 'Automotive' : 'वाहन', color: 'bg-red-500', jobs: '950+' },
    { icon: Scissors, name: language === 'en' ? 'Beauty' : 'सुंदरता', color: 'bg-pink-500', jobs: '1.2k+' },
    { icon: Baby, name: language === 'en' ? 'Childcare' : 'बाल देखभाल', color: 'bg-purple-500', jobs: '680+' },
    { icon: BookOpen, name: language === 'en' ? 'Education' : 'शिक्षा', color: 'bg-indigo-500', jobs: '1.5k+' },
    { icon: Heart, name: language === 'en' ? 'Healthcare' : 'स्वास्थ्य', color: 'bg-rose-500', jobs: '890+' }
  ];

  const providers = [
    {
      id: 1,
      name: "Ravi Kumar",
      service: language === 'en' ? "Expert Electrician" : "विशेषज्ञ विद्युत तकनीशियन",
      rating: 4.9,
      reviews: 156,
      distance: "0.8 km",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      verified: true,
      completedJobs: 342,
      responseTime: "< 30 min"
    },
    {
      id: 2,
      name: "Priya Sharma",
      service: language === 'en' ? "Professional Cleaner" : "पेशेवर सफाई कर्मी",
      rating: 4.8,
      reviews: 203,
      distance: "1.2 km",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      verified: true,
      completedJobs: 289,
      responseTime: "< 45 min"
    },
    {
      id: 3,
      name: "Amit Singh",
      service: language === 'en' ? "Certified Plumber" : "प्रमाणित प्लंबर",
      rating: 4.7,
      reviews: 89,
      distance: "2.1 km",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      verified: true,
      completedJobs: 167,
      responseTime: "< 1 hr"
    }
  ];

  const features = [
    { icon: Sparkles, title: t.aiPowered, desc: language === 'en' ? 'Smart matching technology' : 'स्मार्ट मैचिंग तकनीक' },
    { icon: Shield, title: t.verified, desc: language === 'en' ? 'Background verified pros' : 'पृष्ठभूमि सत्यापित पेशेवर' },
    { icon: Clock, title: t.warranty, desc: language === 'en' ? 'Digital service warranty' : 'डिजिटल सेवा वारंटी' }
  ];

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = aiSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {t.welcome}
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          {/* AI Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <div className="relative">
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 flex items-center">
                <Sparkles className="w-5 h-5 text-indigo-500 mr-2" />
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit()}
                placeholder={t.searchPlaceholder}
                className="w-full pl-16 pr-6 py-5 text-lg border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-lg transition-all bg-white"
              />
              {searchQuery && (
                <button
                  onClick={handleSearchSubmit}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition-colors font-medium"
                >
                  Search
                </button>
              )}
            </div>

            {/* AI Suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 z-10 overflow-hidden">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchQuery(suggestion);
                      setShowSuggestions(false);
                      onSearch(suggestion);
                    }}
                    className="w-full text-left px-6 py-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0"
                  >
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-indigo-500 mr-3" />
                      <span className="text-gray-800">{suggestion}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center space-x-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <feature.icon className="w-6 h-6 text-indigo-600" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{feature.title}</p>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Service Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.categories}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <button
                key={index}
                className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-indigo-200 hover:-translate-y-1"
                onClick={() => onCategorySelect(category.name)}
              >
                <div className={`w-14 h-14 ${category.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <p className="font-semibold text-gray-800 mb-1">{category.name}</p>
                <p className="text-sm text-gray-500">{category.jobs} jobs</p>
              </button>
            ))}
          </div>
        </section>

        {/* Top Providers */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.nearbyProviders}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {providers.map((provider) => (
              <div key={provider.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 overflow-hidden hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
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
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{provider.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{provider.service}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          <span className="font-medium text-gray-900">{provider.rating}</span>
                          <span className="text-gray-500 ml-1">({provider.reviews})</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{provider.distance}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-50 rounded-xl">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-900">{provider.completedJobs}</p>
                      <p className="text-xs text-gray-500">Jobs Done</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-900">{provider.responseTime}</p>
                      <p className="text-xs text-gray-500">Response</p>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate('provider')}
                    className="w-full bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors group-hover:bg-indigo-700"
                  >
                    {t.viewProfile}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeScreen;