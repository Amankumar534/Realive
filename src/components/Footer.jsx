import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.jpg'

export default function Footer() {
  return (
    <div>
      <footer className="bg-teal-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={Logo} alt="Logo" className="w-10 h-10 rounded-full" />
                <span className="font-display text-xl font-bold">Realive</span>
              </div>
              <p className="text-teal-200 text-sm">
                Your trusted partner in health and recovery since 2023.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-teal-200">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/service" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/career" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/appointment" className="hover:text-white transition-colors">Book Appointment</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-teal-200 text-sm">
                <li>B1, 320, New Kondli Rd, Pocket B,<br />New Kondl, Kondli, New Delhi,<br />Delhi 110096</li>
                <li>Carnesia C-10, 101, Prateek Grand City,<br />Siddharth Vihar, Indirapuram, Ghaziabad,<br />Uttar Pradesh 201009</li>
                <li><p><b>Phone: </b>+91 96933 53209</p></li>
                <li><p><b>Email: </b>dranupriyasinghphysio@gmail.com</p></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <button className="w-10 h-10 bg-teal-800 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors">
                  <Facebook size={20} />
                </button>
                <button className="w-10 h-10 bg-teal-800 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors">
                  <Instagram size={20} />
                </button>
                <button className="w-10 h-10 bg-teal-800 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors">
                  <Linkedin size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-teal-800 pt-8 text-center text-teal-200 text-sm">
            <p>© 2026 Realive. All rights reserved. |<Link to="#" >Privacy Policy</Link> |<Link to="#" >Terms of Service</Link></p>
          </div>
        </div>
      </footer>
    </div>
  )
}