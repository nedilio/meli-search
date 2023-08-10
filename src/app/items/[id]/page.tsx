import Price from "@/app/components/Price";
import Link from "next/link";

export default async function ItemSingle({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { search: string };
}) {
  const { id } = params;
  const { search } = searchParams;

  const item = await fetch(`https://api.mercadolibre.com/items/${id}`).then(
    (res) =>
      res.json() as Promise<{
        id: string;
        title: string;
        price: number;
        currency_id: string;
        thumbnail: string;
        permalink: string;
        pictures: {
          id: string;
          url: string;
        }[];
      }>
  );

  const description = await fetch(
    `https://api.mercadolibre.com/items/${id}/description`
  ).then((res) => res.json() as Promise<{ plain_text: string }>);

  const descriptionArray = description.plain_text
    .split("\n")
    .filter((text) => text.length > 0);

  return (
    <section className="mt-4">
      <Link href={`/items?search=${search}`} className="mb-4">
        ⬅️ Back
      </Link>
      <div className="flex gap-x-4 mb-4">
        <img
          src={item.pictures[0].url}
          alt={item.title}
          width={120}
          height={120}
          className="aspect-square w-[120px] h-[120px] object-cover"
        />
        <div>
          <h2>{item.title}</h2>
          <Price price={item.price} currency={item.currency_id} />
        </div>
      </div>
      <hr />
      {descriptionArray.map((text, index) => (
        <p key={index} className="mb-4">
          {text}
        </p>
      ))}
      <a
        href={item.permalink}
        target="_blank"
        className="bg-blue-700 px-4 py-2 rounded-md font-semibold text-sm"
      >
        View on ML
      </a>
    </section>
  );
}
