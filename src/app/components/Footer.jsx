'use client';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className=" border-t border-gray-300 py-10 mt-10">
      <div className="container mx-auto p-5 grid grid-cols-1 md:grid-cols-4 gap-6 text-gray-700">
        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p>Uzbekistan</p>
          <p>+998 91 101 01 01</p>
          <p>demo@exampledemo.com</p>
          <p>Dji Demo Store</p>
          <p>No, 12345 Freedom Tashkent</p>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Information</h3>
          <ul className="space-y-2">
            <li>Product Support</li>
            <li>Checkout</li>
            <li>License Policy</li>
            <li>Affiliate</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2">
            <li>Help Centre</li>
            <li>Raddem Voucher</li>
            <li>Contact Us</li>
            <li>Policies & Rules</li>
          </ul>
        </div>

        {/* Download Our App */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Download Our App</h3>
          <p className="text-sm text-gray-500">Download our App & get extra 20% Discount on your first Order...!</p>
          <div className="flex gap-3 mt-3">
            <Image src="/images/Photoroom1.svg" alt="Google Play" width={130} height={40} />
            <Image src="/images/Photoroom.svg" alt="App Store" width={130} height={40} />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="h-[80px] px-3 py-3 bg-gray-100 border-t border-gray-300  text-center text-sm text-gray-600">
        <div className='container flex flex-col md:flex-row justify-between items-center'>
          <div className='flex items-center gap-2'>
          <img src="/images/copy.svg" alt="copy" />
          <p>Copyright © Team90Degree | Built with Dji by Team90Degree.</p>
          </div>
          <div className="flex gap-3 mt-3 md:mt-0">
            <Image src="/images/Visa.svg" alt="Visa" width={40} height={25} />
            <Image src="/images/Master card.svg" alt="Mastercard" width={40} height={25} />
            <Image src="/images/Paypal.svg" alt="Paypal" width={40} height={25} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;