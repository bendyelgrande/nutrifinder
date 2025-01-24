import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Search for medicinal products..."
        className="w-full px-4 py-3 pl-12 text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
      />
      <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
    </div>
  );
};