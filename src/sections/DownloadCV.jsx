const DownloadCV = () => (
  <section className="c-space flex flex-col items-center justify-center mb-10 md:mb-16" id="download-cv">
    <div className="flex flex-col items-center justify-center max-w-md w-full p-5 mx-auto border border-white/10 rounded-2xl bg-primary/40 backdrop-blur-md shadow-lg glassmorphism">
      <div className="flex flex-col items-start w-full gap-5 mb-4">
        <h2 className="text-heading text-center w-full">Want to know more?</h2>
        <p className="subtext text-center max-w-sm w-full">
          Download my CV to get a detailed overview of my experience, skills, and projects. Let's connect and create something amazing together!
        </p>
      </div>
      <a
        href="assets/cv/Rohit_Paul_(CV).pdf"
        download
        className="px-8 py-3 text-lg text-white bg-indigo rounded-lg shadow-lg hover:bg-royal transition-colors duration-200 font-semibold mt-2 w-full text-center"
      >
        Download CV
      </a>
    </div>
  </section>
);

export default DownloadCV;
