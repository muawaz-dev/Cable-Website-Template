export default function SecurityCamera() {
  return (
    <section className="bg-white">
      <div>
        {/* Main Heading */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
          Security Camera Systems in Denver: Choosing the Best Surveillance Solution for Your Business
        </h2>

        {/* Intro Paragraph */}
        <p className="text-md text-gray-700 mb-8">
          When it comes to protecting your business, choosing the right security camera system is essential.
          Many Colorado businesses rely on CCTV and IP surveillance systems to monitor activity, deter crime,
          and improve safety. Harden Communications provides professional installation of both CCTV and IP
          security systems, helping Denver-area businesses select the solution that best matches their security needs.
        </p>

        {/* Subheading */}
        <h3 className="text-2xl font-semibold text-primary mb-4">
          CCTV vs. IP Security Systems: What’s the Difference?
        </h3>

        {/* Subsection: CCTV */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            CCTV Security Systems (Traditional Closed-Circuit Systems)
          </h4>
          <p className="text-gray-700 mb-6">
            CCTV systems use a hard-wired connection that sends video signals directly to a DVR. These cameras are
            analog-based and do not rely on an internet or cellular connection, making them useful in environments
            where a simple, closed-loop surveillance system is sufficient.
          </p>

          <p className="text-gray-700">
            CCTV camera systems have improved in quality in recent years, but they generally offer lower resolution,
            fewer features, and limited scalability compared to modern IP systems. Because they are not encrypted,
            traditional CCTV setups are more vulnerable to tampering, making them better suited for low-risk applications
            where ultra-high detail or remote access is not required.
          </p>
        </div>

        {/* Subsection: IP Security Systems */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            IP Security Systems (Modern Internet Protocol Cameras)
          </h4>
          <p className="text-gray-700 mb-4">
            IP camera systems run over a LAN network and can operate as wired or wireless systems. These advanced cameras offer a wide range of high-end features, including:
          </p>

          <ul className="list-disc pl-5 text-gray-700 mb-4">
            <li>HD and 4K video resolution</li>
            <li>Remote monitoring from any device</li>
            <li>Digital zoom and advanced focusing</li>
            <li>Smart motion detection</li>
            <li>Better performance in varying light conditions</li>
            <li>Stronger encryption and enhanced security</li>
          </ul>

          <p className="text-gray-700">
            Because of their clarity, scalability, and intelligent features, IP security 
            camera systems are the preferred choice for businesses with higher security 
            requirements, larger environments, or the need for detailed surveillance footage.
          </p>
        </div>
      </div>
    </section>
  );
}