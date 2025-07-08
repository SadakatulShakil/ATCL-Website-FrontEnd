import React from 'react';

const Quote = () => {
     return (
          <div className='py-28 bg-white'>
              <section
  class="bg-cover bg-center py-28 px-4 md:px-8"
  style={{backgroundImage:"url('https://i.ibb.co/9969ttv0/b9f3cb9e-9d6f-421a-b890-543fe207f8c1.jpg'"}}
>
  <div class="max-w-6xl mx-auto">
    <div class="flex justify-end">
      <div class="w-full lg:w-9/12 xl:w-8/12 bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg opacity-90">
        <div class="mb-12 text-center">
          <span class="text-lg text-primary font-semibold uppercase">Get a Quote For Free</span>
          <h2 class="text-3xl md:text-4xl font-bold mt-2">Request a Free Quote</h2>
        </div>

        <form action="contact" id="contactform" name="form1" method="post" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Contact Number"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div class="md:col-span-2">
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div class="md:col-span-2">
              <textarea
                name="message"
                id="message"
                rows="6"
                placeholder="Enter Message"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
          </div>

          <div class="text-center">
            <button
              type="submit"
              name="submit"
              class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
            >
              Request a Quote
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
 
          </div>
     );
};

export default Quote;