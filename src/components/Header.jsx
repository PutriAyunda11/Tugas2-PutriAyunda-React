import { LibraryBig, Search} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const [showDropdownCommunity, setShowDropdownCommunity] = useState(false);
  const dropdownRefCommunity = useRef(null);
  const buttonRefCommunity = useRef(null);

  const toggleDropdown = () => {
    setShowDropdownCommunity(false);
    setShowDropdown((prev) => !prev);
  };

  const toggleDropdownCommunity = () => {
    setShowDropdown(false);
    setShowDropdownCommunity((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutsideCom = (event) => {
      if (
        dropdownRefCommunity.current &&
        !dropdownRefCommunity.current.contains(event.target) &&
        buttonRefCommunity.current &&
        !buttonRefCommunity.current.contains(event.target)
      ) {
        setShowDropdownCommunity(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideCom);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideCom);
    };
  }, []);

  return (
    <header className="w-full bg-white shadow px-4 py-3">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-evenly space-y-4 md:space-y-0 md:px-6 md:gap-6">
        <div className="flex items-center space-x-2">
          <LibraryBig className="w-8 h-8 text-black-600" />
          <span className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
            MyLibrary
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 w-full md:w-auto space-y-3 md:space-y-0">
          <div className="flex items-center space-x-4 justify-between md:justify-start w-full">
            <div className="relative">
              <h3
                ref={buttonRef}
                className="text-sm md:text-base lg:text-lg hover:text-blue-600 cursor-pointer "
                onClick={toggleDropdown}
              >
                Gendre
              </h3>
              {showDropdown && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full left-0 mt-2 z-50 bg-white rounded-md shadow-md p-4 w-64 grid grid-cols-2 gap-2"
                >
                  {[
                    "Romansa",
                    "Fantasi",
                    "Aksi",
                    "Fiksi Umum",
                    "Spiritual",
                    "Fiksi Ilmiah",
                    "Fiksi Remaja",
                    "Misteri",
                    "Fiksi Sejarah",
                    "Petualangan",
                    "Klasik",
                    "Horor",
                    "Humor",
                    "Cerita Pendek",
                  ].map((genre, index) => (
                    <span
                      key={index}
                      className="hover:text-blue-600 cursor-pointer text-sm"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="relative ">
              <h3
                ref={buttonRefCommunity}
                className="text-sm md:text-base lg:text-lg hover:text-blue-600 cursor-pointer"
                onClick={toggleDropdownCommunity}
              >
                Community
              </h3>
              {showDropdownCommunity && (
                <div
                  ref={dropdownRefCommunity}
                  className="absolute top-full left-0 mt-2 z-50 bg-white rounded-md shadow-md p-4 w-64 grid grid-cols-1 gap-2"
                >
                  {[
                    "The Watty Awards",
                    "Community Happenings",
                    "MyLibrary Ambassadors",
                  ].map((community, index) => (
                    <span
                      key={index}
                      className="hover:text-blue-600 cursor-pointer text-sm"
                    >
                      {community}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <h3 className="text-sm md:text-base lg:text-lg hover:text-blue-600 cursor-pointer">
              Write
            </h3>
          </div>

          <div className="relative w-full">
            <Search className="absolute left-1 top-1/2 -translate-y-1/2 text-black-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-8 pr-3 py-1 xl:w-[600px] rounded-md shadow text-sm md:text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <h3 className="text-black font-semibold text-sm md:text-base lg:text-lg hover:text-blue-600 cursor-pointer">
            SIGNIN
          </h3>
          <h3 className="text-black font-semibold text-sm md:text-base lg:text-lg hover:text-blue-600 cursor-pointer">
            SIGNUP
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
