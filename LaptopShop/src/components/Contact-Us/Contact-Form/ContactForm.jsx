import React from "react";

export default function ContactForm() {
  return (
    <div className="px-4 mt-4 md:w-1/2">
      <h1 className="text-2xl font-semibold my-4">Contact Us</h1>

      <p className="leading-7 pr-4 mb-4">
        We love hearing from you, our Shop customers. Please contact us and we
        will make sure to get back to you as soon as we possibly can.
      </p>

      <form method="post">
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm text-black font-bold">
            Name
          </span>
          <input
            type="email"
            name="email"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Your Name"
          />
        </label>

        <label class="block mt-4">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-bold text-black">
            Email
          </span>
          <input
            type="email"
            name="email"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Your Email"
          />
        </label>

        <label class="block mt-4">
          <span class="block text-sm font-bold text-black">
            Your Phone Number
          </span>
          <input
            type="email"
            name="email"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Your Phone"
          />
        </label>

        <div class="col-span-full mt-4">
          <label
            for="about"
            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-bold leading-6 text-black"
          >
            What’s on your mind?
          </label>
          <div>
            <textarea
              id="about"
              name="about"
              rows="3"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>

        <button className="w-32 bg-[#0156FF] py-2 rounded-full text-white my-4 font-semibold">Submit</button>
      </form>
    </div>
  );
}
