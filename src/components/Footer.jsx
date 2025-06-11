import { FaGithub, FaYoutube, FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Main */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Main</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-500">Home</Link></li>
              <li><Link to="/contact" className="hover:text-gray-500">Contact</Link></li>
              <li><Link to="/work-with-us" className="hover:text-gray-500">Work With Us</Link></li>
              <li><Link to="/my-gear" className="hover:text-gray-500">My Gear</Link></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Learn</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="hover:text-gray-500">Courses</Link></li>
              <li><Link to="/tutorials" className="hover:text-gray-500">Tutorials</Link></li>
              <li><Link to="/blog" className="hover:text-gray-500">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="hover:text-gray-500">Terms</Link></li>
              <li><Link to="/privacy" className="hover:text-gray-500">Privacy</Link></li>
              <li><Link to="/refund" className="hover:text-gray-500">Refund</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Social</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <FaGithub />
                <a href="https://github.com/mohitdjcet/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">GitHub</a>
              </li>
              <li className="flex items-center gap-2">
                <FaYoutube />
                <a href="https://www.youtube.com/@MohitDecodes/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">YouTube</a>
              </li>
              <li className="flex items-center gap-2">
                <FaFacebook />
                <a href="https://www.facebook.com/mohitdecode/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">Facebook</a>
              </li>
              <li className="flex items-center gap-2">
                <FaInstagram />
                <a href="https://www.instagram.com/mohit_decodes/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">Instagram</a>
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedin />
                <a href="https://www.linkedin.com/in/mohitdecodes/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
          Made by shahid khan swati with 🧡 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
