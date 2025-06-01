// MakeTrip.js
import React, { useState } from "react";

const MakeTrip = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
    people: '',
    destination: '',
    preferences: '',
    tripType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Trip Data:', formData);
    alert("Trip request submitted successfully!");
    // You can also reset the form if needed:
    // setFormData({...});
  };

  return (
    <div className="main-maketrip main-page p-6 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Plan Your Trip</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Contact Number</label>
            <input
              type="tel"
              name="contact"
              required
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Residential Address</label>
            <textarea
              name="address"
              required
              rows={2}
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 font-medium">Number of People</label>
            <input
              type="number"
              name="people"
              min={1}
              required
              value={formData.people}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Preferred Destination</label>
            <input
              type="text"
              name="destination"
              required
              value={formData.destination}
              onChange={handleChange}
              placeholder="e.g., Goa, Manali"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Type of Trip</label>
            <select
              name="tripType"
              required
              value={formData.tripType || ''}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="" disabled>Select type of trip</option>
              <option value="Adventure">Adventure</option>
              <option value="Trekking">Trekking</option>
              <option value="Hiking">Hiking</option>
              <option value="Swimming">Swimming</option>
              <option value="Sightseeing">Sightseeing</option>
              <option value="Beach">Beach</option>
              <option value="Cultural">Cultural</option>
              <option value="Relaxation">Relaxation</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Other Preferences</label>
            <textarea
              name="preferences"
              rows={2}
              value={formData.preferences}
              onChange={handleChange}
              placeholder="e.g., Adventure trip, Budget friendly, etc."
              className="w-full p-2 border border-gray-300 rounded-lg"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Trip Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeTrip;
