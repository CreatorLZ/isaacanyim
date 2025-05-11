// import React from 'react'

// const Featuredold = () => {
//   return (
//    {/* About Two Column Layout on Desktop */}
//       <motion.section
//         className={`container mx-auto px-4 py-2 lg:py-2 hidden ${montserrat.className}`}
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Left Column */}
//           <motion.div
//             className="w-full lg:w-[45%] flex flex-col gap-6"
//             variants={columnVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             {/* "Learn more about me" Section */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               <Link href="/about" className="block w-full backdrop-blur-md">
//                 <motion.div
//                   className="border-2 border-gray-200 rounded-lg overflow-hidden relative group transition-all duration-300 hover:shadow-lg"
//                   whileHover={{
//                     boxShadow:
//                       "0 10px 15px -3px rgba(120, 86, 255, 0.3), 0 4px 6px -2px rgba(120, 86, 255, 0.2)",
//                   }}
//                 >
//                   {/* Gradient overlay on hover */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#7856ff]/0 group-hover:to-[#7856ff]/20 transition-all duration-500 z-10"></div>

//                   <div className="flex flex-col md:flex-row gap-6 p-6">
//                     <div className="md:w-1/2 z-20 lg:text-left text-center flex flex-col justify-center gap-2">
//                       <p className="text-lg font-bold lg:text-left text-center text-black ">
//                         Learn more about me
//                       </p>

//                       <p className="text-base ">Hello Hello!</p>
//                       <p className="text-base ">
//                         I'm Isaac, an experienced software developer.
//                       </p>
//                     </div>
//                     <div className="md:w-1/2 flex justify-center relative">
//                       {/* Picture frame styling */}
//                       <div className="relative w-48 h-48 overflow-visible">
//                         {/* Decorative frame */}
//                         <div className="absolute inset-0 border-2 border-gray-800 group-hover:border-primary rounded-lg  bg-white shadow-lg"></div>

//                         {/* Image container */}
//                         <div className="absolute inset-0 overflow-hidden rotate-3 transform transition-all duration-300 group-hover:rotate-6 group-hover:scale-105">
//                           <Image
//                             src={Isaac || "/placeholder.svg"}
//                             alt="Profile Image"
//                             quality={100}
//                             style={{ cursor: "pointer" }}
//                             placeholder="blur"
//                             blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMzoyuBwAD5gGgL5NkuQAAAABJRU5ErkJggg=="
//                             className="h-48 w-full object-cover rounded-lg"
//                           />
//                         </div>

//                         {/* Arrow icon that appears on hover */}
//                         <div className="absolute bottom-3 right-3 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                           <div className="bg-white p-2 rounded-full shadow-md">
//                             <ArrowRight className="w-4 h-4 text-[#7856ff]" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </Link>
//             </motion.div>

//             {/* "Toolbox" Section */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.1 }}
//               transition={{ duration: 0.8, delay: 0.8 }}
//             >
//               <motion.div
//                 className="backdrop-blur-md border-2 border-gray-200 rounded-lg p-6 py-[18px] overflow-hidden relative group transition-all duration-300 hover:shadow-lg"
//                 whileHover={{
//                   boxShadow:
//                     "0 10px 15px -3px rgba(120, 86, 255, 0.3), 0 4px 6px -2px rgba(120, 86, 255, 0.2)",
//                 }}
//               >
//                 {/* Gradient overlay on hover */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#7856ff]/0 group-hover:to-[#7856ff]/20 transition-all duration-500 z-10"></div>

//                 {/* Section Title */}
//                 {/* <h3 className="text-xl font-bold mb-6 text-left">
//                   My Qualities
//                 </h3> */}

//                 {/* Grid layout for qualities */}
//                 <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3">
//                   {frameworks.map((framework, index) => (
//                     <motion.div
//                       key={index}
//                       className="relative overflow-visible py-1 pl-0 " // Added padding to accommodate overlapping icon
//                       whileHover={{ scale: 1.03 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <div className="bg-white/20 rounded-lg p-2 shadow-md border border-gray-100 flex items-center text-left gap-4 h-full hover:shadow-lg transition-all duration-300 relative  group/item ">
//                         {/* 3D Icon Container with Perspective Effect */}
//                         <div
//                           className="absolute -top-0 -left-2 w-6 h-6 rounded-md overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#8A66FF] to-[#6644E0] transform group-hover/item:-rotate-12 transition-all duration-300 shadow-lg z-10"
//                           style={{ perspective: "1000px" }}
//                         >
//                           {/* Icon content remains the same */}
//                           <div className="absolute inset-0 w-full h-full bg-black opacity-20 rounded-tl-md"></div>
//                           <div className="absolute bottom-0 right-0 w-full h-1/2 bg-white opacity-10 rounded-br-md"></div>
//                           <div className="absolute -inset-2 bg-white/5 transform rotate-45 group-hover/item:rotate-90 transition-transform duration-500"></div>
//                           <div className="relative z-10 text-white transform group-hover/item:scale-110 transition-transform duration-300 drop-shadow-[0_0_3px_rgba(255,255,255,0.5)] flex items-center justify-center w-full h-full">
//                             {framework.icon}
//                           </div>
//                         </div>

//                         {/* Quality text - adjusted padding to accommodate icon */}
//                         <span className="font-medium text-xs text-gray-800 pl-6 group-hover/item:text-[#7856ff] transition-colors duration-300">
//                           {framework.name}
//                         </span>

//                         {/* Subtle animated corner decoration */}
//                         <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-[#7856ff]/0 to-[#7856ff]/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-tl-lg"></div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             </motion.div>
//           </motion.div>

//           {/* Right Column */}
//           <motion.div
//             className="w-full lg:w-[55%] flex flex-col gap-6"
//             variants={columnVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ delay: 0.3 }}
//           >
//             {/* "Services Section */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.8, delay: 0.8 }}
//             >
//               <Link href="/#contact" className="block w-full ">
//                 <motion.div
//                   className="border-2 border-gray-200 rounded-lg overflow-hidden relative group transition-all duration-300 hover:shadow-lg backdrop-blur-md py-[17px]"
//                   whileHover={{
//                     boxShadow:
//                       "0 10px 15px -3px rgba(120, 86, 255, 0.3), 0 4px 6px -2px rgba(120, 86, 255, 0.2)",
//                   }}
//                 >
//                   {/* Gradient overlay on hover */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#7856ff]/0 group-hover:to-[#7856ff]/20 transition-all duration-500 z-10"></div>

//                   <div className="p-3">
//                     <h2 className="text-2xl lg:text-3xl font-extrabold mb-0">
//                       How Can I Help?
//                     </h2>
//                     <p className="lg:mb-4 mb-6 lg:text-base text-xs font-medium">
//                       Let's turn your vision into something amazing.
//                     </p>

//                     {/* Services Grid Layout - */}
//                     <div className="grid grid-cols-2 md:grid-cols-2 gap-4 my-0">
//                       {/* Web Development Card */}
//                       <div className="rounded-lg overflow-hidden lg:p-4 p-2 hover:border-[#7856ff]/40 transition-all duration-300 shadow-md relative">
//                         <div className="h-32 relative rounded-md mb-3 flex items-center justify-center">
//                           <Image
//                             src={web1 || "/placeholder.svg"}
//                             alt="Profile Image"
//                             quality={100}
//                             style={{ cursor: "pointer" }}
//                             placeholder="blur"
//                             blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMzoyuBwAD5gGgL5NkuQAAAABJRU5ErkJggg=="
//                             className="absolute lg:h-24 lg:w-24 h-16 w-16 object-fill rounded-lg overflow-hidden -rotate-6 transform transition-all duration-300 group-hover:-rotate-12 group-hover:scale-105  group-hover:-translate-x-2 "
//                           />
//                           <Image
//                             src={code || "/placeholder.svg"}
//                             alt="Profile Image"
//                             quality={100}
//                             style={{ cursor: "pointer" }}
//                             placeholder="blur"
//                             blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMzoyuBwAD5gGgL5NkuQAAAABJRU5ErkJggg=="
//                             className="absolute lg:h-24 lg:w-24 h-16 w-16 object-fill rounded-lg overflow-hidden rotate-6 transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-105 group-hover:translate-x-2 top-[30px] right-[40px]"
//                           />
//                         </div>
//                         <h3 className="font-semibold lg:text-xs text-xs">
//                           Web Development
//                         </h3>
//                       </div>

//                       {/* Product Design Card */}
//                       <div className="rounded-lg overflow-hidden lg:p-4 p-2 hover:border-[#7856ff]/40 transition-all duration-300 shadow-md relative">
//                         <div className="h-32 relative rounded-md mb-3 flex items-center justify-center">
//                           <Image
//                             src={product2 || "/placeholder.svg"}
//                             alt="Profile Image"
//                             quality={100}
//                             style={{ cursor: "pointer" }}
//                             placeholder="blur"
//                             blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMzoyuBwAD5gGgL5NkuQAAAABJRU5ErkJggg=="
//                             className="absolute lg:h-24 lg:w-24 h-16 w-16 object-fill rounded-lg overflow-hidden -rotate-6 transform transition-all duration-300 group-hover:-rotate-12 group-hover:scale-105  group-hover:-translate-x-2 "
//                           />
//                           <Image
//                             src={product1 || "/placeholder.svg"}
//                             alt="Profile Image"
//                             quality={100}
//                             style={{ cursor: "pointer" }}
//                             placeholder="blur"
//                             blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMzoyuBwAD5gGgL5NkuQAAAABJRU5ErkJggg=="
//                             className="absolute lg:h-24 lg:w-24 h-16 w-16 object-fill rounded-lg overflow-hidden rotate-6 transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-105 group-hover:translate-x-2 top-[30px] right-[40px]"
//                           />
//                         </div>
//                         <h3 className="font-semibold lg:text-xs text-xs">
//                           Product Design
//                         </h3>
//                       </div>

//                       {/* Automation Card */}
//                       <div className="rounded-lg overflow-hidden lg:p-4 p-2 hover:border-[#7856ff]/40 transition-all duration-300 shadow-md relative">
//                         <div className="h-32 relative rounded-md mb-3 flex items-center justify-center">
//                           <Image
//                             src={automation4 || "/placeholder.svg"}
//                             alt="Profile Image"
//                             quality={100}
//                             style={{ cursor: "pointer" }}
//                             placeholder="blur"
//                             blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMzoyuBwAD5gGgL5NkuQAAAABJRU5ErkJggg=="
//                             className="absolute lg:h-24 lg:w-24 h-16 w-16 object-fill rounded-lg overflow-hidden -rotate-6 transform transition-all duration-300 group-hover:-rotate-12 group-hover:scale-105  group-hover:-translate-x-2 "
//                           />
//                           <Image
//                             src={automation3 || "/placeholder.svg"}
//                             alt="Profile Image"
//                             quality={100}
//                             style={{ cursor: "pointer" }}
//                             placeholder="blur"
//                             blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMzoyuBwAD5gGgL5NkuQAAAABJRU5ErkJggg=="
//                             className="absolute lg:h-24 lg:w-24 h-16 w-16 object-fill rounded-lg overflow-hidden rotate-6 transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-105 group-hover:translate-x-2 top-[30px] right-[40px]"
//                           />
//                         </div>
//                         <h3 className="font-semibold lg:text-xs text-xs">
//                           Workforce Automation
//                         </h3>
//                       </div>

//                       {/* Product Design Card */}
//                       <div className="rounded-lg overflow-hidden lg:p-4 p-2 hover:border-[#7856ff]/40 transition-all duration-300 shadow-md relative">
//                         <div className="h-32 relative rounded-md mb-3 flex items-center justify-center">
//                           <Image
//                             src={seo1 || "/placeholder.svg"}
//                             alt="Profile Image"
//                             quality={100}
//                             style={{ cursor: "pointer" }}
//                             placeholder="blur"
//                             blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMzoyuBwAD5gGgL5NkuQAAAABJRU5ErkJggg=="
//                             className="absolute lg:h-24 lg:w-24 h-16 w-16 object-fill rounded-lg overflow-hidden -rotate-6 transform transition-all duration-300 group-hover:-rotate-12 group-hover:scale-105  group-hover:-translate-x-2 "
//                           />
//                           <Image
//                             src={seo2 || "/placeholder.svg"}
//                             alt="Profile Image"
//                             quality={100}
//                             style={{ cursor: "pointer" }}
//                             placeholder="blur"
//                             blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMzoyuBwAD5gGgL5NkuQAAAABJRU5ErkJggg=="
//                             className="absolute lg:h-24 lg:w-24 h-16 w-16 object-fill rounded-lg overflow-hidden rotate-6 transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-105 group-hover:translate-x-2 top-[30px] right-[40px]"
//                           />
//                         </div>
//                         <h3 className="font-semibold lg:text-xs text-xs">
//                           SEO
//                         </h3>
//                       </div>
//                     </div>

//                     {/* Arrow icon that appears on hover */}
//                     <div className="absolute bottom-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <div className="bg-white p-2 rounded-full shadow-md">
//                         <ArrowRight className="w-4 h-4 text-[#7856ff]" />
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.section>
//   )
// }

// export default Featuredold
