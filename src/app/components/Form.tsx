export default function Form() {
  return (
    <form action="/items" className="flex gap-x-2">
      <input
        type="text"
        name="search"
        placeholder="search..."
        className="text-black px-2"
      />
      <button className="px-4 py-2 bg-blue-700 rounded-md">search</button>
    </form>
  );
}
