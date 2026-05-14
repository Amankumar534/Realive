import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ChevronRight, } from 'lucide-react';
import './Header.css';
import { Link } from 'react-router-dom';
import image1 from '../assets/images/image2.jpg';
import aboutImage from '../assets/images/aboutimage.jpg';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


// Main App Component
export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Basant Kumar',
      role: 'Patient',
      text: 'Realive is one of leading Chiropractic / Physiotherapy clinics in India 🇮🇳 they offer myriad categories of treatments which are diverse and uniquely tailored for patients seeking pain relief. We would highly recommend them if you\'re looking for ayurvedic treatments or Chiropractic / Physiotherapy treatments. They are pioneers in pain relief & treatments!',
      initial: 'B',
      avatar: null
    },
    {
      name: 'Adv. Hemant Kumar',
      role: 'Patient',
      text: 'The team at Realive helped me recover from a sports injury faster than I imagined. Their personalized approach and expertise made all the difference! I was back on the field in just 6 weeks.',
      initial: 'A',
      avatar: null
    },
    {
      name: 'Shusila Devi',
      role: 'Patient',
      text: 'After my knee surgery, I was worried about recovery. The physiotherapists here were incredible - professional, caring, and truly invested in my progress. They provided excellent post-operative care.',
      initial: 'S',
      avatar: null
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];
  const Google_MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;
  const PinPoint1 = { lat: 28.6054281, lng: 77.324546 };
  const PinPoint2 = { lat: 28.6479842, lng: 77.403986 };

  return (
    <div className="font-sans bg-white">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #F9F6F3 0%, #E8F5F4 100%)' }}>
        <div className="blob-shape w-96 h-96 bg-teal-600 top-10 right-10 animate-pulse"></div>
        <div className="blob-shape w-80 h-80 bg-orange-400 bottom-20 left-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight animate-slide-up">
                Your Journey to
                <span className="gradient-text block">Wellness Starts Here</span>
              </h1>
              <p className="text-xl text-gray-600 animate-slide-up delay-200">
                Expert physiotherapy care tailored to your unique needs. Experience healing, strength, and mobility restoration.
              </p>
              <div className="flex flex-wrap gap-4 animate-slide-up delay-300">
                <Link to="/appointment" className="px-8 py-4 bg-teal-700 text-white rounded-full font-semibold hover:bg-teal-800 transition-all transform hover:scale-105 shadow-lg">
                  Book Appointment
                </Link>
                <Link to="/services" className="px-8 py-4 border-2 border-teal-700 text-teal-700 rounded-full font-semibold hover:bg-teal-50 transition-all">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in delay-400">
              <img src={image1} alt='image1' className="w-full rounded-3xl shadow-2xl transform rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-teal-800">
                About Realive
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Founded in 2023, Realive has been at the forefront of delivering exceptional physiotherapy services to our community. Our mission is to restore movement, reduce pain, and enhance the quality of life for every patient who walks through our doors.
                </p>
                <p>
                  We combine evidence-based treatment techniques with compassionate care, ensuring each patient receives a personalized rehabilitation plan designed to meet their specific goals and needs.
                </p>
                <p>
                  Our state-of-the-art facility is equipped with the latest technology and therapeutic equipment, enabling us to provide comprehensive care across a wide range of conditions.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <p className="text-4xl font-bold text-teal-700">5+</p>
                  <p className="text-gray-600 mt-2">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-teal-700">500+</p>
                  <p className="text-gray-600 mt-2">Happy Patients</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-teal-700">95%</p>
                  <p className="text-gray-600 mt-2">Success Rate</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={aboutImage} alt="About Us" className="w-full h-full object-cover rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20" style={{ background: 'var(--bg-light)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-teal-800">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive physiotherapy solutions tailored to your recovery journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Sports Injury Rehabilitation',
                description: 'Specialized treatment for athletes recovering from sports-related injuries with focus on safe return to play.',
                icon: '⚡'
              },
              {
                title: 'Orthopedic Physiotherapy',
                description: 'Post-surgical rehabilitation and treatment for musculoskeletal conditions, fractures, and joint replacements.',
                icon: '🦴'
              },
              {
                title: 'Neurological Rehabilitation',
                description: 'Expert care for stroke, Parkinson\'s, MS, and other neurological conditions to improve mobility and function.',
                icon: '🧠'
              },
              {
                title: 'Pediatric Physiotherapy',
                description: 'Gentle, playful therapy for children with developmental delays, cerebral palsy, and other conditions.',
                icon: '👶'
              },
              {
                title: 'Geriatric Care',
                description: 'Age-appropriate treatments focusing on balance, strength, and maintaining independence for seniors.',
                icon: '🌟'
              },
              {
                title: "Women's Health Physiotherapy",
                description: 'Comprehensive care for women\'s health issues including prenatal and postnatal physiotherapy, pelvic floor rehabilitation, and treatment for incontinence and pelvic pain.',
                icon: '🤰'
              },
              {
                title: 'Vestibular Rehabilitation',
                description: 'Specialized therapy for balance and dizziness disorders, including vertigo treatment and exercises to improve vestibular function and spatial orientation.',
                icon: '🌀'
              },
              {
                title: 'Manual Therapy',
                description: 'Hands-on techniques including massage, joint mobilization, and soft tissue manipulation for pain relief.',
                icon: '👐'
              }
            ].map((service, index) => (
              <div key={index} className="service-card bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="font-display text-2xl font-bold mb-3 text-teal-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <Link to="/services" className="mt-6 text-orange-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                  Learn More <ChevronRight size={20} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-teal-800">Contact Us</h2>
            <p className="text-xl text-gray-600">Convenient location with ample parking</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className='rounded-3xl h-96'>
              <LoadScript googleMapsApiKey={Google_MAP_API_KEY}>
                <GoogleMap mapContainerStyle={{ width: "100%", height: "100%", borderRadius: "3%" }} center={PinPoint1} zoom={15}>
                  <Marker position={PinPoint1} />
                </GoogleMap>
              </LoadScript>
            </div>
            <div className='rounded-3xl h-96'>
              <LoadScript googleMapsApiKey={Google_MAP_API_KEY}>
                <GoogleMap mapContainerStyle={{ width: "100%", height: "100%", borderRadius: "3%" }} center={PinPoint2} zoom={15}>
                  <Marker position={PinPoint2} />
                </GoogleMap>
              </LoadScript>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-teal-700" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Address</h3>
                  <p className="text-gray-600 mb-3">B1, 320, New Kondli Rd, Pocket B,<br />New Kondli,Kondli, New Delhi,<br />Delhi 110096</p>
                  <p className="text-gray-600">Carnesia C-10, 101, Prateek grand city,<br />Siddharth Vihar, Indirapuram, Ghaziabad,<br />Uttar Pradesh 201009</p>

                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-teal-700" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">+91 96933 53209</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-teal-700" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Hours</h3>
                  <p className="text-gray-600">
                    All Days: 8:00 AM - 7:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-teal-700" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">dranupriyasinghphysio@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section id="testimonials" className="py-20" style={{ background: 'linear-gradient(135deg, #E8F5F4 0%, #D5EDE9 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-teal-800">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear what our clients have to say about their recovery journey with us
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Single Testimonial Card with Animation */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 min-h-[320px] transition-all duration-500">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <div className="mb-6">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      "{current.text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <h4 className="font-display text-xl font-bold text-teal-900">{current.name}</h4>
                      <p className="text-gray-600 italic">{current.role}</p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:w-24 flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-600 to-orange-400 flex items-center justify-center overflow-hidden shadow-lg">
                    {current.avatar ? (
                      <img src={current.avatar} alt={current.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-white text-2xl font-bold">{current.initial}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center transition-all shadow-md hover:shadow-lg transform hover:scale-110"
                aria-label="Previous testimonial"
              >
                <span className="text-gray-800 font-bold text-xl">←</span>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center transition-all shadow-md hover:shadow-lg transform hover:scale-110"
                aria-label="Next testimonial"
              >
                <span className="text-gray-800 font-bold text-xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
