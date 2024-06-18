import { Container, VStack, Input, InputGroup, InputLeftElement, IconButton, Select, HStack } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import ArticleList from "../components/ArticleList";

const Index = () => {
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filter, setFilter] = useState("");

  const handleSearch = () => {
    setQuery(query);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
          <Input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <IconButton
            aria-label="Search"
            icon={<FaSearch />}
            onClick={handleSearch}
          />
        </InputGroup>
        <HStack spacing={4} width="100%">
          <Select placeholder="Filter by" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </Select>
          <Select placeholder="Sort by" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </Select>
        </HStack>
        <ArticleList query={query} filter={filter} sortOrder={sortOrder} />
      </VStack>
    </Container>
  );
};

export default Index;