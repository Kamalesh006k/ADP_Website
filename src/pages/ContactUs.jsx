import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiUser, FiGlobe } from "react-icons/fi";

const ContactUs = () => {
  return (
    <div className="bg-container min-h-screen relative">
      {/* Glass overlay */}
      <div className="bg-overlay"></div>

      <div className="content flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.3 }}
          className="w-full max-w-4xl text-center z-10 relative"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
            For Contact
          </h2>

          <p className="text-gray-300 mb-10 leading-relaxed px-2 sm:px-4">
            
          </p>
          <div className="grid gap-6 sm:grid-cols-2 text-left max-w-3xl mx-auto mb-12">
            {[
              { icon: <FiUser className="text-xl text-green-400" />, label: "Name", value: "ADP Constructions" },
              { icon: <FiMail className="text-xl text-blue-400" />, label: "Email", value: "example@gmail.com" },
              { icon: <FiMapPin className="text-xl text-pink-400" />, label: "Address", value: "Ramapuram Chennai" },
              { icon: <FiGlobe className="text-xl text-yellow-400" />, label: "Languages", value: "English, Tamil" },
            ].map(({ icon, label, value }, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.07,
                  backgroundColor: "rgba(255,255,255,0.06)",
                  boxShadow: "0 10px 30px rgba(255,255,255,0.12)",
                }}
                transition={{ type: "spring", stiffness: 600, damping: 50, duration: 0.25 }}
                className="flex items-start gap-4 p-4 rounded-xl cursor-pointer backdrop-blur-md transition-all bg-white/10"
              >
                <div className="mt-1">{icon}</div>
                <div>
                  <p className="text-xs uppercase text-gray-400">{label}</p>
                  <p className="text-base sm:text-lg text-white">{value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
