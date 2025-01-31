/* eslint-disable @next/next/no-img-element */
import { footer } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Logo and Social Links */}
          <div className="md:w-1/4">
            <a href="#" className="block mb-6">
              <img src="/logo.webp" alt="FK IMMO" className="h-12" />
            </a>
            <div className="flex gap-4">
              {footer.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-6 h-6 hover:opacity-80 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={social.icon}
                    alt="social"
                    className="w-full h-full"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:w-3/4">
            {footer.categories.map((category, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-gray-900 text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
