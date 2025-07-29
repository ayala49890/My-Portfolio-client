import { Briefcase, ExternalLink } from 'lucide-react';
import { experiences } from '../../data';
export default function Experiences() {
 

  return (
    <section id="experience" className="bg-[#0e1a20] text-[#fce8c7] py-20 px-4">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
        <ul className="space-y-6">
          {experiences.map((exp) => {
            const dashIndex = exp.companyName.indexOf('-');
            const titleAfterDash =
              dashIndex !== -1
                ? exp.companyName.substring(dashIndex + 1).trim()
                : exp.companyName;

            return (
              <li
                key={exp.id}
                className="bg-[#1b2a30] rounded-xl p-6 shadow-md hover:shadow-lg transition duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="pt-1 text-[#fce8c7]">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#fce8c7]">{exp.role}</h3>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        {exp.iconUrl && (
                          <img
                            src={exp.iconUrl}
                            alt={`${exp.companyName} logo`}
                            className="w-6 h-6 object-contain rounded"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        )}
                        <p className="text-sm text-[#d2bfa2] font-medium">{exp.companyName}</p>
                      </div>

                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#d2bfa2] hover:text-blue-400 transition inline-flex items-center gap-1"
                          title={`Go to ${titleAfterDash}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>visit site</span>
                        </a>
                      )}
                    </div>

                    <p className="text-sm text-[#a3a3a3] mb-3">
                      {exp.startDate?.substring(0, 4) === exp.endDate?.substring(0, 4)
                        ? exp.startDate?.substring(0, 4)
                        : `${exp.startDate?.substring(0, 4)} – ${
                            exp.endDate?.substring(0, 4) || 'Present'
                          }`}
                    </p>

                    <p className="text-base text-[#e0d9ce] whitespace-pre-line">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
