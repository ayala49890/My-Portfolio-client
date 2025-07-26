import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSkills } from './skillsSlice';

export default function Skills() {
  const dispatch = useDispatch();
  const { data: skills, status, error } = useSelector((state) => state.skills);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchSkills());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <p>loading..</p>;
  if (status === 'failed') return <p>error: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-xl font-bold mt-10 mb-6 text-gray-800">Skills & Technologies
      </h2>
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
              title={skill.name}
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
