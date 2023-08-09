import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { word: string } }
) {
  const { word } = params;
  const { results } = await fetch(
    `https://api.mercadolibre.com/sites/MLC/search?q=${word}&limit=8#json`
  ).then(
    (res) =>
      res.json() as Promise<{
        results: {
          id: string;
          title: string;
          thumbnail: string;
          currency_id: string;
          price: string;
          address: {
            city_name: string;
          };
        }[];
      }>
  );
  return NextResponse.json(results);
}
