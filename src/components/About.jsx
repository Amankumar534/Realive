import aboutImage from '../assets/images/aboutimage.jpg';

export default function About() {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 mt-6 text-teal-800">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Anodyne Spine is the foremost fusion with modern Physiotherapy Clinic in Delhi & NCR, recognized for an array of non-surgical treatment for back, neck, knee & spine related problems. A cluster of top-notch physiotherapists strives to deliver world-class services by means of cutting-edge technology & research-based techniques.</p>
                <p>
                  We combine evidence-based treatment techniques with compassionate care, ensuring each patient receives a personalized rehabilitation plan designed to meet their specific goals and needs.
                </p>
                <p>
                  Our state-of-the-art facility is equipped with the latest technology and therapeutic equipment, enabling us to provide comprehensive care across a wide range of conditions.
                </p>
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
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 mt-6 text-teal-800">
                Our Mission
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  To deliver a quality care with compassion. We believe in giving the best treatment to our customers with full compassion and care. we have already served more than 500+ patients and provided them the best treatment. Our main mission is to provide you a painless life with enhanced body movement and ability.
                </p>
                <p>
                  Dr. Anupriya Singh have 5+ years of experience provides excellent services in the field of pain management, spine-related pain and injuries, sports injuries, and rehabilitation. We are loved and trusted by our patients, and have been industry leaders in our proximity. At our Physiotherapy clinic we provide e specialized care to people suffering body pains and physiological disorders where our physiotherapists diagnose physical disorders, malfunctioning in the body and pain caused due to trauma or diseases.
                </p>
                <p>
                  Our main approach is to give you a painless life by giving you surgery-less and drug-less treatment. Our diagnosis methods are aimed at providing maximum mobility and ability to patients and minimize the pain they suffer from, in their body, muscles and mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
