import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from './profileSlice';
import Skills from '../skills/Skills';

export default function Profile() {
  const dispatch = useDispatch();
  const { data: profile, status, error } = useSelector((state) => state.profile);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProfile());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <p className="text-center text-gray-500 mt-4">Loading...</p>;
  if (status === 'failed') return <p className="text-center text-red-500 mt-4">Error: {error}</p>;

  return (
    <section id="about" className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
        <p className="text-gray-700 text-left space-y-4 mt-6">
          <span className="block text-lg">{profile.summary}</span>
        </p>
        <Skills />
      </div>
    </section>
  );
}
