import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "auth0",
    "blazor",
    "cplusplus",
    "csharp",
    "css3",
    "dotnet",
    "dotnetcore",
    "git",
    "html5",
    "javascript",
    "microsoft",
    "react",
    "sqlite",
    "tailwindcss",
    "vitejs",
    "wordpress",
  ];
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 853;
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40} pauseAnimation={isMobile}>
        {skills.map((skill, index) => (
          <Icon
            key={index}
            src={`assets/logos/${skill}.svg`}
            disableHover={isMobile}
          />
        ))}
      </OrbitingCircles>
      <OrbitingCircles
        iconSize={25}
        radius={100}
        reverse
        speed={2}
        pauseAnimation={isMobile}
      >
        {skills.slice().reverse().map((skill, index) => (
          <Icon
            key={index}
            src={`assets/logos/${skill}.svg`}
            disableHover={isMobile}
          />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, disableHover }) => (
  <img
    src={import.meta.env.BASE_URL + src}
    className={
      "duration-200 rounded-sm" + (disableHover ? "" : " hover:scale-110")
    }
    style={disableHover ? { pointerEvents: "none" } : {}}
  />
);
