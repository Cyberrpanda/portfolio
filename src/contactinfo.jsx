// Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-24 px-6 md:px-12"
    >
      <div className="max-w-3xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-500">
          GET IN <span className="text-white">TOUCH</span>
        </h3>

        <form
          action="https://formspree.io/f/movabjyp"
          method="POST"
          className="space-y-8"
        >
          {/* Name row – 2 columns on larger screens */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-slate-300"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200"
                placeholder="John"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-slate-300"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200"
                placeholder="Doe"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200"
              placeholder="you@example.com"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-300"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200 resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-lg hover:shadow-blue-500/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative">Send Message</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}