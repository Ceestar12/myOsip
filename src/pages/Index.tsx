
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const points = [
  "Real-world experience for your students/alumni",
  "Portfolio-worthy project participation",
  "Exposure to mentorship and collaborative teamwork",
  "Access to Demo Day and potential hiring opportunities",
  "Branding & recognition as an OSIP Partner Institution",
];

const Index = () => {
  return (
    <div className="font-inter bg-brand-light min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full pt-10 px-2 pb-6 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Header Block */}
          <div className="mb-1">
            <div className="text-base font-semibold text-brand-navy uppercase tracking-wider mb-2">
              One-Shot Innovation Program <span className="text-brand-gold">(OSIP)</span>
            </div>
            <hr className="border-brand-navy/40 mb-3" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-3 leading-tight max-w-2xl">
              Partnership Deck for Tech Training Institutions
            </h1>
          </div>

          {/* Problem Statement */}
          <section className="mb-7">
            <div className="text-xl font-semibold text-brand-gold mb-1 mt-4">
              Problem Statement
            </div>
            <div className="text-brand-navy text-[1.07rem] leading-relaxed">
              Every day, brilliant ideas are born, ideas that could solve real problems and improve lives. Yet, most of them never make it past the idea stage. Why?
              <ul className="list-disc pl-6 my-2 space-y-1">
                <li>Innovators struggle to find the technical talent and support to execute.</li>
                <li>Tech talents graduate with skills but have no real-world experience to apply them.</li>
                <li>Investors want MVPs, not concepts.</li>
              </ul>
              This gap between ideas and execution is what the One-Shot Innovation Program (OSIP) is built to bridge.
            </div>
          </section>

          {/* What is OSIP */}
          <section className="mb-8 flex flex-col md:flex-row gap-6 md:items-center">
            <div className="flex-1">
              <div className="text-xl font-semibold text-brand-gold mb-1">
                What is OSIP?
              </div>
              <div className="rounded-xl bg-white shadow-md py-5 px-6 text-brand-navy/95 text-[1.06rem] leading-relaxed border border-gray-200 max-w-xl">
                The One-Shot Innovation Program (OSIP) is a 6-8 week accelerator-style initiative designed to bring innovators and tech talents together to co-develop real products from scratch. <br /><br />
                Each OSIP cycle selects 10 promising innovators and pairs them with skilled tech talents, developers, designers, analysts, and product managers to bring their ideas to life.
              </div>
            </div>
            <div className="flex-1 hidden md:block">
              <div className="rounded-xl bg-gray-100 h-32 w-full shadow-inner border border-gray-200"></div>
            </div>
          </section>

          {/* Why Partner with Us */}
          <section className="mb-8 flex flex-col md:flex-row gap-6 md:items-center">
            <div className="flex-1">
              <div className="rounded-xl bg-gray-100 py-5 px-6 h-full flex items-center justify-center border border-gray-200 shadow-inner min-h-[145px]" />
            </div>
            <div className="flex-1">
              <div className="text-xl font-semibold text-brand-gold mb-1">
                Why Partner with Us?
                <span className="block w-16 h-[2px] rounded bg-brand-gold mt-2 mb-4"></span>
              </div>
              <div className="text-brand-navy text-[1.07rem] leading-relaxed mb-1">As a tech training institution, you train the talents. OSIP gives them a launchpad to apply what they've learned in real-world, impact-driven projects.<br /></div>
              <div>
                <div className="font-semibold mb-1 text-brand-navy">Benefits to Your Institution:</div>
                <ul className="space-y-1">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle className="text-green-500 min-w-5 mt-[2px]" size={19} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Who Are the Stakeholders */}
          <section className="mb-7">
            <div className="text-xl font-semibold text-brand-gold mb-2">
              Who Are the Stakeholders?
            </div>
            <div className="text-brand-navy text-[1.07rem] leading-relaxed">
              <span className="font-bold">Innovators</span> – Visionaries with impactful, unexecuted ideas<br />
              <span className="font-bold">Tech Talents</span> – Trained individuals eager for real-world practice<br />
              <span className="font-bold">Tech Schools &amp; Communities</span> – Our talent partners<br />
              <span className="font-bold">Mentors</span> – Experts guiding execution from idea to prototype<br />
              <span className="font-bold">Investors &amp; Supporters</span> – Watching closely on Demo Day
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
