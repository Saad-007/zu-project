import pic1 from "./assets/image/1.png";
import pic2 from "./assets/image/2.png";
import pic4 from "./assets/image/4.png";
import pic3 from "./assets/image/3.png";
import pic5 from "./assets/image/emer.png";
import pic6 from "./assets/image/cardiology.png";
import pic7 from "./assets/image/surgery.png";
import pic8 from "./assets/image/LD.png";
import pic9 from "./assets/image/Oncology.png";
import pic10 from "./assets/image/medical.png";
import mission from "./assets/image/mission.png";
import vision from "./assets/image/vision.png";
import value from "./assets/image/values.png";
import pic11 from "./assets/image/11.png";
import pic12 from "./assets/image/12.png";
import pic13 from "./assets/image/13.png";

import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegUser, FaSearch } from "react-icons/fa";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Top Bar */}
      <section id="home">
      <div className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-teal-500 text-white text-sm">
        <div className="flex justify-end items-center gap-5 mr-12">
          <div className="flex items-center space-x-1 ml-10">
            <div className="w-5 h-5 bg-white rounded-full shadow flex items-center justify-center">
              <IoIosCall className="text-teal-500 text-[9px] font-bold" />
            </div>
            <span className="text-[8px] font-semibold">
              <span className="text-[7px] font-semibold">CALL US NOW</span>
              <br /> +92 321 3665969
            </span>
          </div>
          <div className="flex items-center space-x-1 ">
            <div className="w-5 h-5 bg-white rounded-full shadow flex items-center justify-center">
              <IoLocationSharp className="text-teal-500 text-[9px] font-bold" />
            </div>
            <span className="text-[8px] font-semibold">
              <span className="text-[7px] font-semibold">LOCATION</span>
              <br /> FIND YOUR LOCATION
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="hidden lg:flex items-center gap-1 bg-white text-teal-600 font-semibold px-2 py-1 hover:bg-gray-100 text-[12px]">
              <FaRegUser />
              LOGIN
            </button>
            <FaSearch className="text-white text-sm cursor-pointer" />
            <Navbar />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row flex-grow">
        {/* Right Section (Image) */}
        {/* Right Section (Image) */}
        <div className="order-2 lg:order-2 w-full lg:w-1/2 h-64 lg:h-auto relative">
          <img
            src={pic1}
            alt="Holding Hands"
            className="w-full h-full object-cover"
          />

          {/* Transparent Nav Bar over the image */}
          <div className="hidden lg:flex absolute top-4 left-0 w-full px-8 py-2 justify-center space-x-10 text-white font-medium text-[12px] z-10">
            <a href="#home">HOME</a>
            <a href="#about us">ABOUT US</a>
            <a href="#Donate">DONATE</a>
            <a href="#Impact">IMPACT</a>
          </div>
        </div>

        {/* Left Section (Content) */}
        <div className="order-3 lg:order-1 w-full lg:w-1/2 bg-white px-10 pt-4 pb-10 flex flex-col justify-start items-start">
          <img src={pic2} alt="Logo" className="h-20 mb-15 mt-4" />
          {/* <div className="ml-22 mr-30"> */}
          <h2 className="text-5xl text-teal-700 font-bold mb-10">
            آپ کے ساتھ، ہر قدم
          </h2>
          <h1 className="text-[37px] font-bold text-black mb-4 tracking-wider">
            SAVE A LIFE TODAY
          </h1>
          <p className="text-gray-700 mb-6 max-w-md">
            We all have a role to play. Your donation can help provide medical
            treatment, life-saving surgeries, and healthcare support to
            underprivileged patients in{" "}
            <span className="font-semibold">Pakistan</span>.
          </p>
          <div className="flex gap-15">
            <button className="bg-teal-600 text-white px-8 py-2 font-bold rounded-xl text-[12px] hover:bg-teal-700 transition">
              DONATE NOW
            </button>
            <button className="border-2 border-teal-600 text-teal-600 font-bold px-8 py-2 text-[12px] rounded-xl ml-1 hover:bg-teal-100 transition">
              BE A VOLUNTEER
            </button>
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-teal-600 text-white flex justify-around py-4 text-sm font-semibold">
        <span>INDEPENDENT BODY</span>
        <span>EXCLUSIVE EVALUATION</span>
        <span>BROAD COVERAGE</span>
      </div>
</section>



      {/* Next Page */}
      
      <div className="p-10 bg-white text-black mt-20 ">
        <section id="about us">
        <h2 className="text-[40px] font-bold text-center mb-10">
          PAKISTAN–HEALTH SECTOR
        </h2>

        <div className="flex justify-center mb-12 text-[15px]  font-medium text-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl w-180">
            <ul className="list-[square] pl-5 space-y-9 marker:text-teal-600">
              <li>
                5<sup>th</sup> most populous country with 1.5% Annual growth
                rate
              </li>
              <li>
                124<sup>th</sup> among 195 countries in terms of Healthcare
                Access and Quality index
              </li>
              <li>Only 2.95% of GDP is spend on health sector</li>
            </ul>

            <ul className="list-[square] pl-5 space-y-9 marker:text-teal-600">
              <li>0.56 bed for 1,000 head counts</li>
              <li>Universal Health Coverage (UHC) stands at only 21%</li>
              <li>
                One of the most highest maternal and infant mortality rate
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 text-white place-items-center gap-6 p-6">
          {/** Shared Box Style */}
          {[
            {
              title: "MISSION",
              text: "Providing compassionate and accessible healthcare for all.",
              image: mission,
            },
            {
              title: "VISION",
              text: "To lead in patient-centered, affordable, and ethical healthcare services.",
              image: vision,
            },
            {
              title: "VALUES",
              text: (
                <>
                  Compassion | Commitment | Teamwork | Quality
                  <br />
                  Respect & Accountability – Integrity in all we do.
                </>
              ),
              image: value,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-teal-600 rounded-bl-4xl text-center p-10 flex flex-col items-center justify-between h-[300px] w-[50] max-w-sm"
            >
              <h3 className="font-bold text-xl">{item.title}</h3>
              <img
                src={item.image}
                className="w-20 filter invert brightness-0 mt-6"
                alt={item.title}
              />
              <p className="mt-6">{item.text}</p>
            </div>
          ))}
        </div>

</section>


 <section id="Donate">
        {/* 3rd Slide: Donation Utilization Section */}
        <div className="w-full bg-white py-16 px-4 lg:px-50 ">
         
          <div className="grid lg:grid-cols-2 gap-2 items-center mr-10">
            <img
              src={pic4}
              alt="Doctor with patient"
              className=" w-70 h-[400px] ml-11 mt-5  mb-10"
            />
            <div className="mb-20">
              <h2 className="text-[25px] font-bold text-center lg:text-left mb-10 ml-10">
                UTILIZATION OF DONATIONS
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-y-10 gap-x-8 text-center">
                {[
                  { img: pic5, label: "EMERGENCY" },
                  { img: pic6, label: "CARDIOLOGY" },
                  { img: pic7, label: "SURGERY" },
                  { img: pic8, label: "LIFE & DEATH" },
                  { img: pic9, label: "ONCOLOGY" },
                  { img: pic10, label: "ADVANCE MEDICAL FIELD" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <img
                      src={item.img}
                      className="w-10 mb-2"
                      alt={item.label}
                    />
                    <p className="font-medium text-sm sm:text-base">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 items-center mt-16 ml-13">
            <div>
              <h2 className="text-3xl font-bold mb-4 ">
                EMPOWER LIVES THROUGH COMPASSIONATE HEALTHCARE
              </h2>
              <p className="text-gray-600 mb-6">
                Support The Ziauddin Patient Welfare Society by donating to
                provide essential healthcare to those in need, regardless of
                their financial situation.
              </p>
              <button className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600 transition">
                READ MORE
              </button>
            </div>
            <img
              src={pic3}
              alt="Child with teddy"
              className="rounded-br-[80px] w-56 h-[320px]   mt-12 "
            />
              
          </div>
          
        </div>
        </section>
      </div>


      {/* 4td Slide: Volunteer Community */}
                <section id="Impact">
      <div className="bg-teal-700 px-6 py-12 md:py-20 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center ">
          {/* Left side: Text */}

          <div className="text-center md:text-left px-20 ml-1 ">
            <h2 className="text-[30px]  mb-2">READY TO MAKE AN IMPACT?</h2>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
              JOIN OUR VOLUNTEER <br className="hidden sm:block" />
              COMMUNITY TODAY!
            </h1>
            <p className="mb-6 text-white/90 mx-w-md mx-auto md:mx-0">
              Your time and skills can transform lives. Explore volunteer
              opportunities and become part of the change in{" "}
              <span className="font-semibold">Pakistan</span>.
            </p>
            <button className="bg-white text-[12px] text-teal-600 font-bold py-2.5 px-4 rounded-xl hover:bg-gray-200 transition mt-4">
              BECOME A PARTNER
            </button>
          </div>

          {/* Right Side: Images */}
          <div className="grid grid-cols-2 gap-4 w-88 gap-y-4 mt-10 ">
            <img
              src={pic11}
              alt="Donations"
              className="col-span-2 w-full h-40 object-cover"
            />
            <img
              src={pic13}
              alt="Heart in hand"
              className=" w-full h-40 object-cover"
            />
            <img
              src={pic12}
              alt="Coins in hands"
              className="w-full h-40 object-cover"
            />
          </div>
        </div>
      </div>
</section> 
      {/* Footer Section */}
      <footer className="bg-teal-600 text-white px-6 py-10 border-t border-white/30">
        <div className="max-w-5xl mx-20 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] ">
          {/* Left Column: Logo & Description */}
          <div className="space-y-4">
            <h2 className="text-[23px] font-serif">
              ZIAUDDIN PATIENT'S <br />
              <span className="bg-white text-teal-600 font-bold px-1">
                WELFARE SOCIETY
              </span>
            </h2>
            <p className="text-sm leading-relaxed w-70">
              Empowering communities worldwide through healthcare and
              sustainable developments.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 text-white text-xl mt-3">
              <FiFacebook />
              <FaInstagram />
              <CiYoutube />
              <FaWhatsapp />
            </div>
          </div>

          {/* GET INVOLVED */}
          <div className="ml-10px mt-8">
            <h3 className="font-semibold mb-3">GET INVOLVED</h3>
            <ul className="space-y-2 text-[13px]">
              <li>
                <a href="#">Donate</a>
              </li>
              <li>
                <a href="#">Volunteer</a>
              </li>
              <li>
                <a href="#">Attend Events</a>
              </li>
            </ul>
          </div>

          {/* ABOUT US */}
          <div className="mt-8">
            <h3 className="font-semibold mb-3">ABOUT US</h3>
            <ul className="space-y-2 text-sm text-[13px]">
              <li>
                <a href="#">Our Mission</a>
              </li>
              <li>
                <a href="#">Ongoing Projects</a>
              </li>
              <li>
                <a href="#">Impact Stories</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
            </ul>
          </div>

          {/* CONTACT US */}
          <div className="text-[13px] mt-8">
            <h3 className="font-semibold mb-3">CONTACT US</h3>
            <p className="text-sm">+92 321 3665969 | Extension 6996</p>
            <p className="text-sm mt-1">
              generalsecretary@ziauddinpatientwelfare.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
