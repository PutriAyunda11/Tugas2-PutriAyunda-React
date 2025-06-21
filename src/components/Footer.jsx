export default function Footer() {
  return (
    <footer className="bg-white mt-10 py-6 px-4">
      <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-gray-800 mb-4 text-center">
        <span className="hover:underline cursor-pointer">MyLibrary Originals</span>
        <span className="hover:underline cursor-pointer">Try Premium</span>
        <span className="hover:underline cursor-pointer">Get the App</span>
        <span className="hover:underline cursor-pointer">Language</span>
        <span className="hover:underline cursor-pointer">Writers</span>
        <span className="hidden sm:inline">|</span>
        <span className="hover:underline cursor-pointer">Brand Partnerships</span>
        <span className="hover:underline cursor-pointer">Jobs</span>
        <span className="hover:underline cursor-pointer">Press</span>
      </div>
      <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-gray-500 text-center">
        <span className="hover:underline cursor-pointer">Terms</span>
        <span className="hover:underline cursor-pointer">Privacy</span>
        <span className="hover:underline cursor-pointer">Payment Policy</span>
        <span className="hover:underline cursor-pointer">Accessibility</span>
        <span className="hover:underline cursor-pointer text-center">
          Do Not Sell My Personal Information
        </span>
        <span className="hover:underline cursor-pointer">Help</span>
        <span className="font-medium">© 2025 myLibrary</span>
      </div>
    </footer>
  );
}
