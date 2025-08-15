import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Star, 
  Phone, 
  MessageCircle, 
  Navigation,
  Clock,
  Shield,
  Zap,
  User,
  CheckCircle
} from 'lucide-react';

interface MapViewProps {
  professional: string;
  onNavigate: (screen: string) => void;
  language: 'en' | 'hi';
}

const MapView: React.FC<MapViewProps> = ({ professional, onNavigate, language }) => {
  const [isSearching, setIsSearching] = useState(true);
  const [foundProfessionals, setFoundProfessionals] = useState<any[]>([]);
  const [selectedProfessional, setSelectedProfessional] = useState<any>(null);

  const translations = {
    en: {
      back: 'Back',
      searchingNearby: 'Searching for nearby professionals...',
      foundProfessionals: 'Found professionals near you',
      selectProfessional: 'Select a Professional',
      callNow: 'Call Now',
      message: 'Message',
      bookNow: 'Book Now',
      away: 'away',
      verified: 'Verified',
      experience: 'years exp',
      responseTime: 'Response time',
      completedJobs: 'jobs completed'
    },
    hi: {
      back: 'वापस',
      searchingNearby: 'पास के पेशेवरों की खोज की जा रही है...',
      foundProfessionals: 'आपके पास पेशेवर मिले',
      selectProfessional: 'एक पेशेवर चुनें',
      callNow: 'कॉल करें',
      message: 'संदेश',
      bookNow: 'अभी बुक करें',
      away: 'दूर',
      verified: 'सत्यापित',
      experience: 'वर्ष अनुभव',
      responseTime: 'प्रतिक्रिया समय',
      completedJobs: 'कार्य पूर्ण'
    }
  };

  const t = translations[language];

  const mockProfessionals = [
    {
      id: 1,
      name: "Ravi Kumar",
      rating: 4.9,
      reviews: 156,
      distance: "0.8 km",
      price: "₹299",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      verified: true,
      experience: 8,
      responseTime: "< 30 min",
      completedJobs: 342,
      phone: "+91 98765 43210",
      location: { lat: 18.5204, lng: 73.8567 }
    },
    {
      id: 2,
      name: "Suresh Patel",
      rating: 4.8,
      reviews: 203,
      distance: "1.2 km",
      price: "₹350",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      verified: true,
      experience: 12,
      responseTime: "< 45 min",
      completedJobs: 289,
      phone: "+91 98765 43211",
      location: { lat: 18.5304, lng: 73.8667 }
    },
    {
      id: 3,
      name: "Amit Singh",
      rating: 4.7,
      reviews: 89,
      distance: "2.1 km",
      price: "₹275",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      verified: true,
      experience: 6,
      responseTime: "< 1 hr",
      completedJobs: 167,
      phone: "+91 98765 43212",
      location: { lat: 18.5104, lng: 73.8467 }
    }
  ];

  useEffect(() => {
    // Simulate searching for professionals
    const timer = setTimeout(() => {
      setIsSearching(false);
      setFoundProfessionals(mockProfessionals);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isSearching) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Navigation className="w-8 h-8 text-white animate-spin" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{t.searchingNearby}</h2>
          <p className="text-gray-600">Using AI to find the best match for "{professional}"</p>
          <div className="mt-6 flex justify-center space-x-1">
            <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={() => onNavigate('category')}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {t.back}
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {foundProfessionals.length} {t.foundProfessionals}
            </h2>
            
            {/* Mock Map */}
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl h-96 mb-4 overflow-hidden">
              <div className="absolute inset-0 bg-gray-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-indigo-600 mx-auto mb-2" />
                  <p className="text-gray-600 font-medium">Interactive Map View</p>
                  <p className="text-sm text-gray-500">Showing {foundProfessionals.length} professionals nearby</p>
                </div>
              </div>
              
              {/* Mock location pins */}
              <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="absolute bottom-1/3 left-1/2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                <User className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="flex items-center justify-center p-4 bg-indigo-50 rounded-xl">
              <Zap className="w-5 h-5 text-indigo-600 mr-2" />
              <span className="text-indigo-800 font-medium">AI matched {foundProfessionals.length} professionals for "{professional}"</span>
            </div>
          </div>

          {/* Professionals List */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.selectProfessional}</h3>
            
            {foundProfessionals.map((professional) => (
              <div 
                key={professional.id}
                className={`bg-white rounded-2xl shadow-sm border-2 p-6 cursor-pointer transition-all hover:shadow-md ${
                  selectedProfessional?.id === professional.id 
                    ? 'border-indigo-500 bg-indigo-50' 
                    : 'border-gray-100 hover:border-indigo-200'
                }`}
                onClick={() => setSelectedProfessional(professional)}
              >
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <img
                      src={professional.image}
                      alt={professional.name}
                      className="w-16 h-16 rounded-2xl object-cover"
                    />
                    {professional.verified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{professional.name}</h4>
                      <div className="text-right">
                        <p className="text-xl font-bold text-indigo-600">{professional.price}</p>
                        <p className="text-xs text-gray-500">starting from</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-medium text-gray-900">{professional.rating}</span>
                        <span className="ml-1">({professional.reviews})</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{professional.distance} {t.away}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{professional.responseTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>{professional.experience} {t.experience}</span>
                        <span>{professional.completedJobs} {t.completedJobs}</span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                          <Phone className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                          <MessageCircle className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {selectedProfessional && (
              <div className="sticky bottom-6">
                <button 
                  onClick={() => onNavigate('tracking')}
                  className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
                >
                  {t.bookNow} - {selectedProfessional.name}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;