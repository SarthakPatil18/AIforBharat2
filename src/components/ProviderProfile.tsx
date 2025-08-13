import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle,
  Shield,
  Award,
  CheckCircle,
  Users,
  Calendar,
  Zap,
  FileText
} from 'lucide-react';

interface ProviderProfileProps {
  onNavigate: (screen: string) => void;
  language: 'en' | 'hi';
}

const ProviderProfile: React.FC<ProviderProfileProps> = ({ onNavigate, language }) => {
  const [selectedService, setSelectedService] = useState(0);

  const translations = {
    en: {
      back: 'Back',
      bookNow: 'Book Now',
      callNow: 'Call Now',
      message: 'Message',
      about: 'About',
      services: 'Services & Pricing',
      reviews: 'Reviews',
      gallery: 'Work Gallery',
      experience: 'Experience',
      verified: 'Verified Professional',
      responseTime: 'Response Time',
      completedJobs: 'Completed Jobs',
      repeatCustomers: 'Repeat Customers',
      yearsExp: 'years experience',
      allReviews: 'See all reviews'
    },
    hi: {
      back: 'वापस',
      bookNow: 'अभी बुक करें',
      callNow: 'कॉल करें',
      message: 'संदेश',
      about: 'के बारे में',
      services: 'सेवाएं और मूल्य',
      reviews: 'समीक्षाएं',
      gallery: 'कार्य गैलरी',
      experience: 'अनुभव',
      verified: 'सत्यापित पेशेवर',
      responseTime: 'प्रतिक्रिया समय',
      completedJobs: 'पूर्ण कार्य',
      repeatCustomers: 'दोबारा ग्राहक',
      yearsExp: 'वर्ष अनुभव',
      allReviews: 'सभी समीक्षाएं देखें'
    }
  };

  const t = translations[language];

  const provider = {
    name: "Ravi Kumar",
    service: language === 'en' ? "Expert Electrician & Home Automation Specialist" : "विशेषज्ञ विद्युत तकनीशियन और होम ऑटोमेशन विशेषज्ञ",
    rating: 4.9,
    reviews: 156,
    distance: "0.8 km",
    experience: 8,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face",
    responseTime: language === 'en' ? "< 30 mins" : "< 30 मिनट",
    completedJobs: 342,
    repeatCustomers: "89%",
    verified: true,
    joinedDate: "March 2021",
    certifications: ["Licensed Electrician", "Home Automation Certified", "Safety Trained"],
    about: language === 'en' 
      ? "Professional electrician with 8+ years of experience specializing in residential and commercial electrical work. Expert in home automation, smart lighting, and energy-efficient solutions. Available for emergency services with guaranteed warranty on all work."
      : "8+ वर्षों के अनुभव के साथ पेशेवर विद्युत तकनीशियन जो आवासीय और व्यावसायिक विद्युत कार्य में विशेषज्ञ है। होम ऑटोमेशन, स्मार्ट लाइटिंग और ऊर्जा-कुशल समाधानों में विशेषज्ञ। सभी कार्यों पर गारंटी के साथ आपातकालीन सेवाओं के लिए उपलब्ध।"
  };

  const services = [
    {
      name: language === 'en' ? "Basic Electrical Repair" : "बुनियादी विद्युत मरम्मत",
      price: "₹299",
      duration: language === 'en' ? "1 hour" : "1 घंटा",
      description: language === 'en' ? "Switch, socket, and minor wiring issues" : "स्विच, सॉकेट और छोटी वायरिंग समस्याएं"
    },
    {
      name: language === 'en' ? "Smart Home Setup" : "स्मार्ट होम सेटअप",
      price: "₹1,299",
      duration: language === 'en' ? "2 hours" : "2 घंटे",
      description: language === 'en' ? "Smart switches, automated lighting, and IoT setup" : "स्मार्ट स्विच, स्वचालित प्रकाश व्यवस्था और IoT सेटअप"
    },
    {
      name: language === 'en' ? "Home Electrical Checkup" : "घर की विद्युत जांच",
      price: "₹899",
      duration: language === 'en' ? "3 hours" : "3 घंटे",
      description: language === 'en' ? "Complete electrical safety inspection" : "पूर्ण विद्युत सुरक्षा निरीक्षण"
    }
  ];

  const recentReviews = [
    {
      user: "Meera Patel",
      rating: 5,
      date: "2 days ago",
      comment: language === 'en' 
        ? "Excellent work! Ravi installed smart switches throughout my home and explained everything clearly. Very professional and punctual. The warranty documentation was a nice touch!"
        : "उत्कृष्ट कार्य! रवि ने मेरे पूरे घर में स्मार्ट स्विच लगाए और सब कुछ स्पष्ट रूप से समझाया। बहुत पेशेवर और समयबद्ध। वारंटी दस्तावेज़ एक अच्छा स्पर्श था!",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face"
    },
    {
      user: "Suresh Sharma",
      rating: 5,
      date: "5 days ago",
      comment: language === 'en' 
        ? "Fixed a complex wiring issue that other electricians couldn't solve. Ravi's expertise in home automation is impressive. Fair pricing and excellent follow-up service."
        : "एक जटिल वायरिंग समस्या को ठीक किया जिसे अन्य इलेक्ट्रीशियन हल नहीं कर सके। होम ऑटोमेशन में रवि की विशेषज्ञता प्रभावशाली है। उचित मूल्य और उत्कृष्ट फॉलो-अप सेवा।",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face"
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

      {/* Provider Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-8">
        <div className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
            <div className="relative">
              <img
                src={provider.image}
                alt={provider.name}
                className="w-32 h-32 lg:w-40 lg:h-40 rounded-3xl object-cover mx-auto lg:mx-0"
              />
              {provider.verified && (
                <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              )}
            </div>

            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-3">
                <h1 className="text-3xl font-bold text-gray-900 mr-3">{provider.name}</h1>
                {provider.verified && (
                  <div className="flex items-center px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-200">
                    <Shield className="w-4 h-4 mr-1" />
                    {t.verified}
                  </div>
                )}
              </div>
              <p className="text-xl text-gray-600 mb-4 leading-relaxed">{provider.service}</p>
              
              <div className="flex items-center justify-center lg:justify-start space-x-6 mb-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <span className="font-semibold text-gray-900">{provider.rating}</span>
                  <span className="text-gray-500 ml-1">({provider.reviews} {language === 'en' ? 'reviews' : 'समीक्षाएं'})</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{provider.distance}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4">
                {provider.certifications.map((cert, index) => (
                  <span key={index} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                    {cert}
                  </span>
                ))}
              </div>
              
              <p className="text-sm text-gray-500">
                {language === 'en' ? 'Member since' : 'सदस्य बने'} {provider.joinedDate}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-gray-100">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-10 h-10 bg-indigo-50 rounded-2xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-indigo-600" />
                </div>
              </div>
              <p className="text-lg font-bold text-gray-900">{provider.responseTime}</p>
              <p className="text-xs text-gray-500">{t.responseTime}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-10 h-10 bg-green-50 rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
              </div>
              <p className="text-lg font-bold text-gray-900">{provider.completedJobs}</p>
              <p className="text-xs text-gray-500">{t.completedJobs}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-10 h-10 bg-purple-50 rounded-2xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <p className="text-lg font-bold text-gray-900">{provider.repeatCustomers}</p>
              <p className="text-xs text-gray-500">{t.repeatCustomers}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-6 pb-6">
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => onNavigate('provider')}
              className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-4 rounded-2xl font-semibold hover:from-indigo-700 hover:to-purple-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5 inline mr-2" />
              {language === 'en' ? 'Book Service' : 'सेवा बुक करें'}
            </button>
            <button className="px-6 py-4 border-2 border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors">
              <Phone className="w-5 h-5 text-gray-600" />
            </button>
            <button className="px-6 py-4 border-2 border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors">
              <MessageCircle className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* About */}
          <section className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-indigo-50 rounded-2xl flex items-center justify-center mr-4">
                <FileText className="w-5 h-5 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{t.about}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">{provider.about}</p>
            <div className="flex items-center p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl">
              <Award className="w-6 h-6 text-indigo-600 mr-3" />
              <span className="text-lg font-semibold text-gray-900">{provider.experience} {t.yearsExp}</span>
            </div>
          </section>

          {/* Services & Pricing */}
          <section className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-green-50 rounded-2xl flex items-center justify-center mr-4">
                <Zap className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{t.services}</h2>
            </div>
            <div className="space-y-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all hover:shadow-md ${
                    selectedService === index 
                      ? 'border-indigo-500 bg-gradient-to-r from-indigo-50 to-purple-50 shadow-md' 
                      : 'border-gray-200 hover:border-indigo-300'
                  }`}
                  onClick={() => setSelectedService(index)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-gray-600 mb-3">{service.description}</p>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-indigo-600">{service.price}</p>
                      <p className="text-sm text-gray-500">starting from</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Recent Reviews */}
          <section className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{t.reviews}</h2>
            <div className="space-y-6">
              {recentReviews.map((review, index) => (
                <div key={index} className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
                  <div className="flex items-start space-x-3">
                    <img
                      src={review.avatar}
                      alt={review.user}
                      className="w-12 h-12 rounded-2xl object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900">{review.user}</h4>
                        <span className="text-xs text-gray-500">{review.date}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-200'}`} 
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 leading-relaxed">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button 
              className="w-full mt-6 text-indigo-600 hover:text-indigo-700 font-semibold transition-colors py-3 border border-indigo-200 rounded-2xl hover:bg-indigo-50"
            >
              {t.allReviews}
            </button>
          </section>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProviderProfile;