import React from 'react'

export default function Appointment() {
  return (
    <div>
      {/* Book Appointment Section */}
      <section id="appointment" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 mt-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-teal-800">Book an Appointment</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <form className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl transition-all"
                    placeholder="johndoe@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl transition-all"
                    placeholder="9999999999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl transition-all resize-none"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-teal-700 text-white rounded-full font-semibold hover:bg-teal-800 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  )
}
