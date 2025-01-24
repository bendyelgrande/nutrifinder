import { Search } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const tags = ["Fever", "Headache", "Cold", "Allergies"];

export const SearchBar = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagSelect = (tag: string) => {
    setSelectedTags((prev) => 
      prev.includes(tag) 
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full">
          <div className="flex items-center w-full px-4 py-3 text-left text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary">
            <Search className="h-5 w-5 text-gray-400 mr-3" />
            <span className="text-gray-500">
              {selectedTags.length > 0 
                ? selectedTags.join(", ") 
                : "Select symptoms..."}
            </span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="w-[var(--radix-dropdown-menu-trigger-width)] p-4 bg-white border border-gray-200 rounded-lg shadow-lg mt-2"
          align="start"
        >
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <DropdownMenuItem
                key={tag}
                className={`flex items-center px-3 py-1.5 rounded-full border border-gray-200 hover:border-primary hover:border-2 cursor-pointer focus:bg-gray-50 focus:outline-none transition-colors ${
                  selectedTags.includes(tag) ? "bg-gray-50" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTagSelect(tag);
                }}
              >
                {tag}
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};