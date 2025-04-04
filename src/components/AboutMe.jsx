// import React from "react";
// import techskills from "../assets/techskills.png"; // Replace with actual image
// import softskill from "../assets/softskill.jpg"; // Replace with actual image

// const AboutMe = () => {
//   return (
//     <section id="about" className="bg-gray-800 text-white py-25 px-6 pt-20">
//       <div className="container mx-auto">
//         {/* Main Grid */}
//         <div className="grid md:grid-cols-2 gap-10 items-center">
          
//           {/* Left Side - About & Skills */}
//           <div>
//             <h2 className="text-4xl font-extrabold text-blue-400 mb-4">About Me</h2>
//             <p className="text-gray-300 leading-relaxed mb-6 text-justify">
//               I am a passionate Frontend Developer with a B.Tech in Computer Science, 
//               specializing in building modern, high-performance web and mobile applications. 
//               With expertise in React, React Native, and Tailwind CSS, I develop intuitive 
//               and responsive user interfaces that enhance the user experience.
//               <br /><br />
//               I am highly adaptable and a fast learner, quickly mastering new technologies 
//               and frameworks to stay ahead in the rapidly evolving tech landscape. Whether 
//               working independently or within a team, I approach challenges with a problem-solving 
//               mindset and a strong commitment to continuous improvement.
//             </p>

//             {/* Skills Grid */}
//             <div className="grid grid-cols-2 gap-6 mt-6">
//               {/* Framework */}
//               <div className="p-4 bg-gray-600 rounded-lg shadow-md text-center">
//                 <h3 className="text-xl font-semibold text-blue-400">Framework</h3>
//                 <p className="text-gray-300 mt-2">React.js & React Native</p>
//               </div>

//               {/* CMS */}
//               <div className="p-4 bg-gray-600 rounded-lg shadow-md text-center">
//                 <h3 className="text-xl font-semibold text-green-400">CMS</h3>
//                 <p className="text-gray-300 mt-2">WordPress</p>
//               </div>

//               {/* Version Control */}
//               <div className="p-4 bg-gray-600 rounded-lg shadow-md text-center">
//                 <h3 className="text-xl font-semibold text-yellow-400">Version Control</h3>
//                 <p className="text-gray-300 mt-2">GitHub</p>
//               </div>

//               {/* Soft Skills */}
//               <div className="p-4 bg-gray-600 rounded-lg shadow-md text-center">
//                 <h3 className="text-xl font-semibold text-purple-400">Soft Skills</h3>
//                 <p className="text-gray-300 mt-2">
//                   Communication, Leadership, Problem Solving, Teamwork, Adaptability
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Images */}
//           <div className="grid gap-8 pt-6 place-items-center">
//             <img src={techskills} alt="Tech Skills" className="w-72 h-60 rounded-lg shadow-lg" />
//             <img src={softskill} alt="Soft Skills" className="w-72 h-60 rounded-lg shadow-lg" />
//           </div>
//         </div>

//         {/* Experience & Learning Journey Section */}
//         <div className="mt-16">
//           <h2 className="text-3xl font-bold text-gray-300 text-center">My Experience & Learning Journey</h2>
//           <hr className="w-24 border-2 border-gray-500 mx-auto my-4" />

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//             {/* Frontend Development */}
//             <div className="bg-gray-800 p-6 rounded-lg shadow-md">
//               <h4 className="text-lg font-semibold text-yellow-400">Frontend Development (2022-2023)</h4>
//               <p className="text-gray-300 mt-2">
//                 Started as a frontend developer, building interactive web pages using **HTML, CSS, and JavaScript**.
//               </p>
//             </div>

//             {/* React.js Exploration */}
//             <div className="bg-gray-800 p-6 rounded-lg shadow-md">
//               <h4 className="text-lg font-semibold text-green-400">React.js Exploration (2022-2023)</h4>
//               <p className="text-gray-300 mt-2">
//                 Developed scalable **React.js** applications with enhanced UI/UX design.
//               </p>
//             </div>

//             {/* Backend & Databases */}
//             <div className="bg-gray-800 p-6 rounded-lg shadow-md">
//               <h4 className="text-lg font-semibold text-blue-400">Backend & Databases (2022-2023)</h4>
//               <p className="text-gray-300 mt-2">
//                 Worked with **MySQL & Node.js**, creating **REST APIs** and managing databases.
//               </p>
//             </div>

//             {/* WordPress & CMS */}
//             <div className="bg-gray-800 p-6 rounded-lg shadow-md">
//               <h4 className="text-lg font-semibold text-red-400">WordPress & CMS (2023-2024)</h4>
//               <p className="text-gray-300 mt-2">
//                 Built & customized **WordPress** websites for various clients, focusing on SEO & UI design.
//               </p>
//             </div>

//             {/* React Native Development */}
//             <div className="bg-gray-800 p-6 rounded-lg shadow-md">
//               <h4 className="text-lg font-semibold text-purple-400">React Native Development (2023-2024)</h4>
//               <p className="text-gray-300 mt-2">
//                 Worked on **Hungreli** food delivery app, implementing authentication, **Google Maps API**, and restaurant listings.
//               </p>
//             </div>

//             {/* CI/CD & Deployment */}
//             <div className="bg-gray-800 p-6 rounded-lg shadow-md">
//               <h4 className="text-lg font-semibold text-orange-400">CI/CD & Deployment</h4>
//               <p className="text-gray-300 mt-2">
//                 Implemented **CI/CD pipelines**, automated deployments with GitHub Actions, and containerized apps using **Docker**.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;
import React from "react";
import { motion } from "framer-motion";
import techskills from "../assets/techskills.png";
import softskill from "../assets/softskill.jpg";

const AboutMe = () => {
  return (
    <section id="about" className="bg-gray-800 text-white py-20 px-6">
      <div className="container mx-auto">
        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Side - About & Skills */}
          <div>
            <h2 className="text-4xl font-extrabold text-blue-400 mb-4">About Me</h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-justify">
              I am a passionate Frontend Developer with a B.Tech in Computer Science, 
              specializing in building modern, high-performance web and mobile applications. 
              With expertise in React, React Native, and Tailwind CSS, I develop intuitive 
              and responsive user interfaces that enhance the user experience.
              <br /><br />
              I am highly adaptable and a fast learner, quickly mastering new technologies 
              and frameworks to stay ahead in the rapidly evolving tech landscape. Whether 
              working independently or within a team, I approach challenges with a problem-solving 
              mindset and a strong commitment to continuous improvement.
            </p>

            {/* Skills Grid with Zoom Effect */}
            <motion.div 
              className="grid grid-cols-2 gap-6 mt-6"
              whileHover={{ scale: 1.02 }} // Slight zoom on grid hover
            >
              {[
                { title: "Framework", skill: "React.js & React Native", color: "text-blue-400" },
                { title: "CMS", skill: "WordPress", color: "text-green-400" },
                { title: "Version Control", skill: "GitHub", color: "text-yellow-400" },
                { title: "Soft Skills", skill: "Communication, Leadership, Teamwork", color: "text-purple-400" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-gray-600 rounded-lg shadow-md text-center"
                  whileHover={{ scale: 1.1 }} // Zoom-in effect on each card
                >
                  <h3 className={`text-xl font-semibold ${item.color}`}>{item.title}</h3>
                  <p className="text-gray-300 mt-2">{item.skill}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Images */}
          <div className="grid gap-8 pt-6 place-items-center">
            <motion.img 
              src={techskills} 
              alt="Tech Skills" 
              className="w-72 h-60 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }} // Slight zoom on hover
            />
            <motion.img 
              src={softskill} 
              alt="Soft Skills" 
              className="w-72 h-60 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }} // Slight zoom on hover
            />
          </div>
        </div>

        {/* Experience & Learning Journey Section */}
        <motion.div 
          className="mt-16 bg-gray-800 p-8 rounded-lg shadow-lg"
          whileHover={{ scale: 1.02 }} // Slight zoom effect on hover
        >
          <h2 className="text-3xl font-bold text-gray-300 text-center">My Experience & Learning Journey</h2>
          <hr className="w-24 border-2 border-gray-500 mx-auto my-4" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[
              { title: "Frontend Development", date: "2022-2023", description: "Started as a frontend developer, building interactive web pages using HTML, CSS, and JavaScript.", color: "text-yellow-400" },
              { title: "React.js Exploration", date: "2022-2023", description: "Developed scalable React.js applications with enhanced UI/UX design.", color: "text-green-400" },
              { title: "Backend & Databases", date: "2022-2023", description: "Worked with MySQL & Node.js, creating REST APIs and managing databases.", color: "text-blue-400" },
              { title: "WordPress & CMS", date: "2023-2024", description: "Built & customized WordPress websites for various clients, focusing on SEO & UI design.", color: "text-red-400" },
              { title: "React Native Development", date: "2023-2024", description: "Worked on Hungreli food delivery app, implementing authentication, Google Maps API, and restaurant listings.", color: "text-purple-400" },
              { title: "CI/CD & Deployment", date: "2024", description: "Implemented CI/CD pipelines, automated deployments with GitHub Actions, and containerized apps using Docker.", color: "text-orange-400" }
            ].map((exp, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }} // Zoom effect on hover
              >
                <h4 className={`text-lg font-semibold ${exp.color}`}>{exp.title} ({exp.date})</h4>
                <p className="text-gray-300 mt-2">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
