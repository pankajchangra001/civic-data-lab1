import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2F658A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
        {/* Left Section */}
        <div className="flex flex-col gap-4">
          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Logo"
              className="h-8 md:h-10 lg:h-14 w-auto object-contain"
              width={50}
              height={50}
            />
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-gray-200">
            <a href="#" className="hover:text-white">
              ABOUT US
            </a>
            <a href="#" className="hover:text-white">
              SITEMAP
            </a>
            <a href="#" className="hover:text-white">
              CONTACT US
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start md:items-end gap-4">
          {/* Follow Us */}
          <div className="flex flex-col items-start md:items-end gap-2">
            <span className="text-sm text-gray-200">Follow Us</span>

            <div className="flex gap-3">
              {/* GitHub */}
              <div className="bg-[#84DCCF] p-2 rounded-full">
                <svg
                  className="w-4 h-4 text-[#2F658A]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.94 3.2 9.13 7.64 10.61.56.1.76-.24.76-.54v-1.9c-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.63 2.62 3.63 1.86.1-.73.39-1.23.71-1.51-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.4.11-2.92 0 0 .95-.3 3.1 1.15a10.7 10.7 0 0 1 5.64 0c2.15-1.45 3.1-1.15 3.1-1.15.61 1.52.23 2.64.11 2.92.72.78 1.16 1.78 1.16 3 0 4.28-2.61 5.23-5.1 5.5.4.35.76 1.04.76 2.1v3.12c0 .3.2.65.77.54A10.99 10.99 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5z" />
                </svg>
              </div>

              {/* LinkedIn */}
              <div className="bg-[#84DCCF] p-2 rounded-full">
                <svg
                  className="w-4 h-4 text-[#2F658A]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 5 3.86 6.1 2.5 6.1S0 5 0 3.5 1.12.9 2.5.9s2.48 1.1 2.48 2.6zM.2 8h4.6v14H.2V8zm7.6 0h4.4v1.9h.1c.6-1.1 2.1-2.2 4.3-2.2 4.6 0 5.4 3 5.4 6.9V22h-4.6v-6.3c0-1.5 0-3.5-2.1-3.5-2.1 0-2.4 1.6-2.4 3.3V22H7.8V8z" />
                </svg>
              </div>

              {/* Twitter */}
              <div className="bg-[#84DCCF] p-2 rounded-full">
                <svg
                  className="w-4 h-4 text-[#2F658A]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.27 4.27 0 0 0-7.3 3.9A12.11 12.11 0 0 1 3.1 4.9a4.27 4.27 0 0 0 1.32 5.7c-.68-.02-1.32-.21-1.88-.52v.05a4.28 4.28 0 0 0 3.42 4.2c-.32.09-.66.14-1 .14-.25 0-.5-.02-.74-.07a4.28 4.28 0 0 0 4 3 8.56 8.56 0 0 1-5.3 1.83c-.34 0-.67-.02-1-.06a12.08 12.08 0 0 0 6.56 1.92c7.87 0 12.18-6.52 12.18-12.18l-.01-.55A8.7 8.7 0 0 0 24 4.6a8.4 8.4 0 0 1-2.54.7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Made by */}
          <div className="text-xs text-gray-300">made by ⚡</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
