import { skills } from "../../data";
export default function Skills() {

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-xl font-bold mt-10 mb-6 text-gray-800">Skills & Technologies</h2>
      <ul className="flex flex-wrap gap-4 justify-center mt-10">
        {skills.map((skill) => (
          <li
            key={skill.id}
            className="flex items-center bg-[#1e2c33] text-[#e9d5c0] px-4 py-2 rounded-lg border border-[#2e3e44] shadow-md hover:bg-[#2c3c42] transition gap-2"
            title={skill.name}
          >
            <img
              src={skill.iconUrl}
              alt={`${skill.name} logo`}
              className="w-6 h-6 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
