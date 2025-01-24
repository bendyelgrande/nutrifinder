const tags = ["Fever", "Headache", "Cold", "Allergies"];

export const FilterTags = () => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {tags.map((tag) => (
        <button
          key={tag}
          className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
        >
          {tag}
        </button>
      ))}
    </div>
  );
};