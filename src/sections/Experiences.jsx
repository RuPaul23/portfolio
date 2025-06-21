import { Timeline } from "../components/Timeline";
import { experiences } from "../constants/index";
const Experiences = () => {
  return (
    <section className="c-space pt-12 pb-4 md:pt-16 md:pb-4 section-spacing" id="work-experience">
      <div className="w-full">
        <Timeline data={experiences} />
      </div>
    </section>
  );
};

export default Experiences;
