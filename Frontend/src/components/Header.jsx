import toast from 'react-hot-toast';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
      {/* Left side: video banner */}
      <div className="order-2 md:order-1 flex justify-center">
        <div className="shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] rounded-3xl overflow-hidden">
          <video
            src={assets.video_banner}
            autoPlay
            loop
            muted
            className="w-full max-w-[400px] h-auto object-cover"
          />
        </div>
      </div>

      {/* Right side: Text content */}
      <div className="order-1 md:order-2 ">
        <h1 className="text-4xl md:text-5xl  font-bold text-gray-900 mb-6 leading-tight">
          AI Powered Background Removal
        </h1>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          Instantly remove image backgrounds with just one click. No manual
          work, 100% AI-driven.
        </p>
        <div>
          <input type="file" accept="image/*" id="upload1" hidden />
          <label
            htmlFor="upload1"
            className="bg-black text-white font-medium px-8 py-4 rounded-full hover:opacity-90 transition-transform hover:scale-105 text-lg"
          >
            Upload Your Image
          </label>
        </div>
        {/* <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700">
          Try it now
        </button> */}
        {/* <button onClick={() => toast.success('Toast is Working')}>
          Test Toast Notification
        </button> */}
      </div>
    </div>
  );
};

export default Header;
