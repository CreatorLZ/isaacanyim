import React from "react";
import InfiniteSlider from "./InfiniteSlider";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Owner",
    company: "TechFlow Solutions",
    image: "/images/avatar1.jpg",
    content:
      "Isaac delivered an exceptional web application that exceeded our expectations. His expertise in React and attention to responsive design made our project a huge success. His ability to translate complex requirements into elegant solutions is remarkable.",
  },
  {
    id: 2,
    name: "Stephen cherewore",
    role: "Startup Founder",
    company: "InnovateX",
    image: "/images/avatar2.jpg",
    content:
      "Working with Isaac was a game-changer for our startup. His full-stack development skills and understanding of modern web technologies helped us launch our MVP ahead of schedule. His code is clean, well-documented, and highly maintainable.",
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Digital Marketer",
    company: "GrowthLabs",
    image: "/images/avatar3.jpg",
    content:
      "Isaac's expertise in building fast, SEO-friendly web applications has significantly improved our online presence. His work resulted in a 40% increase in our website's performance metrics.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-transparent py-12 lg:pt-36 lg:pb-6">
      <p className="text-center font-bold text-xl md:text-4xl pb-8 text-text-primary">
        Testimonials
      </p>
      <InfiniteSlider
        duration={30}
        durationOnHover={120}
        gap={24}
        className="py-6"
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="max-w-[360px] p-6 rounded-xl bg-surface border border-border shadow-sm hover:border-text-muted transition-all duration-200"
          >
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              {testimonial.content}
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div>
                <h3 className="text-text-primary font-semibold">{testimonial.name}</h3>
                <p className="text-text-muted text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
};

export default Testimonials;
