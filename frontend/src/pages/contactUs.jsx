import React, { useState } from "react";
import {
  ChevronRight,
  HomeIcon,
  Phone,
  MapPin,
  Mail,
  MoveLeft,
  MoveRight,
  Send,
} from "lucide-react";
import { NavLink } from "react-router";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank You for reaching out.");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      {/* <div className="bg-neutral-800 p-25 text-white">
        <h1 className="text-6xl text-center mb-6 font-semibold">Contact Us</h1>
        <div className="flex items-center justify-center gap-2 font-semibold">
          <HomeIcon className="w-5 h-5" />
          <NavLink to="/" className="hover:text-white transition-colors">
            Home
          </NavLink>
          <ChevronRight className="w-4 h-4" />
          <NavLink to="/contact-us" className="text-white">
            Contact
          </NavLink>
        </div>
      </div> */}

      <div className="bg-neutral-800 p-25 text-center space-y-4">
        <h1 className="text-4xl md:text-6xl text-white font-semibold">
          Contact Us
        </h1>

        <div className="flex items-center justify-center text-white font-semibold space-x-2">
          <HomeIcon className="w-5 h-5" />
          <NavLink to="/" className="cursor-pointer">
            Home
          </NavLink>

          <div className="flex items-center">
            <ChevronRight color="white" />
            <span>Contact</span>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className=" relative w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.8219106830534!2d85.31008310761253!3d27.701567613575126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1854cfda3e59%3A0x4191b31405936f34!2sKathmandu%20Mall%2C%20Sundhara%20Marg%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1742520115924!5m2!1sen!2snp"
          height="800"
          width="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Information Section */}
      <div className="absolute top-10/12 ml-24 w-2/5 bg-white grid">
        <div className="p-20 m-auto">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Find Food Lounge
          </h2>
          <p className="text-neutral-600 mb-6">
            Discover our vibrant dining experience located in the heart of City.
            We're conveniently situated in Kathmandu, offering a unique culinary
            journey in one of the world's most exciting cities.
          </p>

          {/* Contact Details */}
          <div className="space-y-6">
            {/* Phone Contact */}
            <div className="flex items-center space-x-4">
              <div className="bg-red-500 text-white p-3 rounded-full">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold">Hotline</p>
                <p className="font-semibold">+47 33 37 89 01</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4">
              <div className="bg-green-500 text-white p-3 rounded-full">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold">Our Location</p>
                <p className="font-semibold">
                  55 Main Street, The Grand Awanus 2nd Block, Kathmandu
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 text-white p-3 rounded-full">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold">Official Email</p>
                <p className="font-semibold">contact@foodlounge-nyc.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-10/12 mx-auto pt-20 pb-20">
        {/* Contact Form */}
        <div className="bg-[#EBE9E6] p-10 border-none rounded-md">
          <div className="flex flex-col justify-between items-center p-5">
            <div className="flex justify-between items-center gap-2 mb-4">
              <MoveLeft color="red" />
              <p className="text-red-500 font-semibold text-xl">KEEP IN TOUCH</p>
              <MoveRight color="red" />
            </div>
            <p className="text-5xl font-semibold">Send Us a Message</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              required
              value={name}
              type="text"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-neutral-50 border border-neutral-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                required
                value={email}
                type="email"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-neutral-50 border border-neutral-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                required
                value={phone}
                type="phonenumber"
                placeholder="Your Phone"
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 bg-neutral-50 border border-neutral-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <textarea
              required
              value={message}
              placeholder="Your Message"
              rows={5}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 bg-neutral-50 border border-neutral-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
            <div>
              <button
                type="submit"
                className="w-50 bg-red-500 text-white py-3 rounded-md hover:bg-black transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" /> Get In Touch
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
