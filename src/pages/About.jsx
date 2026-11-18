import React from 'react';
import { BRAND } from '../brand.js';

const About = () => {
  return (
    <section className="min-h-screen bg-white py-16 pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-item-red mb-4">
            About {BRAND.name}
          </h2>
          <p className="text-gray-600 text-lg">
            Our Story and Mission
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Story Section */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              MIKUN brings comforting favourites and an easygoing spirit together. From local favourites to jollof,
              proteins and a cold drink, our menu gives everyone something to look forward to.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Find us on Osekita Rd beside 1908 SALOON, close to EKSU in Ado Ekiti. Good food brings us together;
              good vibes keep us here.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-item-red text-white p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed mb-4">
              To provide delicious, authentic Nigerian food that brings people together and celebrates our rich culinary heritage.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <span className="text-xl">✓</span>
                <span>Quality ingredients sourced with care</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-xl">✓</span>
                <span>Traditional recipes prepared by experienced chefs</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-xl">✓</span>
                <span>Fast, convenient delivery via WhatsApp</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-xl">✓</span>
                <span>Affordable prices without compromising quality</span>
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl text-item-red mb-4">🍲</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Authentic Taste</h4>
              <p className="text-gray-600">Traditional Nigerian recipes prepared the authentic way</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl text-item-red mb-4">⚡</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Quick Service</h4>
              <p className="text-gray-600">Fast order processing and convenient WhatsApp ordering</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl text-item-red mb-4">❤️</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Made with Love</h4>
              <p className="text-gray-600">Every dish prepared with passion and care for you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
