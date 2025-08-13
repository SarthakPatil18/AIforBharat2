import React, { useState } from 'react';
import { ArrowLeft, Star, Camera, X, Upload, MessageSquare } from 'lucide-react';

interface ReviewScreenProps {
  onNavigate: (screen: string) => void;
  language: 'en' | 'hi';
}

const ReviewScreen: React.FC<ReviewScreenProps> = ({ onNavigate, language }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState('');
  const [photos, setPhotos] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const translations = {
    en: {
      back: 'Back',
      rateService: 'Rate Your Service',
      serviceCompleted: 'Service Completed Successfully',
      provider: 'Service Provider',
      ratingPrompt: 'How was your experience?',
      tapToRate: 'Tap to rate',
      excellent: 'Excellent',
      good: 'Good',
      average: 'Average',
      belowAvg: 'Below Average',
      poor: 'Poor',
      writeReview: 'Write a Review (Optional)',
      reviewPlaceholder: 'Share your experience to help others...',
      addPhotos: 'Add Photos (Optional)',
      photoHint: 'Show the work completed',
      submitReview: 'Submit Review',
      submitting: 'Submitting...',
      thankYou: 'Thank You!',
      reviewSubmitted: 'Your review has been submitted successfully',
      returnHome: 'Return to Home',
      bookAgain: 'Book Again'
    },
    hi: {
      back: 'वापस',
      rateService: 'अपनी सेवा को रेट करें',
      serviceCompleted: 'सेवा सफलतापूर्वक पूरी हुई',
      provider: 'सेवा प्रदाता',
      ratingPrompt: 'आपका अनुभव कैसा रहा?',
      tapToRate: 'रेट करने के लिए टैप करें',
      excellent: 'उत्कृष्ट',
      good: 'अच्छा',
      average: 'औसत',
      belowAvg: 'औसत से कम',
      poor: 'खराब',
      writeReview: 'समीक्षा लिखें (वैकल्पिक)',
      reviewPlaceholder: 'दूसरों की मदद के लिए अपना अनुभव साझा करें...',
      addPhotos: 'फोटो जोड़ें (वैकल्पिक)',
      photoHint: 'पूरा किया गया काम दिखाएं',
      submitReview: 'समीक्षा सबमिट करें',
      submitting: 'सबमिट हो रहा है...',
      thankYou: 'धन्यवाद!',
      reviewSubmitted: 'आपकी समीक्षा सफलतापूर्वक सबमिट हो गई है',
      returnHome: 'होम पर वापस जाएं',
      bookAgain: 'दोबारा बुक करें'
    }
  };

  const t = translations[language];

  const ratingLabels = [
    '', t.poor, t.belowAvg, t.average, t.good, t.excellent
  ];

  const provider = {
    name: 'Ravi Kumar',
    service: language === 'en' ? 'Basic Electrical Repair' : 'बुनियादी विद्युत मरम्मत',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face'
  };

  const handlePhotoUpload = () => {
    // Simulate photo upload
    const demoPhotos = [
      'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=300&h=200',
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300&h=200'
    ];
    setPhotos([...photos, demoPhotos[photos.length % demoPhotos.length]]);
  };

  const removePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (rating === 0) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{t.thankYou}</h1>
          <p className="text-gray-600 mb-6">{t.reviewSubmitted}</p>
          
          <div className="space-y-3">
            <button 
              onClick={() => onNavigate('provider')}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors"
            >
              {t.bookAgain}
            </button>
            <button 
              onClick={() => onNavigate('home')}
              className="w-full border border-gray-200 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              {t.returnHome}
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
          onClick={() => onNavigate('payment')}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t.back}
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{t.serviceCompleted}</h1>
          <p className="text-gray-600">{t.rateService}</p>
        </div>

        {/* Provider Info */}
        <div className="flex items-center justify-center space-x-4 mb-8 p-4 bg-gray-50 rounded-xl">
          <img
            src={provider.image}
            alt={provider.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="text-center">
            <h3 className="font-medium text-gray-900">{provider.name}</h3>
            <p className="text-sm text-gray-600">{provider.service}</p>
          </div>
        </div>

        {/* Rating Section */}
        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">{t.ratingPrompt}</h2>
          
          <div className="flex justify-center space-x-2 mb-4">
            {Array.from({ length: 5 }).map((_, index) => {
              const starValue = index + 1;
              return (
                <button
                  key={index}
                  onClick={() => setRating(starValue)}
                  onMouseEnter={() => setHoverRating(starValue)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1 transition-transform hover:scale-110"
                >
                  <Star 
                    className={`w-10 h-10 transition-colors ${
                      starValue <= (hoverRating || rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {rating > 0 && (
            <p className="text-lg font-medium text-gray-900 mb-2">
              {ratingLabels[rating]}
            </p>
          )}
          
          {rating === 0 && (
            <p className="text-sm text-gray-500">{t.tapToRate}</p>
          )}
        </div>

        {/* Review Text */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            {t.writeReview}
          </label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder={t.reviewPlaceholder}
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
          />
        </div>

        {/* Photo Upload */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            {t.addPhotos}
          </label>
          <p className="text-sm text-gray-500 mb-4">{t.photoHint}</p>
          
          <div className="grid grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div key={index} className="relative aspect-square">
                <img
                  src={photo}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                />
                <button
                  onClick={() => removePhoto(index)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
            
            {photos.length < 3 && (
              <button
                onClick={handlePhotoUpload}
                className="aspect-square border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center hover:border-gray-400 transition-colors"
              >
                <div className="text-center">
                  <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">
                    {language === 'en' ? 'Add Photo' : 'फोटो जोड़ें'}
                  </p>
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={rating === 0 || isSubmitting}
          className="w-full bg-indigo-600 text-white py-4 rounded-xl font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              {t.submitting}
            </>
          ) : (
            t.submitReview
          )}
        </button>
      </div>
    </div>
  );
};

export default ReviewScreen;