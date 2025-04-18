"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Cog, Layers, Palette } from "lucide-react";

const TimelineItem = ({
  title,
  content,
  viewLink = null,
  index,
  isLast,
  icon: Icon,
}) => {
  return (
    <motion.div
      className="flex gap-6 relative lg:px-10 lg:py-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center relative">
        <div className="w-5 h-5 rounded-full bg-white border-2 border-gray-700 z-10"></div>
        {/* Vertical line connecting to the next dot */}
        <div className="absolute top-5 left-2.5 w-0.5 bg-gray-700 h-[calc(100%+1rem)]"></div>
      </div>

      {/* Content */}
      <div className="pb-16 flex-1">
        <div className="lg:flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold">{title}</h3>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="text-gray-700"
            >
              {title === "Engineering" && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <Icon size={20} />
                </motion.div>
              )}
              {title === "Product" && (
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-2, 0, -2] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Icon size={20} />
                </motion.div>
              )}
              {title === "Design" && (
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  animate={{
                    scale: [1, 1.1, 1],
                    color: ["#374151", "#6366F1", "#374151"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Icon size={20} />
                </motion.div>
              )}
            </motion.div>
          </div>
          {viewLink && (
            <Link
              href={viewLink.url}
              className="text-sm underline "
              target="_blank"
              rel="noopener noreferrer"
            >
              {viewLink.text}
            </Link>
          )}
        </div>
        <p className="text-gray-700 text-sm leading-loose">{content}</p>
      </div>
    </motion.div>
  );
};

export default function Timeline() {
  const timelineItems = [
    {
      title: "Engineering",
      content:
        "First impressions matter tremendously in the digital world, and a well-crafted website is often the first point of contact. In my development journey, I've learned that exceptional websites blend seamless functionality with attractive design. As a fullstack developer proficient in JavaScript, TypeScript, and React, I approach technical challenges with confidence while ensuring the frontend remains visually appealing and intuitive. My experience with modern frameworks like Next.js and state management solutions (Redux, Zustand) allows me to create responsive, high-performance applications that follow industry best practices. Each project I build is optimized for both user experience and technical excellence.",
      viewLink: {
        text: "View Github",
        url: "https://github.com/CreatorLZ",
      },
      icon: Cog,
    },
    {
      title: "Product",
      content:
        "While my primary expertise is in development, I've naturally evolved to understand product development through my work on projects. I've developed skills in translating client needs into technical solutions. My analytical approach helps me balance technical constraints with product vision, ensuring that features serve real user needs. When working with clients as a freelancer, I've consistently improved conversion rates by focusing on both functionality and business goals, helping products grow from concept to successful implementation.",
      viewLink: {
        text: "View Products",
        url: "/#projects",
      },
      icon: Layers,
    },
    {
      title: "Design",
      content:
        "I approach design from a functional and aesthetic perspective, focusing on creating intuitive user experiences delivered with stunning aesthetics. While I may not have a traditional design background or Dribbble portfolio, I've developed a strong eye for effective UI/UX through hands-on development. My projects demonstrate this balance. I consistently prioritize clean layouts, intuitive navigation, and performance optimization to ensure designs not only look good but also work effectively for users.",
      icon: Palette,
    },
  ];

  return (
    <div className="w-full pt-12">
      <div className="relative">
        {timelineItems.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            content={item.content}
            viewLink={item.viewLink}
            index={index}
            icon={item.icon}
            isLast={index === timelineItems.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
