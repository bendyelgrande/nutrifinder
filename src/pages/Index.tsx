import { SearchBar } from "@/components/SearchBar";
import { FilterDropdowns } from "@/components/FilterDropdowns";
import { ProductGrid } from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">NutriWay</h1>
        </header>

        {/* Search Section */}
        <div className="space-y-6 mb-12">
          <SearchBar />
          <FilterDropdowns />
        </div>

        {/* Products Section */}
        <ProductGrid />

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-gray-500">
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-700">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-700">Terms of Use</a>
          </div>
          <p className="mt-2">© 2024 NutriWay. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;