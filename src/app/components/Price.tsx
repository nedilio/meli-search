import React from "react";

export default function Price({
  price,
  currency,
}: {
  price: number;
  currency: string;
}) {
  return (
    <p>
      {price.toLocaleString("es-CL", {
        style: "currency",
        currency: currency,
      })}
    </p>
  );
}
