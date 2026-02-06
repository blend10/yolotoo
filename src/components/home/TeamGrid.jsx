import React from "react";
import Image from "next/image";

const TeamGrid = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Javi",
      role: "Captain",
      image: "/images/person1.jpg",
    },
    {
      id: 2,
      name: "Kathe",
      role: "Stewardess",
      image: "/images/person2.jpg",
    },
    {
      id: 3,
      name: "Moises",
      role: "Chef",
      image: "/images/person3.jpg",
    },
    {
      id: 4,
      name: "Hamza",
      role: "Stewardess",
      image: "/images/person4.jpg",
    },
    {
      id: 5,
      name: "Diego",
      role: "Engineer",
      image: "/images/person5.jpg",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-24">
      <div className="max-w-450 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Text Column (Static) */}
        <div className="lg:pr-8 mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl font-medium text-[#002b45] mb-6">
            The People Behind the Experience
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            A carefully selected team of professionals committed to discretion,
            attention to detail and seamless service. From navigation to
            cuisine, every role is focused on delivering a refined yachting
            experience.
          </p>
        </div>

        {/* Team Members Grid (Static Display) */}
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            // CHANGED: h-[500px] on mobile, h-[750px] on desktop (md and up)
            className="relative w-full h-[420px] md:h-[750px] rounded-2xl overflow-hidden shadow-lg bg-gray-100"
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              // HIGH FIDELITY SIZES STRATEGY:
              // Mobile/Tablet (1 col): Request full 100vw width
              // Desktop (3 cols): Request 50vw (instead of 33vw) to ensure crispness on Retina screens
              sizes="(max-width: 1024px) 100vw, 50vw"
              // Max quality to remove blur/artifacts
              quality={100}
              // Load the first 2 images immediately (optimization for 'above the fold')
              priority={index < 2}
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#002b45]/90 via-transparent to-transparent flex flex-col justify-end p-8 z-10">
              {member.bio && (
                <p className="text-gray-200 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
              )}

              <div className="border-t border-gray-500 pt-4">
                <h3 className="text-white text-xl font-medium">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm uppercase tracking-wide">
                  {member.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamGrid;
