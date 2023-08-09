import Link from "next/link";
import Price from "../components/Price";

async function SearchPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const { search } = searchParams;
  const { results } = await fetch(
    `https://api.mercadolibre.com/sites/MLC/search?q=${search}&limit=8#json`
  ).then(
    (res) =>
      res.json() as Promise<{
        results: {
          id: string;
          title: string;
          thumbnail: string;
          currency_id: string;
          price: number;
          address: {
            city_name: string;
          };
        }[];
      }>
  );

  return (
    <section className="grid gap-y-2 py-4">
      <h1>Results for {search}</h1>
      {results.map((item) => (
        <Link href={`/items/${item.id}?search=${search}`} key={item.id}>
          <div className="flex gap-4">
            <img
              src={item.thumbnail}
              alt={item.title}
              width={90}
              className="aspect-square object-cover"
            />
            <h2>{item.title}</h2>
            <div className="opacity-70 text-sm ml-auto flex flex-col justify-center items-end">
              <Price price={item.price} currency={item.currency_id} />

              <p>{item.address.city_name}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default SearchPage;
