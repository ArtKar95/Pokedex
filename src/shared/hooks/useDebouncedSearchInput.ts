import { useState } from "react";
import useDebouncedValue from "./useDebouncedValue";

const useDebouncedSearchInput = (delayMs = 300) => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebouncedValue(searchQuery, delayMs);
  const searchKey = debouncedSearch.trim();
  const isSearchActive = !!searchKey.length;
  return { searchQuery, setSearchQuery, searchKey, isSearchActive };
};

export default useDebouncedSearchInput;
