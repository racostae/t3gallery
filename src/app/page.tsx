import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/4079e598-5d88-448e-b332-59aeac91f42f-7wf0cv.jpeg",
  "https://utfs.io/f/50e4ad39-cf39-414d-a10e-2506266e1d8a-6jqkjc.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
