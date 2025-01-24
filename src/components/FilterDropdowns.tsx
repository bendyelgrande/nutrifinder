export const FilterDropdowns = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <select className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary">
        <option value="">Select Age Range</option>
        <option value="0-12">0-12 years</option>
        <option value="13-17">13-17 years</option>
        <option value="18-64">18-64 years</option>
        <option value="65+">65+ years</option>
      </select>

      <select className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary">
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <select className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary">
        <option value="">Pregnancy Status</option>
        <option value="pregnant">Pregnant</option>
        <option value="not-pregnant">Not Pregnant</option>
        <option value="na">Not Applicable</option>
      </select>
    </div>
  );
};