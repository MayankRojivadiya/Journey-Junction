import React, { useEffect, useRef, useState } from "react";
import { FaMapMarkerAlt, FaMountain, FaPlane, FaSun } from "react-icons/fa"; // Icons for the cards

const images = [
  "https://plus.unsplash.com/premium_photo-1661930618375-aafabc2bf3e7?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://c1.wallpaperflare.com/preview/848/256/942/nature-water-travel-sky.jpg",
  "https://c1.wallpaperflare.com/preview/577/658/556/manali-himachal-pardesh-mandi.jpg",
  "https://c1.wallpaperflare.com/preview/549/480/26/taj-mahal-palace-hotel-5-star-hotel-mumbai.jpg",
  "https://c4.wallpaperflare.com/wallpaper/787/399/647/life-resort-travel-vacation-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/267/779/729/mark-kirkpatrick-illustration-mountains-minimalism-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/744/562/421/5bd0eb1944fcb-wallpaper-preview.jpg",
  "https://images.unsplash.com/photo-1671375159307-960b2e7fabc7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const places = [
  {
    name: "Gir National Park",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsHB2YE0T1E74nkoO8CSGJbI9eYm-s9jtEiQ&s",
    description:
      "Gir Forest National Park is a wildlife sanctuary in Gujarat, western India.",
  },
  {
    name: "Dwarkadhish Temple",
    image:
      "https://static.toiimg.com/thumb/msid-47371175,width=1200,height=900/47371175.jpg",
    description:
      "The Dwarkadhish temple, dedicated to Krishna, is a spiritual marvel in Gujarat.",
  },
  {
    name: "Statue of Unity",
    image:
      "https://images.news18.com/ibnlive/uploads/2018/11/Statue-of-Unity-World%E2%80%99s-Tallest-Statue-of-Sardar-Vallabhbhai-Patel.jpg",
    description:
      "The Statue of Unity is the world's tallest statue, standing at 182 meters.",
  },
  {
    name: "Somnath temple",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRtV856xK-aEkM7Za9jCpGrXR1i-Rhiys3Yg&s",
    description:
      "Somnath temple or Deo Patan, is a Hindu temple located in Prabhas Patan, Veraval in Gujarat, India. It is one of the most sacred pilgrimage sites the Tirtha Kshetra for Hindus and is the first among the twelve jyotirlinga shrines of Shiva.",
  },
  {
    name: "Rani Ki Vav, Patan",
    image:
      "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/11/17/Pictures/rani-ki-vav_017f49d6-ea6c-11e8-9b97-bd22f81a225c.jpg",
    description:
      "Rani Ki Vav is a stepwell situated in the town of Patan in Gujarat, India. It is located on the banks of the Saraswati River.",
  },
  {
    name: "River front, Ahemdabad",
    image:
      "https://organiser.org/wp-content/uploads/2022/09/aerial-view-of-spectacular-atal-.jpg",
    description:
      "Atal Pedestrian Bridge is a pedestrian triangular truss bridge at Sabarmati Riverfront on Sabarmati river in Ahmedabad, Gujarat, India. It has a design inspired by kites. Inaugurated in 2022, it is 300 metres long and 10 metres to 14 metres wide.",
  },
  {
    name: "Laxmi Vilas Palace",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTch7HDHFNMIlfSPjGSdqv-4TuArCIIKUd19Q&s",
    description:
      "The Lakshmi Vilas Palace in Vadodara, Gujarat, India, was constructed in 1890 by the Gaekwad family, a prominent Maratha family, who ruled the Baroda State. Major Charles Mant was credited to be the main architect of the palace.",
  },
  {
    name: "Sun Temple, Modhera",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9IuGxVaT56LA_GyI49-gBsS9po9ilBow4-A&s",
    description:
      "The Sun Temple of Modhera is a Hindu temple dedicated to the solar deity Surya located at Modhera village of Mehsana district, Gujarat, India. It is situated on the bank of the river Pushpavati. It was built after 1026-27 CE during the reign of Bhima I of the Chaulukya dynasty. ",
  },
  {
    name: "Rann of Kutch",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVd1BQqssIL1ADG8hMpNjdoxsa0DGvaGjN3g&s",
    description:
      "The Great Rann of Kutch is a salt marsh in the Thar Desert in the Kutch District of Gujarat, India. It is about 7500 km² in area and is reputed to be one of the largest salt deserts in the world. This area has been inhabited by the Kutchi people.",
  },
  {
    name: "Saputara",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5e0LwR8fx5a6Jg8R_RobODXIH4qeAnlOKJQ&s",
    description:
      "Saputara is a hill town in the west Indian state of Gujarat. The Artist Village cultural center displays, and sells, tribal arts and crafts. Artifacts, including ritual objects, trace the heritage of the local Dang tribe at Saputara Tribal Museum.",
  },
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: 1, behavior: "smooth" });
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="main-page mt-1 main-home mx-auto bg-gradient-to-b from-blue-50 to-blue-100">
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Journey Junction
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Find Your Perfect Getaway with Journey Junction Discover
              personalized travel recommendations tailored to your interests.
              Let's take you there!
            </p>
            <button type="button" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Make your Trip</button>
            <a
              href="#"
              class="ml-4 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Explore India
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://plus.unsplash.com/premium_photo-1661930618375-aafabc2bf3e7?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{
                backgroundImage: `url(${images[currentImage]})`,
              }}
              alt="mockup"
            />
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-sectio bg-transparent py-16 px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Welcome to Journey Junction</h2>
        <p className="text-lg text-gray-700 mb-8">
          Embark on an unforgettable adventure with Journey Junction, your
          ultimate travel planning companion.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300">
            <FaMapMarkerAlt className="text-red-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2">Discover New Places</h3>
            <p className="text-gray-600">
              Explore breathtaking destinations around the world with our
              curated travel guides.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300">
            <FaMountain className="text-green-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2">Adventures Await</h3>
            <p className="text-gray-600">
              From mountains to beaches, find the best adventures tailored just
              for you.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300">
            <FaPlane className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2">Book Flights & Tours</h3>
            <p className="text-gray-600">
              Get exclusive deals on flights and tours, all in one place.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300">
            <FaSun className="text-yellow-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2">Relax & Enjoy</h3>
            <p className="text-gray-600">
              Whether it's a peaceful retreat or a cultural trip, we have
              something for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Moving Cards Section */}
      {/* Nearby and Moving Cards Section */}
      <div className="flex mt-10">
        {/* First Div (25%) - "Near by You" */}
        <div className="w-1/4 flex flex-col items-center justify-center dark:bg-gray-900 dark:text-white p-6 rounded-lg shadow-lg">
          <div className="text-center">
            {/* Icon or Decorative Element */}
            <svg
              className="w-12 h-12 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c0 2.485-2.015 4.5-4.5 4.5S3 13.485 3 11s2.015-4.5 4.5-4.5S12 8.515 12 11zm0 0v10.5a3 3 0 003 3 3 3 0 003-3V11a6 6 0 00-6-6H9a6 6 0 000 12v0z"
              ></path>
            </svg>

            {/* Title */}
            <h2 className="text-4xl font-extrabold mb-2">Near by You</h2>

            {/* Call to Action */}
            <button className="mt-4 px-6 py-2 bg-white text-gray-700 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300">
              Explore Nearby
            </button>
          </div>
        </div>

        {/* Second Div (75%) - Moving Cards */}
        <div className="w-3/4 relative flex items-center overflow-hidden">
          <div
            className="flex space-x-4 py-4 animate-scroll whitespace-nowrap"
            ref={scrollContainerRef}
          >
            {places.concat(places).map((place, index) => (
              <div
                key={index}
                className="moving_box w-64 h-80 bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-wrap">
                  <h2 className="text-xl font-bold">{place.name}</h2>
                  <p className="mt-2 text-gray-600 overflow-hidden">
                    {place.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rest of the content */}
      <div className="home_box1 text-center m-10 mt-10 justify-center items-center rounded-3xl">
        <h1 className="text-4xl font-bold m-5 mb-4">Explore India</h1>
        <p className="text-xl mb-8">
          Embark on an unforgettable adventure with Journey Junction, your
          ultimate travel planning companion.
        </p>
      </div>

      {/* Footer or additional content can be added here */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; 2024 Journey Junction. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
