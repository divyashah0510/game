import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-500 text-white text-center py-8">
        <h1 className="text-4xl font-bold">About Our Company</h1>
      </header>

      {/* Information Section */}
      <section className="container mx-auto my-8 px-4">
        <p className="text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris
          nec est tristique posuere eget id velit. Nullam efficitur odio et
          luctus sodales. Aliquam sit amet suscipit nulla. Fusce et ante urna.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Aenean auctor nulla vel lorem pharetra, nec fermentum turpis
          ullamcorper. Vivamus efficitur mauris ac placerat condimentum.
        </p>
      </section>

      {/* Image Section */}
      <section className="container mx-auto my-8">
        <div className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Company"
            className="w-full"
          />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto my-8">
        {/* Your timeline UI */}
      </section>

      {/* Customer Reviews Section */}
      <section className="container mx-auto my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Customer Review Cards */}
          {/* Example */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
            <p className="text-lg mb-4">
              "Great service and amazing products! Would definitely recommend."
            </p>
            <p className="text-sm font-bold">- John Doe</p>
          </div>
          {/* Add more customer review cards as needed */}
        </div>
      </section>
    </div>
  );
};

export default About;
