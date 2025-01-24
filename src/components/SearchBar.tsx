import { Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const tags = ["Fever", "Headache", "Cold", "Allergies"];

export const SearchBar = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full">
          <div className="flex items-center w-full px-4 py-3 text-left text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary">
            <Search className="h-5 w-5 text-gray-400 mr-3" />
            <span className="text-gray-500">Select symptoms...</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full min-w-[320px] bg-white">
          {tags.map((tag) => (
            <DropdownMenuItem
              key={tag}
              className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
            >
              {tag}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};