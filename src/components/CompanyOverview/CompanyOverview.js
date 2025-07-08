import React from 'react';

const CompanyOverview = () => {
     return (
          <div className='bg-white'>
               <div class="container mx-auto px-4 py-12">
  <div class="flex flex-col lg:flex-row items-center gap-10">
    
    {/* <!-- Left Content --> */}
    <div class="w-full lg:w-1/2">
      <div class="mb-8 lg:mb-0">
        <div class="mb-4">
          <span class="text-[#E0581E] font-medium text-sm uppercase tracking-wider">Company Overview</span>
          <h4 class="text-2xl md:text-3xl font-bold text-gray-800 mt-2">We Are Here To Serve You</h4>
        </div>
        <p class="text-gray-600 text-base leading-relaxed mb-6">
          Established in 1999 with a group of professionals, ATCL (Advance 
          Technology Consortium Ltd.) supplies, develops and manufactures a 
          comprehensive range of products for Engineering Education, Industry, 
          Research Laboratory and Different Govt. &amp; Non-Govt. organizations. 
          ATCL is a well-known company and has built a good reputation as a leading
          provider of Technical Teaching Equipments &amp; Machineries for 
          Universities, Engineering, Science &amp; Technology Universities, 
          Polytechnic Institutes, Technical School &amp; Colleges; Research &amp; 
          Laboratory Equipments for Research Organizations &amp; Agricultural 
          Universities; Testing &amp; Manufacturing Equipments &amp; Machineries 
          for Manufacturing Industries and Land Survey…
        </p>
        <a href="https://atcbd.net/aboutus" class="inline-block  bg-[#E0581E] text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">See Details</a>
      </div>
    </div>

    {/* <!-- Right Image --> */}
    <div class="w-full lg:w-1/2">
      <div class="rounded-lg overflow-hidden shadow-lg">
        <img src="https://i.ibb.co/C3R8RhDK/about-img-11.jpg " alt="About ATCL" class="w-full   object-cover"/>
      </div>
    </div>

  </div>
</div>

          </div>
     );
};

export default CompanyOverview;