import Link from "next/link";

export default function Home() {
  const searchTags = [
    "ps5",
    "iphone",
    "nintendo",
    "dualsense",
    "xbox",
    "airpods",
    "pc",
    "playstation",
    "switch",
    "tablet",
    "smartphone",
    "laptop",
    "tv",
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-y-4">
        <h1 className="text-center text-5xl font-bold text-blue-600">
          Busca tu producto en MercadoLibre Chile
        </h1>
        <p className="text-center text-xl text-gray-300 font-semibold">
          Te ofrecemos algunas opciones para iniciar tu búsqueda
        </p>
      </div>
      <div className="flex flex-wrap gap-4 py-4 items-center justify-center">
        {searchTags.map((tag) => (
          <Link
            key={tag}
            href={`/items?search=${tag}`}
            className="px-4 py-1 bg-blue-600 rounded-full text-sm font-semibold"
          >
            {tag}
          </Link>
        ))}
      </div>
    </>
  );
}
