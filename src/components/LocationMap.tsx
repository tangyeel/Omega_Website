import React from 'react';
import { MapPin, ExternalLink, Navigation } from 'lucide-react';

function LocationMap() {
  const locationUrl = "https://www.google.com/maps?sca_esv=67db8545f6bda9c4&sxsrf=AE3TifMIO2FQEAgzhtk1DepeDf7K4Qo06A:1757095625260&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiMG9tZWdhIGluc3RpdHV0ZSB2aWRoeWFkaGFyIG5hZ2FyIGphaXB1ciBsb2NhdGlvbjIFECEYoAEyBRAhGKABSMQ1UIABWJo0cAF4AJABAJgBygKgAeIfqgEGMi0xMi4zuAEDyAEA-AEBmAIQoAKvIMICDhAuGIAEGLADGMcBGK8BwgIHEAAYsAMYHsICCRAAGLADGAgYHsICDhAAGIAEGLADGIYDGIoFwgIIEAAYsAMY7wXCAgsQABiABBiwAxiiBMICCxAAGLADGKIEGIkFwgIGEAAYFhgewgILEAAYgAQYhgMYigXCAgUQABjvBcICCBAAGIAEGKIEwgIIEAAYogQYiQWYAwCIBgGQBgmSBwgxLjAuMTIuM6AHvDayBwYyLTEyLjO4B6cgwgcFMC43LjnIBzk&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KUGeGya3s205MY1otU-SWOAn&daddr=office+140,+Mall+Rd,+near+Sec-1,+Sector-3,+Shankar+Colony,+Naya+Khera,+Vidyadhar+Nagar,+Jaipur,+Rajasthan+302039";

  const handleLocationClick = () => {
    window.open(locationUrl, '_blank');
  };

  return (
    <section className="py-16 bg-gray-200 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">Visit Our Location</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Find us at our premium coaching center in Vidyadhar Nagar, Jaipur
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Location Details */}
          <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-neumorphic dark:shadow-neumorphic-dark p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Omega Coaching Center</h3>
            </div>

            <div className="space-y-4 mb-8">
              <div className="text-gray-700 dark:text-gray-300">
                <p className="font-semibold mb-2">Address:</p>
                <p className="leading-relaxed">
                  Office 140, Mall Road, near Sec-1,<br />
                  Sector-3, Shankar Colony, Naya Khera,<br />
                  Vidyadhar Nagar, Jaipur, Rajasthan 302039
                </p>
              </div>

              <div className="text-gray-700 dark:text-gray-300">
                <p className="font-semibold mb-2">Landmarks:</p>
                <ul className="space-y-1">
                  <li>• Near Sector-1, Vidyadhar Nagar</li>
                  <li>• Close to Mall Road</li>
                  <li>• Shankar Colony area</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleLocationClick}
                className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-200 dark:bg-gray-800 text-red-600 font-medium rounded-xl shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-pressed dark:hover:shadow-neumorphic-dark-pressed active:shadow-neumorphic-inset dark:active:shadow-neumorphic-dark-inset transition-all duration-200"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Open in Google Maps
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>

              <button
                onClick={() => {
                  if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(() => {
                      window.open(`https://www.google.com/maps/dir//office+140,+Mall+Rd,+near+Sec-1,+Sector-3,+Shankar+Colony,+Naya+Khera,+Vidyadhar+Nagar,+Jaipur,+Rajasthan+302039`, '_blank');
                    });
                  } else {
                    handleLocationClick();
                  }
                }}
                className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-200 dark:bg-gray-800 text-blue-600 font-medium rounded-xl shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-pressed dark:hover:shadow-neumorphic-dark-pressed active:shadow-neumorphic-inset dark:active:shadow-neumorphic-dark-inset transition-all duration-200"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </button>
            </div>
          </div>

          {/* Map Preview */}
          <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-neumorphic-deep dark:shadow-neumorphic-dark-deep p-6">
            <div className="relative overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.8234567890123!2d75.7849!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6a7b3861e29%3A0x27e0825f4bb56d8d!2sVidyadhar%20Nagar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Omega Coaching Location"
              ></iframe>
              
              {/* Overlay for click to open */}
              <div 
                onClick={handleLocationClick}
                className="absolute inset-0 bg-transparent cursor-pointer flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="bg-gray-200/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-neumorphic dark:shadow-neumorphic-dark">
                  <span className="text-gray-800 dark:text-gray-200 font-medium">Click to open in Google Maps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationMap;