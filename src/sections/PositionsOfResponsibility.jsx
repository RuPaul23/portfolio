const positions = [
  {
    title: "GDSC Flutter Lead",
    organization: "Google Developer Student Clubs",
    points: [
      "Led a team of 30+ students to build and deploy Flutter apps for campus and community projects.",
      "Organized workshops and hackathons, increasing Flutter adoption by 200% among peers.",
      "Mentored junior developers and fostered a collaborative learning environment."
    ],
    icon: import.meta.env.BASE_URL + "assets/logos/google.png"
  },
  {
    title: "MLSA Lead",
    organization: "Microsoft Learn Student Ambassadors",
    points: [
      "Coordinated technical events and webinars on Azure, .NET, and AI for 100+ students.",
      "Collaborated with Microsoft professionals to deliver hands-on learning experiences.",
      "Promoted diversity and inclusion in tech through outreach and mentorship."
    ],
    icon: import.meta.env.BASE_URL + "assets/logos/microsoft.svg"
  }
];

const PositionsOfResponsibility = () => (
  <section className="c-space pt-12 pb-4 md:pt-16 md:pb-4" id="positions-of-responsibility">
    <h2 className="text-heading mb-8">Positions of Responsibility</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {positions.map((pos, idx) => (
        <div key={idx} className="rounded-2xl bg-primary/40 backdrop-blur-md shadow-lg glassmorphism p-6 flex flex-col gap-4 border border-white/10">
          <div className="flex items-center gap-4 mb-2">
            <img src={pos.icon} alt={pos.title} className="w-10 h-10" />
            <div>
              <h3 className="text-xl font-semibold text-white">{pos.title}</h3>
              <p className="text-neutral-400 text-sm">{pos.organization}</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-neutral-300 pl-2">
            {pos.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default PositionsOfResponsibility;
