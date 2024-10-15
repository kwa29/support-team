export default function SearchBar() {
  return (
    <div className="max-w-xl mx-auto mt-8">
      <form className="flex">
        <input
          type="text"
          placeholder="Search for issues..."
          className="w-full px-4 py-2 border rounded-l-md"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
}