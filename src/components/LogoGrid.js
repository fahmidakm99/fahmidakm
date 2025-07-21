import React from "react";

const skills = [
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Ionic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Java Script", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

const LogoGrid = () => {
  return (
    <div className="max-w-6xl mx-auto mt-16 px-4">
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map(({ name, icon }, index) => (
          <div
            key={index}
            className="
              w-24 flex flex-col items-center
            "
          >
            <div
              className="
                w-24 h-24 rounded-full overflow-hidden 
                bg-white shadow-lg
                flex items-center justify-center
                transition-transform duration-300
                hover:scale-110
                hover:shadow-2xl
              "
              style={{
                boxShadow:
                  "inset 0 4px 6px rgba(255,255,255,0.6), 0 4px 10px rgba(0,0,0,0.15)",
              }}
            >
              <img
                src={icon}
                alt={`${name} logo`}
                className="w-16 h-16 object-contain"
                loading="lazy"
                draggable={false}
              />
            </div>
            <p className="mt-2 text-sm text-center text-white font-semibold select-none uppercase">
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;
