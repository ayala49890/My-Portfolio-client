import { useMemo, useState, useRef } from 'react';
import { X, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';
import { projects } from '../data';

export default function Projects() {
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const scrollContainerRef = useRef(null);

  const minZoom = 1;
  const maxZoom = 3;
  const zoomStep = 0.1;



  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
  }, []);

  const handleZoomIn = () => {
    setZoom((z) => Math.min(maxZoom, parseFloat((z + zoomStep).toFixed(2))));
  };

  const handleZoomOut = () => {
    setZoom((z) => Math.max(minZoom, parseFloat((z - zoomStep).toFixed(2))));
  };

  const handleRotate = () => {
    setRotation((r) => (r + 90) % 360);
  };

  const handleCloseModal = () => {
    setZoom(minZoom);
    setRotation(0);
    setSelectedImageUrl(null);
  };

  return (
    <>
      <section id="projects" className="bg-gray-100 py-20 px-4">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">My Projects</h2>
          <ul className="space-y-4">
            {sortedProjects.map((project) => (
              <li
                key={project.id}
                className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition duration-200 flex flex-col sm:flex-row gap-4"
              >
                <div
                  className="w-full sm:w-1/3 flex-shrink-0 cursor-pointer"
                  onClick={() => setSelectedImageUrl(project.imageUrl)}
                >
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.name}
                      className="w-full h-48 sm:h-full object-cover rounded"
                    />
                  ) : (
                    <div className="w-full h-48 sm:h-full bg-gray-200 flex items-center justify-center rounded text-gray-400">
                      No Image
                    </div>
                  )}
                </div>

                <div className="w-full sm:w-2/3">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{project.name}</h3>
                  <p className="text-gray-600 mt-1 text-sm sm:text-base">{project.description}</p>
                  <p className="text-sm mt-2 text-gray-500">
                    {project.startDate ? project.startDate.substring(0, 4) : 'N/A'}
                  </p>

                  <p className="text-sm mt-1 text-gray-500">
                    <span className="font-medium">Technologies:</span>{' '}
                    {project.technologies && project.technologies.length > 0
                      ? project.technologies.map((t) => t.skill.name).join(', ')
                      : 'No technologies'}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline mt-2 inline-block"
                  >
                    View On GitHub
                  </a>
                </div>
              </li>

            ))}
          </ul>
        </div>
      </section>

      {selectedImageUrl && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-w-6xl w-full h-[90vh] px-4 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-red-400 transition"
              onClick={handleCloseModal}
              title="Close"
            >
              <X size={32} />
            </button>

            <div className="mb-4 mt-2 flex gap-4">
              <button
                onClick={handleZoomOut}
                disabled={zoom <= minZoom}
                title="Zoom Out"
                className={`p-2 rounded-full border transition ${zoom <= minZoom
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-white text-black hover:bg-gray-100 shadow'
                  }`}
              >
                <ZoomOut size={20} />
              </button>

              <button
                onClick={handleZoomIn}
                disabled={zoom >= maxZoom}
                title="Zoom In"
                className={`p-2 rounded-full border transition ${zoom >= maxZoom
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-white text-black hover:bg-gray-100 shadow'
                  }`}
              >
                <ZoomIn size={20} />
              </button>

              <button
                onClick={handleRotate}
                title="Rotate"
                className="p-2 rounded-full border bg-white text-black hover:bg-gray-100 shadow"
              >
                <RotateCw size={20} />
              </button>
            </div>

            <div
              ref={scrollContainerRef}
              className="overflow-auto w-full h-full border rounded bg-white flex justify-center items-center"
            >
              <img
                src={selectedImageUrl}
                alt="Enlarged"
                style={{
                  transform: `scale(${zoom}) rotate(${rotation}deg)`,
                  transition: 'transform 0.3s',
                  transformOrigin: 'center',
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
