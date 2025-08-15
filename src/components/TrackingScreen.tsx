import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock,
  User,
  Star,
  Shield,
  AlertTriangle,
  Navigation,
  CheckCircle,
  Car,
  Timer,
  SOS
} from 'lucide-react';

interface TrackingScreenProps {
  onNavigate: (screen: string) => void;
  language: 'en' | 'hi';
}

const TrackingScreen: React.FC<TrackingScreenProps> = ({ onNavigate, language }) => {
  const [workerStatus, setWorkerStatus] = useState<'assigned' | 'on_way' | 'arrived' | 'working' | 'completed'>('assigned');
  const [estimatedTime, setEstimatedTime] = useState(25);
  const [showSOSModal, setShowSOSModal] = useState(false);
  const [sosPressed, setSosPressed] = useState(false);

  const translations = {
    en: {
      back: 'Back',
      trackingWorker: 'Tracking Your Professional',
      bookingConfirmed: 'Booking Confirmed',
      workerAssigned: 'Professional Assigned',
      onTheWay: 'On the Way',
      arrived: 'Arrived at Location',
      workInProgress: 'Work in Progress',
      workCompleted: 'Work Completed',
      estimatedArrival: 'Estimated Arrival',
      minutes: 'minutes',
      callWorker: 'Call Professional',
      messageWorker: 'Message',
      sosButton: 'SOS Emergency',
      sosTitle: 'Emergency Alert',
      sosMessage: 'Are you sure you want to send an emergency alert? This will notify local authorities and your emergency contacts.',
      sosConfirm: 'Send Alert',
      sosCancel: 'Cancel',
      sosSuccess: 'Emergency alert sent successfully. Help is on the way.',
      workerDetails: 'Professional Details',
      serviceDetails: 'Service Details',
      location: 'Your Location',
      paymentPending: 'Payment Pending',
      rateService: 'Rate Service'
    },
    hi: {
      back: 'वापस',
      trackingWorker: 'अपने पेशेवर को ट्रैक करें',
      bookingConfirmed: 'बुकिंग की पुष्टि',
      workerAssigned: 'पेशेवर नियुक्त',
      onTheWay: 'रास्ते में',
      arrived: 'स्थान पर पहुंचे',
      workInProgress: 'कार्य प्रगति में',
      workCompleted: 'कार्य पूर्ण',
      estimatedArrival: 'अनुमानित आगमन',
      minutes: 'मिनट',
      callWorker: 'पेशेवर को कॉल करें',
      messageWorker: 'संदेश',
      sosButton: 'SOS आपातकाल',
      sosTitle: 'आपातकालीन अलर्ट',
      sosMessage: 'क्या आप वाकई आपातकालीन अलर्ट भेजना चाहते हैं? यह स्थानीय अधिकारियों और आपके आपातकालीन संपर्कों को सूचित करेगा।',
      sosConfirm: 'अलर्ट भेजें',
      sosCancel: 'रद्द करें',
      sosSuccess: 'आपातकालीन अलर्ट सफलतापूर्वक भेजा गया। मदद आ रही है।',
      workerDetails: 'पेशेवर विवरण',
      serviceDetails: 'सेवा विवरण',
      location: 'आपका स्थान',
      paymentPending: 'भुगतान लंबित',
      rateService: 'सेवा रेट करें'
    }
  };

  const t = translations[language];

  const worker = {
    name: 'Ravi Kumar',
    service: language === 'en' ? 'Expert Electrician' : 'विशेषज्ञ विद्युत तकनीशियन',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
    phone: '+91 98765 43210',
    vehicle: 'Bike - MH 12 AB 1234'
  };

  const booking = {
    id: 'BK123456',
    service: language === 'en' ? 'Basic Electrical Repair' : 'बुनियादी विद्युत मरम्मत',
    time: language === 'en' ? 'Today, 3:00 PM' : 'आज, दोपहर 3:00 बजे',
    location: language === 'en' ? 'A-123, Green Park, Delhi' : 'ए-123, ग्रीन पार्क, दिल्ली',
    amount: '₹358'
  };

  const statusSteps = [
    { key: 'assigned', label: t.workerAssigned, icon: CheckCircle },
    { key: 'on_way', label: t.onTheWay, icon: Car },
    { key: 'arrived', label: t.arrived, icon: MapPin },
    { key: 'working', label: t.workInProgress, icon: Timer },
    { key: 'completed', label: t.workCompleted, icon: CheckCircle }
  ];

  // Simulate worker progress
  useEffect(() => {
    const progressTimer = setInterval(() => {
      setWorkerStatus(current => {
        switch (current) {
          case 'assigned':
            setEstimatedTime(20);
            return 'on_way';
          case 'on_way':
            setEstimatedTime(5);
            return 'arrived';
          case 'arrived':
            setEstimatedTime(0);
            return 'working';
          case 'working':
            return 'completed';
          default:
            return current;
        }
      });
    }, 8000); // Change status every 8 seconds for demo

    return () => clearInterval(progressTimer);
  }, []);

  const handleSOSPress = () => {
    setSosPressed(true);
    setShowSOSModal(false);
    // Simulate emergency alert
    setTimeout(() => {
      setSosPressed(false);
    }, 3000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'assigned': return 'bg-blue-500';
      case 'on_way': return 'bg-yellow-500';
      case 'arrived': return 'bg-green-500';
      case 'working': return 'bg-purple-500';
      case 'completed': return 'bg-green-600';
      default: return 'bg-gray-400';
    }
  };

  const getCurrentStepIndex = () => {
    return statusSteps.findIndex(step => step.key === workerStatus);
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
          
          {/* SOS Button */}
          <button
            onClick={() => setShowSOSModal(true)}
            className={`flex items-center px-4 py-2 rounded-full font-medium transition-all ${
              sosPressed 
                ? 'bg-green-500 text-white' 
                : 'bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl'
            }`}
          >
            {sosPressed ? (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                {t.sosSuccess}
              </>
            ) : (
              <>
                <AlertTriangle className="w-4 h-4 mr-2" />
                {t.sosButton}
              </>
            )}
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">{t.trackingWorker}</h1>
              
              {/* Live Map */}
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl h-80 mb-6 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Navigation className="w-12 h-12 text-indigo-600 mx-auto mb-2 animate-pulse" />
                    <p className="text-gray-600 font-medium">Live Tracking</p>
                    <p className="text-sm text-gray-500">Real-time location updates</p>
                  </div>
                </div>
                
                {/* Animated worker location */}
                <div className="absolute top-1/3 left-1/2 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <User className="w-6 h-6 text-white" />
                </div>
                
                {/* Your location */}
                <div className="absolute bottom-1/3 right-1/3 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                
                {/* Route line */}
                <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-indigo-400 transform -rotate-45 origin-left"></div>
              </div>

              {/* Status Timeline */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Progress</h3>
                {statusSteps.map((step, index) => {
                  const isActive = index <= getCurrentStepIndex();
                  const isCurrent = step.key === workerStatus;
                  
                  return (
                    <div key={step.key} className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isActive ? getStatusColor(step.key) : 'bg-gray-200'
                      } ${isCurrent ? 'ring-4 ring-indigo-200' : ''}`}>
                        <step.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                          {step.label}
                        </p>
                        {isCurrent && estimatedTime > 0 && (
                          <p className="text-sm text-indigo-600">
                            {t.estimatedArrival}: {estimatedTime} {t.minutes}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Details Sidebar */}
          <div className="space-y-6">
            {/* Worker Details */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.workerDetails}</h3>
              
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={worker.image}
                  alt={worker.name}
                  className="w-16 h-16 rounded-2xl object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{worker.name}</h4>
                  <p className="text-sm text-gray-600">{worker.service}</p>
                  <div className="flex items-center mt-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium">{worker.rating}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Car className="w-4 h-4 mr-2" />
                  {worker.vehicle}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 mr-2" />
                  Verified Professional
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <button className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors">
                  <Phone className="w-4 h-4 inline mr-2" />
                  {t.callWorker}
                </button>
                <button className="px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  <MessageCircle className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Booking Details */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.serviceDetails}</h3>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Booking ID</p>
                  <p className="font-medium text-gray-900">{booking.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Service</p>
                  <p className="font-medium text-gray-900">{booking.service}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Time</p>
                  <p className="font-medium text-gray-900">{booking.time}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t.location}</p>
                  <p className="font-medium text-gray-900">{booking.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Amount</p>
                  <p className="font-medium text-gray-900">{booking.amount}</p>
                </div>
              </div>

              {workerStatus === 'completed' && (
                <button 
                  onClick={() => onNavigate('review')}
                  className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition-colors"
                >
                  {t.rateService}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* SOS Modal */}
      {showSOSModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{t.sosTitle}</h2>
              <p className="text-gray-600">{t.sosMessage}</p>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setShowSOSModal(false)}
                className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
              >
                {t.sosCancel}
              </button>
              <button
                onClick={handleSOSPress}
                className="flex-1 px-4 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-medium"
              >
                {t.sosConfirm}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackingScreen;