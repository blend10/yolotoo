"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HandTap } from "lucide-react"; // Optional: You can import an icon if you have lucide-react, or use an SVG

const TeamGrid2 = () => {
  const [activeId, setActiveId] = useState(null);

  const handleCardClick = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const teamMembers = [
    {
      id: 1,
      name: "Eden Visser",
      role: "Stewardess",
      image: "/images/person11.png",
      bio: "Stewardess Eden Visser brings a polished blend of professionalism, hospitality expertise, and guest-focused service to m/y Pier Pressure, ensuring an exceptional experience for week-long charters in the Bahamas. With recent experience as 2nd Stewardess aboard both private and busy charter motor yachts up to 43 meters, Eden has honed her skills in fine dining service, themed event coordination, cocktail preparation, and guest activity planning.",
    },
    {
      id: 2,
      name: "Duvan Stander",
      role: "Captain",
      image: "/images/person22.png",
      bio: "Captain Duvan Stander brings an impressive combination of technical expertise, hands-on seamanship, and charter-focused professionalism to m/y Pier Pressure, making him exceptionally well-suited to lead week-long charters throughout the Bahamas. With over five years of progressively senior yachting experience—including First Mate/Engineer roles on 30m and 42m yachts—Duvan has built a strong foundation that blends navigation, engineering, tender operations, and guest-facing service.",
    },
    {
      id: 3,
      name: "",
      role: "",
      image: "",
      bio: "",
    },
    {
      id: 4,
      name: "Michael Warren-Smith",
      role: "Chief engineer",
      image: "/images/person33.png",
      bio: "Engineer Michael Warren-Smith brings a rare blend of technical skill, hospitality training, and hands-on marine experience to m/y Pier Pressure, ensuring smooth, reliable, and guest-focused week-long charters throughout the Bahamas. With a foundation built on years of working with jet skis, boats, motorbikes, and cars, Michael has developed strong troubleshooting instincts and a talent for preventative maintenance skills strengthened through his roles as Engineer/Deckhand aboard vessels ranging from 20m to 40m, including A Salt Weapon, Chapter 3, King of Fun, and Tehiya.",
    },
    {
      id: 5,
      name: "Enrique Gonzalez",
      role: "Chef",
      image: "/images/person44.png",
      bio: "Chef Enrique Gonzalez brings over 15 years of high-level culinary expertise to m/y Pier Pressure, delivering an exceptional dining experience that elevates every week-long charter in the Bahamas. Trained in international gastronomy with advanced certifications in high cuisine, bakery, and pastry, Enrique has served as Head or Sole Chef aboard luxury yachts up to 160 feet—including M/Y Clarity, M/Y Mercy, M/Y Amica, and M/Y Maje—where he mastered provisioning, menu customization, galley management, and high-standard food safety.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-24">
      <div className="max-w-450 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Text Column */}
        <div className="lg:pr-8 mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl font-medium text-[#002b45] mb-6">
            The People Behind the Experience
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            A carefully selected team of professionals committed to discretion,
            attention to detail and seamless service.
          </p>
        </div>

        {/* Team Members Grid */}
        {teamMembers.map((member) => {
          if (member.id === 3) {
            return (
              <div
                key={member.id}
                // Changed height here too for consistency, though hidden on mobile
                className="w-full h-[520px] md:h-[750px] hidden lg:block"
              ></div>
            );
          }

          const isActive = activeId === member.id;

          return (
            <div
              key={member.id}
              onClick={() => handleCardClick(member.id)}
              // CHANGED: h-[500px] on mobile, h-[750px] on desktop
              className="group relative w-full h-[420px] md:h-[750px] rounded-2xl overflow-hidden cursor-pointer shadow-lg bg-gray-100"
            >
              <div
                className={`w-full h-full transition-transform duration-500 ${
                  isActive ? "scale-105" : "group-hover:scale-105"
                }`}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              {/* --- MOBILE HINT (Tap to see more) --- */}
              <div
                className={`absolute top-4 right-4 lg:hidden z-20 transition-opacity duration-300 ${
                  isActive ? "opacity-0" : "opacity-100"
                }`}
              >
                <span className="bg-black/30 backdrop-blur-md text-white/90 text-[10px] font-medium tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  TAP FOR INFO
                </span>
              </div>

              {/* Default Overlay */}
              <div
                className={`absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 z-10 ${
                  isActive ? "opacity-0" : "group-hover:opacity-0"
                }`}
              >
                <h3 className="text-white text-xl font-medium">
                  {member.name}
                </h3>
                <p className="text-gray-300 text-sm uppercase tracking-wide">
                  {member.role}
                </p>
              </div>

              {/* Hover/Active Overlay */}
              <div
                className={`absolute inset-0 bg-[#002b45]/60 p-8 flex flex-col justify-end transition-transform duration-500 ease-in-out z-20 ${
                  isActive
                    ? "translate-y-0"
                    : "translate-y-full group-hover:translate-y-0"
                }`}
              >
                <p
                  className={`text-gray-200 text-[12px] md:text-sm leading-relaxed mb-4 transition-opacity duration-500 delay-100 ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {member.bio}
                </p>
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
          );
        })}
      </div>
    </section>
  );
};

export default TeamGrid2;
