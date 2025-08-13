import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CreditCard, 
  Smartphone, 
  Wallet, 
  Shield, 
  Clock,
  CheckCircle,
  AlertCircle,
  Lock
} from 'lucide-react';

interface PaymentScreenProps {
  onNavigate: (screen: string) => void;
  language: 'en' | 'hi';
}

const PaymentScreen: React.FC<PaymentScreenProps> = ({ onNavigate, language }) => {
  const [selectedPayment, setSelectedPayment] = useState<'upi' | 'wallet' | 'card'>('upi');
  const [upiId, setUpiId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const translations = {
    en: {
      back: 'Back',
      booking: 'Booking Summary',
      service: 'Service',
      provider: 'Provider',
      date: 'Date & Time',
      location: 'Location',
      paymentMethod: 'Payment Method',
      upiPayment: 'UPI Payment',
      walletPayment: 'Wallet Payment',
      cardPayment: 'Card Payment',
      upiPlaceholder: 'Enter UPI ID (e.g., user@paytm)',
      walletBalance: 'Available Balance',
      total: 'Total Amount',
      taxes: 'Taxes & Fees',
      securePayment: 'Secure Payment',
      payNow: 'Pay Now',
      processing: 'Processing Payment...',
      paymentSuccess: 'Payment Successful!',
      bookingConfirmed: 'Your booking has been confirmed',
      viewBooking: 'View Booking Details',
      homeReturn: 'Return to Home'
    },
    hi: {
      back: 'वापस',
      booking: 'बुकिंग सारांश',
      service: 'सेवा',
      provider: 'प्रदाता',
      date: 'दिनांक और समय',
      location: 'स्थान',
      paymentMethod: 'भुगतान विधि',
      upiPayment: 'UPI भुगतान',
      walletPayment: 'वॉलेट भुगतान',
      cardPayment: 'कार्ड भुगतान',
      upiPlaceholder: 'UPI ID दर्ज करें (जैसे, user@paytm)',
      walletBalance: 'उपलब्ध शेष राशि',
      total: 'कुल राशि',
      taxes: 'कर और शुल्क',
      securePayment: 'सुरक्षित भुगतान',
      payNow: 'अभी भुगतान करें',
      processing: 'भुगतान प्रक्रिया में...',
      paymentSuccess: 'भुगतान सफल!',
      bookingConfirmed: 'आपकी बुकिंग की पुष्टि हो गई है',
      viewBooking: 'बुकिंग विवरण देखें',
      homeReturn: 'होम पर वापस जाएं'
    }
  };

  const t = translations[language];

  const booking = {
    service: language === 'en' ? 'Basic Electrical Repair' : 'बुनियादी विद्युत मरम्मत',
    provider: 'Ravi Kumar',
    date: language === 'en' ? 'Today, 3:00 PM' : 'आज, दोपहर 3:00 बजे',
    location: language === 'en' ? 'A-123, Green Park, Delhi' : 'ए-123, ग्रीन पार्क, दिल्ली',
    baseAmount: 299,
    taxes: 59,
    total: 358
  };

  const walletBalance = 1250;

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentComplete(true);
    }, 3000);
  };

  if (paymentComplete) {
    return (
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{t.paymentSuccess}</h1>
          <p className="text-gray-600 mb-6">{t.bookingConfirmed}</p>
          
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Booking ID</span>
              <span className="text-sm font-medium text-gray-900">#BK123456</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{t.total}</span>
              <span className="text-sm font-medium text-gray-900">₹{booking.total}</span>
            </div>
          </div>

          <div className="space-y-3">
            <button 
              onClick={() => onNavigate('review')}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors"
            >
              {t.viewBooking}
            </button>
            <button 
              onClick={() => onNavigate('home')}
              className="w-full border border-gray-200 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              {t.homeReturn}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={() => onNavigate('provider')}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t.back}
        </button>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Booking Summary */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">{t.booking}</h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">{t.service}</p>
                <p className="font-medium text-gray-900">{booking.service}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 mb-1">{t.provider}</p>
                <p className="font-medium text-gray-900">{booking.provider}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 mb-1">{t.date}</p>
                <p className="font-medium text-gray-900">{booking.date}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 mb-1">{t.location}</p>
                <p className="font-medium text-gray-900">{booking.location}</p>
              </div>
            </div>

            <hr className="my-6" />

            {/* Pricing Breakdown */}
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">{t.service}</span>
                <span className="font-medium">₹{booking.baseAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t.taxes}</span>
                <span className="font-medium">₹{booking.taxes}</span>
              </div>
              <hr />
              <div className="flex justify-between text-lg font-semibold">
                <span>{t.total}</span>
                <span className="text-indigo-600">₹{booking.total}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">{t.paymentMethod}</h2>

            {/* Payment Options */}
            <div className="space-y-4 mb-6">
              {/* UPI Payment */}
              <div 
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedPayment === 'upi' 
                    ? 'border-indigo-500 bg-indigo-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedPayment('upi')}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{t.upiPayment}</h3>
                    <p className="text-sm text-gray-500">PhonePe, Paytm, GPay, etc.</p>
                  </div>
                </div>
              </div>

              {/* Wallet Payment */}
              <div 
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedPayment === 'wallet' 
                    ? 'border-indigo-500 bg-indigo-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedPayment('wallet')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center mr-4">
                      <Wallet className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{t.walletPayment}</h3>
                      <p className="text-sm text-gray-500">{t.walletBalance}: ₹{walletBalance}</p>
                    </div>
                  </div>
                  {walletBalance >= booking.total && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                  {walletBalance < booking.total && (
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  )}
                </div>
              </div>

              {/* Card Payment */}
              <div 
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedPayment === 'card' 
                    ? 'border-indigo-500 bg-indigo-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedPayment('card')}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <CreditCard className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{t.cardPayment}</h3>
                    <p className="text-sm text-gray-500">Credit/Debit Card</p>
                  </div>
                </div>
              </div>
            </div>

            {/* UPI ID Input */}
            {selectedPayment === 'upi' && (
              <div className="mb-6">
                <input
                  type="text"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  placeholder={t.upiPlaceholder}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            )}

            {/* Insufficient Balance Warning */}
            {selectedPayment === 'wallet' && walletBalance < booking.total && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-red-800">
                      {language === 'en' ? 'Insufficient Balance' : 'अपर्याप्त शेष राशि'}
                    </p>
                    <p className="text-sm text-red-600 mt-1">
                      {language === 'en' 
                        ? `You need ₹${booking.total - walletBalance} more in your wallet.`
                        : `आपको अपने वॉलेट में ₹${booking.total - walletBalance} और चाहिए।`}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Security Notice */}
            <div className="mb-6 p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-green-500 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{t.securePayment}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {language === 'en' 
                      ? 'Your payment information is encrypted and secure'
                      : 'आपकी भुगतान जानकारी एन्क्रिप्टेड और सुरक्षित है'}
                  </p>
                </div>
                <Lock className="w-4 h-4 text-gray-400 ml-auto" />
              </div>
            </div>

            {/* Pay Button */}
            <button
              onClick={handlePayment}
              disabled={
                isProcessing || 
                (selectedPayment === 'upi' && !upiId.trim()) ||
                (selectedPayment === 'wallet' && walletBalance < booking.total)
              }
              className="w-full bg-indigo-600 text-white py-4 rounded-xl font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center"
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  {t.processing}
                </>
              ) : (
                <>
                  {t.payNow} ₹{booking.total}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentScreen;