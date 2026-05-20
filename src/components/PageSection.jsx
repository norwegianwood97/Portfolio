export default function PageSection({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className="relative isolate overflow-hidden bg-navy-950 text-white"
    >
      <img
        src={`${import.meta.env.BASE_URL}assets/home-ai-engineer.png`}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/45" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-navy-950 to-transparent" />

      <div
        className={`section-shell min-h-[calc(100vh-5.5rem)] py-16 sm:py-20 lg:py-24 ${className}`}
      >
        {children}
      </div>
    </section>
  );
}
