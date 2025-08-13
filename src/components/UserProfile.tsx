import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Edit, 
  Star, 
  Wallet, 
  Clock, 
  Settings, 
  Shield, 
  Bell,
  CreditCard,
  MapPin,
  Phone,
  Mail,
  Camera,
  Plus,
  CheckCircle,
  History
} from 'lucide-react';

interface UserProfileProps {
  onNavigate: (screen: string) => void;
  language: 'en' | 'hi';
}

const UserProfile: React.FC<UserProfileProps> = ({ onNavigate, language }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'wallet' | 'history' | 'settings'>('profile');

  const translations = {
    en: {
      back: 'Back',
      editProfile: 'Edit Profile',
      profile: 'Profile',
      wallet: 'Wallet',
      history: 'History',
      settings: 'Settings',
      verified: 'Verified User',
      memberSince: 'Member since',
      totalBookings: 'Total Bookings',
      avgRating: 'Average Rating',
      walletBalance: 'Wallet Balance',
      addMoney: 'Add Money',
      recentTransactions: 'Recent Transactions',
      bookingHistory: 'Booking History',
      viewDetails: 'View Details',
      completed: 'Completed',
      pending: 'Pending',
      cancelled: 'Cancelled',
      notifications: 'Notifications',
      language: 'Language',
      privacy: 'Privacy & Security',
      help: 'Help & Support',
      about: 'About',
      logout: 'Logout'
    },
    hi: {
      back: 'वापस',
      editProfile: 'प्रोफाइल संपादित करें',
      profile: 'प्रोफाइल',
      wallet: 'वॉलेट',
      history: 'इतिहास',
      settings: 'सेटिंग्स',
      verified: 'सत्यापित उपयोगकर्ता',
      memberSince: 'सदस्य बने',
      totalBookings: 'कुल बुकिंग',
      avgRating: 'औसत रेटिंग',
      walletBalance: 'वॉलेट बैलेंस',
      addMoney: 'पैसे जोड़ें',
      recentTransactions: 'हाल की लेन-देन',
      bookingHistory: 'बुकिंग इतिहास',
      viewDetails: 'विवरण देखें',
      completed: 'पूर्ण',
      pending: 'लंबित',
      cancelled: 'रद्द',
      notifications: 'अधिसूचनाएं',
      language: 'भाषा',
      privacy: 'गोपनीयता और सुरक्षा',
      help: 'सहायता और समर्थन',
      about: 'के बारे में',
      logout: 'लॉगआउट'
    }
  };

  const t = translations[language];

  const user = {
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    phone: '+91 98765 43210',
    location: 'Green Park, Delhi',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
    memberSince: 'March 2023',
    totalBookings: 24,
    avgRating: 4.8,
    walletBalance: 1250,
    verified: true
  };

  const transactions = [
    {
      id: 1,
      type: 'debit',
      amount: 358,
      description: language === 'en' ? 'Electrical Repair - Ravi Kumar' : 'विद्युत मरम्मत - रवि कुमार',
      date: '2 hours ago',
      status: 'completed'
    },
    {
      id: 2,
      type: 'credit',
      amount: 500,
      description: language === 'en' ? 'Added to wallet' : 'वॉलेट में जोड़ा गया',
      date: '1 day ago',
      status: 'completed'
    },
    {
      id: 3,
      type: 'debit',
      amount: 750,
      description: language === 'en' ? 'House Cleaning - Priya Singh' : 'घर की सफाई - प्रिया सिंह',
      date: '3 days ago',
      status: 'completed'
    }
  ];

  const bookings = [
    {
      id: 1,
      service: language === 'en' ? 'Electrical Repair' : 'विद्युत मरम्मत',
      provider: 'Ravi Kumar',
      date: 'Today',
      status: 'completed',
      amount: 358,
      rating: 5
    },
    {
      id: 2,
      service: language === 'en' ? 'House Cleaning' : 'घर की सफाई',
      provider: 'Priya Singh',
      date: '3 days ago',
      status: 'completed',
      amount: 750,
      rating: 4
    },
    {
      id: 3,
      service: language === 'en' ? 'Plumbing' : 'प्लंबिंग',
      provider: 'Amit Singh',
      date: '1 week ago',
      status: 'completed',
      amount: 500,
      rating: 5
    }
  ];

  const tabs = [
    { id: 'profile', label: t.profile, icon: Shield },
    { id: 'wallet', label: t.wallet, icon: Wallet },
    { id: 'history', label: t.history, icon: Clock },
    { id: 'settings', label: t.settings, icon: Settings }
  ];

  const renderProfileTab = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-start space-x-6">
          <div className="relative">
            <img
              src={user.image}
              alt={user.name}
              className="w-24 h-24 rounded-2xl object-cover"
            />
            <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white hover:bg-indigo-700 transition-colors">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              {user.verified && (
                <div className="flex items-center px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  {t.verified}
                </div>
              )}
            </div>
            
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                {user.email}
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                {user.phone}
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {user.location}
              </div>
            </div>
          </div>
          
          <button className="px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
            <Edit className="w-4 h-4 mr-2 inline" />
            {t.editProfile}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
          <p className="text-2xl font-bold text-gray-900 mb-1">{user.totalBookings}</p>
          <p className="text-sm text-gray-600">{t.totalBookings}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
          <div className="flex items-center justify-center mb-1">
            <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
            <p className="text-2xl font-bold text-gray-900">{user.avgRating}</p>
          </div>
          <p className="text-sm text-gray-600">{t.avgRating}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
          <p className="text-2xl font-bold text-gray-900 mb-1">2023</p>
          <p className="text-sm text-gray-600">{t.memberSince}</p>
        </div>
      </div>
    </div>
  );

  const renderWalletTab = () => (
    <div className="space-y-6">
      {/* Balance Card */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">{t.walletBalance}</h2>
          <Wallet className="w-6 h-6" />
        </div>
        <p className="text-3xl font-bold mb-4">₹{user.walletBalance}</p>
        <button className="bg-white text-indigo-600 px-6 py-2 rounded-xl font-medium hover:bg-gray-50 transition-colors">
          <Plus className="w-4 h-4 mr-2 inline" />
          {t.addMoney}
        </button>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.recentTransactions}</h3>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {transaction.type === 'credit' ? (
                    <Plus className="w-5 h-5 text-green-600" />
                  ) : (
                    <CreditCard className="w-5 h-5 text-red-600" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{transaction.description}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              </div>
              <p className={`font-semibold ${
                transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderHistoryTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.bookingHistory}</h3>
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="border border-gray-100 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">{booking.service}</h4>
                  <p className="text-sm text-gray-600">{booking.provider}</p>
                  <p className="text-sm text-gray-500">{booking.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900 mb-1">₹{booking.amount}</p>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    booking.status === 'completed' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {booking.status === 'completed' ? t.completed : t.pending}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${
                        i < booking.rating ? 'text-yellow-400 fill-current' : 'text-gray-200'
                      }`} 
                    />
                  ))}
                </div>
                <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                  {t.viewDetails}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSettingsTab = () => (
    <div className="space-y-4">
      {[
        { icon: Bell, label: t.notifications },
        { icon: Settings, label: t.language },
        { icon: Shield, label: t.privacy },
        { icon: Phone, label: t.help },
        { icon: Settings, label: t.about }
      ].map((item, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <item.icon className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-900">{item.label}</span>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      ))}
      
      <button className="w-full bg-red-50 text-red-600 py-3 rounded-2xl font-medium hover:bg-red-100 transition-colors">
        {t.logout}
      </button>
    </div>
  );

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

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center space-x-3 px-4 py-4 rounded-2xl text-left transition-colors ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 border-2 border-indigo-200 shadow-sm'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-semibold">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {activeTab === 'profile' && renderProfileTab()}
          {activeTab === 'wallet' && renderWalletTab()}
          {activeTab === 'history' && renderHistoryTab()}
          {activeTab === 'settings' && renderSettingsTab()}
        </div>
      </div>
      </div>
    </div>
  );
};

export default UserProfile;