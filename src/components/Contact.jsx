import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function Contact() {
    const Google_MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;
    const PinPoint1 = { lat: 28.6054281, lng: 77.324546 };
    const PinPoint2 = { lat: 28.6479842, lng: 77.403986 };

    return (
        <div>
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
                                    <p className="text-gray-600">Carnesia C-10, 101, Prateek Grand City,<br />Siddharth Vihar, Indirapuram, Ghaziabad,<br />Uttar Pradesh 201009</p>

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
        </div>
    )
}
