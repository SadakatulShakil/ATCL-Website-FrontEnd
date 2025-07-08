import React from 'react';

const Footer = () => {


const companyLinks = [
  { label: "About Us", href: "https://atcbd.net/aboutus" },
  { label: "Contact Us", href: "https://atcbd.net/contact" },
  { label: "Our Team", href: "https://atcbd.net/team" },
  { label: "Testimonial", href: "https://atcbd.net/testimonial" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "https://atcbd.net/page/terms-condition" },
  { label: "Privacy Policy", href: "https://atcbd.net/page/privacy-polic" },
];

const otherLinks = [
  { label: "Our Service", href: "https://atcbd.net/service" },
  { label: "Our Product", href: "https://atcbd.net/product" },
  { label: "Our News", href: "https://atcbd.net/news" },
];

const openHours = [
  "Sunday: 9:30 AM - 5:30 PM",
  "Monday: 9:30 AM - 5:30 PM",
  "Tuesday: 9:30 AM - 5:30 PM",
  "Wednesday: 9:30 AM - 5:30 PM",
  "Thursday: 9:30 AM - 5:30 PM",
  "Friday: Close",
  "Saturday: 9:30 AM - 5:30 PM",
];

const socialLinks = [
  {
    icon: (
      <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 320 512">
        <path d="M279.14 288l14.22-92.66h-88.91V127.5c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.61 0-121.36 44.38-121.36 124.72V195.3H22.89V288h81.11v224h100.2V288z" />
      </svg>
    ),
    label: "Facebook",
    href: "https://www.facebook.com/AdvanceTechnologyConsortium",
  },
  {
    icon: (
      <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 512 512">
        <path d="M459.4 151.7c.32 4.54.32 9.14.32 13.73 0 139.39-106.05 300.09-300.09 300.09A297.26 297.26 0 0 1 0 408.09a211.62 211.62 0 0 0 24.61 1.42 210.55 210.55 0 0 0 130.49-44.92 105.09 105.09 0 0 1-98-72.65 132.38 132.38 0 0 0 19.93 1.6 110.59 110.59 0 0 0 27.6-3.6A105.06 105.06 0 0 1 21 204.1v-1.28a105.68 105.68 0 0 0 47.32 13.17A105.07 105.07 0 0 1 35.36 81.68a298.32 298.32 0 0 0 216.29 109.81A118.07 118.07 0 0 1 112 84.22c0-23.21 6.22-44.67 17.14-63.24A298.93 298.93 0 0 0 292.41 96.2a105.17 105.17 0 0 1 178.87-95.73 209.79 209.79 0 0 0 66.72-25.52A105.38 105.38 0 0 1 460.41 44a209.81 209.81 0 0 0 60.31-16.22 224.7 224.7 0 0 1-52.32 53.94z" />
      </svg>
    ),
    label: "Twitter",
    href: "https://www.twitter.com",
  },
  {
    icon: (
      <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 576 512">
        <path d="M549.655 124.083c-6.281-23.65-24.846-42.214-48.496-48.496C457.13 64 288 64 288 64s-169.13 0-213.159 11.587c-23.65 6.282-42.215 24.846-48.496 48.496C16 168.112 16 256 16 256s0 87.888 10.345 131.917c6.281 23.65 24.846 42.214 48.496 48.496C118.87 448 288 448 288 448s169.13 0 213.159-11.587c23.65-6.282 42.215-24.846 48.496-48.496C560 343.888 560 256 560 256s0-87.888-10.345-131.917zM232 336V176l142.857 80L232 336z" />
      </svg>
    ),
    label: "YouTube",
    href: "https://www.youtube.com/",
  },
  {
    icon: (
      <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 448 512">
        <path d="M224.1 141c-63.6 0-115 51.4-115 115 0 63.6 51.4 115 115 115 63.6 0 115-51.4 115-115 0-63.6-51.4-115-115-115zm124.7-41.4c0 14.7-11.9 26.6-26.6 26.6s-26.6-11.9-26.6-26.6c0-14.7 11.9-26.6 26.6-26.6s26.6 11.9 26.6 26.6zm76.1 41.4C425.4 56.5 367.5 0 298.1 0H149.9C80.5 0 22.6 56.5 23.2 125.1c.6 73.3 0 262.4 0 262.4.6 68.6 58.5 125.1 127.9 125.1h148.2c69.4 0 127.3-56.5 127.9-125.1 0 0 .6-189.1 0-262.4zM224.1 338c-61.6 0-111.6-50-111.6-111.6 0-61.6 50-111.6 111.6-111.6s111.6 50 111.6 111.6c0 61.6-50 111.6-111.6 111.6z" />
      </svg>
    ),
    label: "Instagram",
    href: "https://www.instagram.com/",
  },
  {
    icon: (
      <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 448 512">
        <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.28 107.3 0 83 0 52.5 0 23.5 23.64 0 53.61 0s53.33 23.5 53.33 52.5c0 30.5-24.28 54.8-53.1 54.8zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.4-58.4-23.7 0-37.8 16-44 31.4-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.44s1.2-241.3 0-266.1h92.44v37.7c12.3-19 34.3-46.1 83.4-46.1 60.8 0 106.4 39.6 106.4 124.7V448z" />
      </svg>
    ),
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
];

     return (
          <div>
              <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-b border-gray-700">
          <div className="flex items-center mb-4 md:mb-0">
            <a href="https://atcbd.net/">
              <img
                src="https://atcbd.net//public/images/Untitled-31.png"
                alt="ATCL Logo"
                className="h-12 w-auto"
              />
            </a>
          </div>
          <span className="text-lg font-semibold flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2M7 5h10M19 5h2M6 10h12M6 15h6"></path>
            </svg>
            <span className="text-gray-300">+88 02 41024410</span>
          </span>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-10">
          {/* About & Social */}
          <div>
            <p className="mb-4 text-sm">
              Established in 1999 with a group of professionals, ATC (Advance Technology Consortium Ltd.) Supplies, Develops &amp; Manufactures a comprehensive range of products for Engineering Education, Industry, Research Laboratory and Different Govt. &amp; Non-Govt. organizations.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-800 p-2 hover:bg-blue-600 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Others */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Others</h4>
            <ul className="space-y-2">
              {otherLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Open Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Open hour</h4>
            <ul className="space-y-1 text-sm">
              {openHours.map((hour, i) => (
                <li key={i}>{hour}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 py-4 text-sm">
          <p className="mb-2 sm:mb-0">&copy; ATCL 2024</p>
         
        </div>
      </div>
    </footer> 
          </div>
     );
};

export default Footer;