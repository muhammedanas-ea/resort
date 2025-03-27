const FAQ = () => {
  const faqs = [
    {
      question: "What makes your resort unique?",
      answer:
        "Our resort combines luxury amenities with sustainable practices, offering private villas with ocean views, personalized services, and exclusive access to protected natural areas.",
    },
    {
      question: "What activities are included in the stay?",
      answer:
        "Guests enjoy daily yoga sessions, snorkeling tours, cultural workshops, and access to our infinity pools. Premium activities like spa treatments and private boat tours are available at additional cost.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "We offer flexible cancellation up to 7 days before arrival. Late cancellations receive 50% credit toward future stays. Please review our booking terms for complete details.",
    },
    {
      question: "Do you offer family-friendly accommodations?",
      answer:
        "Yes, we have family villas with connecting rooms, children's pools, and a kids' club with daily activities. Baby-sitting services can be arranged upon request.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20" aria-label="FAQ Section">
      <div className="container mx-auto px-4 lg:px-8 ">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="mb-8 w-24 border-t-2 border-[#B59D71]" />
          <h2 className="text-lg uppercase tracking-[0.3em] text-[#B59D71] mb-4">
            Guest Support
          </h2>
          <h1 className="text-3xl md:text-4xl playfair font-normal leading-tight">
            Frequently Asked Questions
          </h1>
        </div>

        {/* FAQ Grid */}
        <div className="grid gap-5 md:grid-cols-1">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group border border-[#B59D71]  rounded-lg p-6   transition-all duration-300"
            >
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <span className="flex-shrink-0 ml-2 text-[#B59D71] transform group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
