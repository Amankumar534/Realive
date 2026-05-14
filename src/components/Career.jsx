export default function Career() {
    return (
        <div>
            {/* Career Section */}
            <section id="appointment" className="py-20" style={{ background: 'var(--bg-light)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-teal-800 mb-4">Join Our Team</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Be part of a passionate team dedicated to transforming lives through exceptional care
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <form className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl transition-all"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interested In</label>
                                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl transition-all">
                                        <option>Select a service</option>
                                        <option>Sports Injury Rehabilitation</option>
                                        <option>Orthopedic Physiotherapy</option>
                                        <option>Neurological Rehabilitation</option>
                                        <option>Pediatric Physiotherapy</option>
                                        <option>Geriatric Care</option>
                                        <option>Manual Therapy</option>
                                    </select>
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
                                Apply Now
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
