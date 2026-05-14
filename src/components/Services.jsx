// import { ChevronRight } from 'lucide-react';
import './Header.css';
import aboutImage from '../assets/images/aboutimage.jpg';

export default function Services() {
  return (
    <div>
      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 mt-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-teal-800">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive physiotherapy solutions tailored to your recovery journey
            </p>
          </div>
          {[
            {
              title1: 'Sports Injury Rehabilitation',
              title2: 'Orthopedic Physiotherapy',
              description1: 'Our Sports Injury Rehabilitation services focus on helping athletes and physically active individuals recover from injuries and return to their sport safely and confidently. We offer customized physiotherapy programs that address pain management, mobility restoration, muscle strengthening, and functional recovery. Our approach combines manual therapy, therapeutic exercises, and sport-specific rehabilitation techniques to treat injuries such as sprains, strains, ligament tears, joint injuries, and post-surgical conditions. We aim not only to heal the injury but also to improve performance and reduce the risk of re-injury.',
              description2: 'Our Orthopedic Physiotherapy services are focused on diagnosing, treating, and managing conditions related to bones, joints, muscles, and ligaments. We provide personalized treatment plans to relieve pain, improve mobility, restore strength, and enhance overall function. Using a combination of manual therapy, targeted exercises, posture correction, and advanced physiotherapy techniques, we help patients recover from conditions such as arthritis, back and neck pain, joint stiffness, fractures, post-surgical rehabilitation, and musculoskeletal injuries. Our goal is to support long-term recovery, improve daily movement, and prevent future orthopedic issues.',
              icon1: '',
              icon2: ''
            },
            {
              title1: 'Neurological Rehabilitation',
              title2: 'Pediatric Physiotherapy',
              description1: 'Our Sports Injury Rehabilitation services focus on helping athletes and physically active individuals recover from injuries and return to their sport safely and confidently. We offer customized physiotherapy programs that address pain management, mobility restoration, muscle strengthening, and functional recovery. Our approach combines manual therapy, therapeutic exercises, and sport-specific rehabilitation techniques to treat injuries such as sprains, strains, ligament tears, joint injuries, and post-surgical conditions. We aim not only to heal the injury but also to improve performance and reduce the risk of re-injury.',
              description2: 'Our Sports Injury Rehabilitation services focus on helping athletes and physically active individuals recover from injuries and return to their sport safely and confidently. We offer customized physiotherapy programs that address pain management, mobility restoration, muscle strengthening, and functional recovery. Our approach combines manual therapy, therapeutic exercises, and sport-specific rehabilitation techniques to treat injuries such as sprains, strains, ligament tears, joint injuries, and post-surgical conditions. We aim not only to heal the injury but also to improve performance and reduce the risk of re-injury.',
              icon1: '',
              icon2: ''
            },
            {
              title1: "Women's Health Physiotherapy",
              title2: 'Vestibular Rehabilitation',
              description1: 'Our Sports Injury Rehabilitation services focus on helping athletes and physically active individuals recover from injuries and return to their sport safely and confidently. We offer customized physiotherapy programs that address pain management, mobility restoration, muscle strengthening, and functional recovery. Our approach combines manual therapy, therapeutic exercises, and sport-specific rehabilitation techniques to treat injuries such as sprains, strains, ligament tears, joint injuries, and post-surgical conditions. We aim not only to heal the injury but also to improve performance and reduce the risk of re-injury.',
              description2: 'Our Sports Injury Rehabilitation services focus on helping athletes and physically active individuals recover from injuries and return to their sport safely and confidently. We offer customized physiotherapy programs that address pain management, mobility restoration, muscle strengthening, and functional recovery. Our approach combines manual therapy, therapeutic exercises, and sport-specific rehabilitation techniques to treat injuries such as sprains, strains, ligament tears, joint injuries, and post-surgical conditions. We aim not only to heal the injury but also to improve performance and reduce the risk of re-injury.',
              icon1: '',
              icon2: ''
            },
            {
              title1: 'Geriatric Care',
              title2: 'Manual Therapy',
              description1: 'Our Sports Injury Rehabilitation services focus on helping athletes and physically active individuals recover from injuries and return to their sport safely and confidently. We offer customized physiotherapy programs that address pain management, mobility restoration, muscle strengthening, and functional recovery. Our approach combines manual therapy, therapeutic exercises, and sport-specific rehabilitation techniques to treat injuries such as sprains, strains, ligament tears, joint injuries, and post-surgical conditions. We aim not only to heal the injury but also to improve performance and reduce the risk of re-injury.',
              description2: 'Our Sports Injury Rehabilitation services focus on helping athletes and physically active individuals recover from injuries and return to their sport safely and confidently. We offer customized physiotherapy programs that address pain management, mobility restoration, muscle strengthening, and functional recovery. Our approach combines manual therapy, therapeutic exercises, and sport-specific rehabilitation techniques to treat injuries such as sprains, strains, ligament tears, joint injuries, and post-surgical conditions. We aim not only to heal the injury but also to improve performance and reduce the risk of re-injury.',
              icon1: '',
              icon2: ''
            },
          ].map((service, index) => (
            <div key={index} className="mt-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                    <h4 className="font-display text-3xl font-bold mb-3 text-teal-800">{service.title1}</h4>
                    <div className="space-y-4 text-gray-700 text-lg">
                      <p className="text-gray-600 leading-relaxed">{service.description1}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <img src={aboutImage} alt="About Us" className="w-full h-full object-cover rounded-3xl shadow-2xl" />
                  </div>
                </div>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div className="relative">
                    <img src={aboutImage} alt="About Us" className="w-full h-full object-cover rounded-3xl shadow-2xl" />
                  </div>
                  <div>
                    <h4 className="font-display text-3xl font-bold mb-3 text-teal-800">{service.title2}</h4>
                    <div className="space-y-4 text-gray-700 text-lg">
                      <p className="text-gray-600 leading-relaxed">{service.description2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            // <div key={index} className="service-card bg-white rounded-2xl p-8 shadow-lg">
            //   {/*  */}
            //   <h3 className="font-display text-2xl font-bold mb-3 text-teal-800">{service.title}</h3>
            //   <p className="text-gray-600 leading-relaxed">{service.description}</p>
            // </div>
          ))}
        </div>
      </section>
    </div>
  )
}