import {  Mail, Linkedin } from 'lucide-react';
import './Header.css';

export default function Team() {
  return (
    <div>
        {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-teal-800">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced, certified professionals dedicated to your health
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Dr. Sarah Mitchell', role: 'Lead Physiotherapist', specialty: 'Sports Medicine' },
              { name: 'Dr. James Chen', role: 'Orthopedic Specialist', specialty: 'Post-Surgical Rehab' },
              { name: 'Dr. Emily Rodriguez', role: 'Neurological Expert', specialty: 'Stroke Recovery' },
              { name: 'Dr. Michael Thompson', role: 'Pediatric Therapist', specialty: 'Child Development' }
            ].map((member, index) => (
              <div key={index} className="team-card group">
                <div className="overflow-hidden rounded-2xl mb-4">
                  <div className="team-image w-full h-80 bg-gradient-to-br from-teal-400 to-orange-300 rounded-2xl"></div>
                </div>
                <h3 className="font-display text-xl font-bold text-teal-800">{member.name}</h3>
                <p className="text-orange-500 font-semibold">{member.role}</p>
                <p className="text-gray-600 text-sm mt-2">{member.specialty}</p>
                <div className="flex gap-3 mt-4">
                  <button className="text-teal-600 hover:text-teal-800 transition-colors">
                    <Linkedin size={20} />
                  </button>
                  <button className="text-teal-600 hover:text-teal-800 transition-colors">
                    <Mail size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  )
}
