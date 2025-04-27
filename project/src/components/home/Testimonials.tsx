import React from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, role, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{quote}"</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "As a new freelancer, I struggled to get noticed on other platforms. FairLance's New Talent Boost feature gave me the visibility I needed to land my first clients.",
      name: "Sarah Johnson",
      role: "Web Developer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      quote: "The blind bidding system is brilliant. My proposals get evaluated on merit, not just on how many years I've been in the industry. It's truly a fair opportunity.",
      name: "Michael Chen",
      role: "Graphic Designer",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      quote: "As a client, I've discovered amazing talent I might have overlooked on other platforms. The focus on skills over ratings has helped me find the perfect match every time.",
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from freelancers and clients who have found success on our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;