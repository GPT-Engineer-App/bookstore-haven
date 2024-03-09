import React from "react";
import { Box, Container, Grid, GridItem, Heading, Image, SimpleGrid, Text, VStack, IconButton, Input, InputGroup, InputLeftElement, useColorModeValue } from "@chakra-ui/react";
import { FaBook, FaHeadphones, FaSearch, FaFilePdf, FaChalkboardTeacher } from "react-icons/fa";

const Index = () => {
  const cardBg = useColorModeValue("gray.100", "gray.700");

  // Mock data for the items, would typically come from a backend or API
  const items = [
    {
      id: 1,
      title: "The Great Gatsby",
      type: "PDF",
      icon: <FaFilePdf />,
    },
    {
      id: 2,
      title: "1984",
      type: "eBook",
      icon: <FaBook />,
    },
    {
      id: 3,
      title: "Atomic Habits",
      type: "Audiobook",
      icon: <FaHeadphones />,
    },
    {
      id: 4,
      title: "Learn React",
      type: "Course",
      icon: <FaChalkboardTeacher />,
    },
    // Add more items as needed
  ];

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          Welcome to ICELIFE BOOKSTORE
        </Heading>
        <Text fontSize="2xl" color="gray.500">
          Books for every taste
        </Text>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
          <Input type="text" placeholder="Search for books, audiobooks, courses..." />
        </InputGroup>
      </VStack>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={10} mt={10}>
        {items.map((item) => (
          <Box key={item.id} p={5} shadow="md" borderWidth="1px" bg={cardBg} borderRadius="md" d="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
            <IconButton variant="ghost" colorScheme="blue" aria-label={`Icon for ${item.type}`} fontSize="3xl" icon={item.icon} />
            <Text mt={4} fontSize="xl" fontWeight="semibold" textAlign="center">
              {item.title}
            </Text>
            <Text fontSize="sm">{item.type}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;
