export default function ContactsPage() {
  return (
    <div className="space-y-28">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-800 via-green-700 to-cyan-700 text-white py-24 px-10 text-center">

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Get In Touch
          <span className="block text-cyan-300">
            With Wildlife Guardian AI
          </span>
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-green-100 leading-relaxed">
          Have questions, collaboration ideas, or want to integrate AI-powered
          wildlife monitoring into your conservation efforts? We’d love to hear from you.
        </p>

      </section>


      {/* CONTACT SECTION */}
      <section className="grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE - FORM */}
        <div className="bg-white p-12 rounded-3xl shadow-lg border border-gray-100">

          <h2 className="text-3xl font-bold text-green-800 mb-8">
            Send Us a Message
          </h2>

          <form className="space-y-6">

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-600 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-600 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Organization (Optional)
              </label>
              <input
                type="text"
                placeholder="Your organization"
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-600 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-600 outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-700 to-cyan-600 text-white py-4 rounded-xl font-semibold hover:scale-[1.02] transition shadow-md"
            >
              Send Message
            </button>

          </form>
        </div>


        {/* RIGHT SIDE - INFO CARD */}
        <div className="space-y-8">

          <div className="bg-gradient-to-br from-green-50 to-cyan-50 p-10 rounded-3xl shadow-md">
            <h2 className="text-3xl font-bold text-green-800">
              Contact Information
            </h2>

            <div className="mt-8 space-y-6 text-gray-700">

              <div>
                <p className="font-semibold text-green-700">Email</p>
                <p>contact@wildlifeguardian.ai</p>
              </div>

              <div>
                <p className="font-semibold text-green-700">Phone</p>
                <p>+91 98765 43210</p>
              </div>

              <div>
                <p className="font-semibold text-green-700">Location</p>
                <p>Forest Research & Conservation Center, India</p>
              </div>

            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              Collaboration Opportunities
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We partner with forest departments, environmental researchers,
              NGOs, and AI innovators to expand wildlife protection through
              advanced technology.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}