import { profile } from '../data';
import Skills from './Skills';

export default function Profile() {

  return (
    <section id="about" className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
        <p className="text-gray-700 text-left space-y-4 mt-6">
          <span className="whitespace-pre-line block text-lg">{profile.summary}</span>
        </p>
        <Skills />
      </div>
    </section>
  );
}
