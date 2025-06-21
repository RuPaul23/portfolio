import { skills } from "../constants";
import Marquee from "../components/Marquee";

const SkillCard = ({ img, name }) => (
  <figure className="relative h-full w-48 flex flex-col items-center justify-center rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation mx-2">
    <img src={img} alt={name} className="w-16 h-16 object-contain mb-2" />
    <figcaption className="text-base font-medium text-white text-center">{name}</figcaption>
  </figure>
);

export default function Skills() {
  return (
    <div className="items-start mt-2 md:mt-4 c-space">
      <h2 className="text-heading mb-2">My Skills & Tools</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-0 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {skills.slice().reverse().map((skill) => (
            <SkillCard key={skill.name + "-rev"} {...skill} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
