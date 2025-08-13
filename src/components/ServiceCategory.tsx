import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Clock, 
  Shield, 
  Zap, 
  Wrench, 
  Droplets,
  Hammer,
  Lightbulb,
  Settings,
  User,
  Award
} from 'lucide-react';

interface ServiceCategoryProps {
  category: string;
  onNavigate: (screen: string) => void;
  onProfessionalSelect: (professional: string) => void;
  language: 'en' | 'hi';
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ category, onNavigate, onProfessionalSelect, language }) => {
  const [selectedProfessional, setSelectedProfessional] = useState('');

  const translations = {
    en: {
      back: 'Back',
      selectProfessional: 'Select Professional Type',
      startingFrom: 'Starting from',
      findNearby: 'Find Nearby',
      professionals: 'professionals available',
      avgRating: 'Avg Rating',
      responseTime: 'Response Time',
      experience: 'Avg Experience'
    },
    hi: {
      back: 'वापस',
      selectProfessional: 'पेशेवर प्रकार चुनें',
      startingFrom: 'शुरुआत',
      findNearby: 'पास में खोजें',
      professionals: 'पेशेवर उपलब्ध',
      avgRating: 'औसत रेटिंग',
      responseTime: 'प्रतिक्रिया समय',
      experience: 'औसत अनुभव'
    }
  };

  const t = translations[language];

  const getProfessionals = (categoryName: string) => {
    const professionalMap: { [key: string]: any[] } = {
      'Electrical': [
        {
          name: language === 'en' ? 'Electrician' : 'इलेक्ट्रीशियन',
          icon: Zap,
          price: '₹299',
          description: language === 'en' ? 'Wiring, switches, and electrical repairs' : 'वायरिंग, स्विच और विद्युत मरम्मत',
          available: 23,
          rating: 4.8,
          responseTime: '< 30 min',
          experience: '6 years'
        },
        {
          name: language === 'en' ? 'Home Automation Expert' : 'होम ऑटोमेशन विशेषज्ञ',
          icon: Settings,
          price: '₹899',
          description: language === 'en' ? 'Smart home setup and IoT installation' : 'स्मार्ट होम सेटअप और IoT इंस्टॉलेशन',
          available: 8,
          rating: 4.9,
          responseTime: '< 1 hr',
          experience: '8 years'
        },
        {
          name: language === 'en' ? 'Appliance Repair Technician' : 'उपकरण मरम्मत तकनीशियन',
          icon: Lightbulb,
          price: '₹399',
          description: language === 'en' ? 'AC, refrigerator, and appliance fixes' : 'AC, रेफ्रिजरेटर और उपकरण की मरम्मत',
          available: 15,
          rating: 4.7,
          responseTime: '< 45 min',
          experience: '5 years'
        }
      ],
      'विद्युत': [
        {
          name: 'इलेक्ट्रीशियन',
          icon: Zap,
          price: '₹299',
          description: 'वायरिंग, स्विच और विद्युत मरम्मत',
          available: 23,
          rating: 4.8,
          responseTime: '< 30 मिनट',
          experience: '6 वर्ष'
        },
        {
          name: 'होम ऑटोमेशन विशेषज्ञ',
          icon: Settings,
          price: '₹899',
          description: 'स्मार्ट होम सेटअप और IoT इंस्टॉलेशन',
          available: 8,
          rating: 4.9,
          responseTime: '< 1 घंटा',
          experience: '8 वर्ष'
        },
        {
          name: 'उपकरण मरम्मत तकनीशियन',
          icon: Lightbulb,
          price: '₹399',
          description: 'AC, रेफ्रिजरेटर और उपकरण की मरम्मत',
          available: 15,
          rating: 4.7,
          responseTime: '< 45 मिनट',
          experience: '5 वर्ष'
        }
      ],
      'Plumbing': [
        {
          name: language === 'en' ? 'Plumber' : 'प्लंबर',
          icon: Wrench,
          price: '₹249',
          description: language === 'en' ? 'Pipe repairs, leaks, and installations' : 'पाइप की मरम्मत, रिसाव और इंस्टॉलेशन',
          available: 31,
          rating: 4.6,
          responseTime: '< 25 min',
          experience: '7 years'
        },
        {
          name: language === 'en' ? 'Bathroom Specialist' : 'बाथरूम विशेषज्ञ',
          icon: Droplets,
          price: '₹599',
          description: language === 'en' ? 'Toilet, basin, and shower fitting' : 'शौचालय, बेसिन और शावर फिटिंग',
          available: 19,
          rating: 4.8,
          responseTime: '< 1 hr',
          experience: '9 years'
        },
        {
          name: language === 'en' ? 'Water Tank Cleaner' : 'पानी की टंकी सफाई',
          icon: Droplets,
          price: '₹799',
          description: language === 'en' ? 'Tank cleaning and water system maintenance' : 'टंकी सफाई और पानी सिस्टम रखरखाव',
          available: 12,
          rating: 4.7,
          responseTime: '< 2 hrs',
          experience: '4 years'
        }
      ],
      'प्लंबिंग': [
        {
          name: 'प्लंबर',
          icon: Wrench,
          price: '₹249',
          description: 'पाइप की मरम्मत, रिसाव और इंस्टॉलेशन',
          available: 31,
          rating: 4.6,
          responseTime: '< 25 मिनट',
          experience: '7 वर्ष'
        },
        {
          name: 'बाथरूम विशेषज्ञ',
          icon: Droplets,
          price: '₹599',
          description: 'शौचालय, बेसिन और शावर फिटिंग',
          available: 19,
          rating: 4.8,
          responseTime: '< 1 घंटा',
          experience: '9 वर्ष'
        },
        {
          name: 'पानी की टंकी सफाई',
          icon: Droplets,
          price: '₹799',
          description: 'टंकी सफाई और पानी सिस्टम रखरखाव',
          available: 12,
          rating: 4.7,
          responseTime: '< 2 घंटे',
          experience: '4 वर्ष'
        }
      ],
      'Cleaning': [
        {
          name: language === 'en' ? 'House Cleaner' : 'घर की सफाई',
          icon: Hammer,
          price: '₹399',
          description: language === 'en' ? 'Deep cleaning and regular maintenance' : 'गहरी सफाई और नियमित रखरखाव',
          available: 45,
          rating: 4.5,
          responseTime: '< 2 hrs',
          experience: '3 years'
        },
        {
          name: language === 'en' ? 'Carpet Cleaner' : 'कार्पेट सफाई',
          icon: Settings,
          price: '₹599',
          description: language === 'en' ? 'Professional carpet and upholstery cleaning' : 'पेशेवर कार्पेट और असबाब की सफाई',
          available: 18,
          rating: 4.7,
          responseTime: '< 3 hrs',
          experience: '5 years'
        }
      ],
      'सफाई': [
        {
          name: 'घर की सफाई',
          icon: Hammer,
          price: '₹399',
          description: 'गहरी सफाई और नियमित रखरखाव',
          available: 45,
          rating: 4.5,
          responseTime: '< 2 घंटे',
          experience: '3 वर्ष'
        },
        {
          name: 'कार्पेट सफाई',
          icon: Settings,
          price: '₹599',
          description: 'पेशेवर कार्पेट और असबाब की सफाई',
          available: 18,
          rating: 4.7,
          responseTime: '< 3 घंटे',
          experience: '5 वर्ष'
        }
      ]
    };

    return professionalMap[category] || professionalMap['Electrical'];
  };

  const professionals = getProfessionals(category);

  const handleProfessionalClick = (professional: any) => {
    setSelectedProfessional(professional.name);
    onProfessionalSelect(professional.name);
  };

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

        {/* Category Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{category}</h1>
          <p className="text-gray-600">{t.selectProfessional}</p>
        </div>

        {/* Professionals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionals.map((professional, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group"
              onClick={() => handleProfessionalClick(professional)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                  <professional.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-indigo-600">{professional.price}</p>
                  <p className="text-xs text-gray-500">{t.startingFrom}</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">{professional.name}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{professional.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-500">
                    <User className="w-4 h-4 mr-1" />
                    <span>{professional.available} {t.professionals}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-medium text-gray-900">{professional.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{professional.responseTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    <span>{professional.experience}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors group-hover:bg-indigo-700">
                <MapPin className="w-4 h-4 inline mr-2" />
                {t.findNearby}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCategory;