import { useEffect, useState } from "react";
import { Box, Text, VStack, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import axios from "axios";

const ArticleList = ({ query, filter, sortOrder }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      setLoading(true);
      setError(null);
      axios
        .get(`https://api.example.com/articles?search=${query}&filter=${filter}&sort=${sortOrder}`)
        .then((response) => {
          setArticles(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [query, filter, sortOrder]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        {error}
      </Alert>
    );
  }

  return (
    <VStack spacing={4} width="100%">
      {articles.length > 0 ? (
        articles.map((article) => (
          <Box key={article.id} p={5} shadow="md" borderWidth="1px" width="100%">
            <Text fontWeight="bold">{article.title}</Text>
            <Text mt={4}>{article.description}</Text>
          </Box>
        ))
      ) : (
        <Text>No articles found</Text>
      )}
    </VStack>
  );
};

export default ArticleList;