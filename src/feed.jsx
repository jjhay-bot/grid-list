import React, { useState } from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/layout";
import PageHeader from "./components/page-header";
import GroupTitle from "./components/group-title";
import Filter from "./components/filter";
import Repo from "./components/Repo";
import { Button } from "@chakra-ui/button";

const Feed = () => {
  const [viewtype, setViewtype] = useState("grid");
  const [datejump, setDatejump] = useState("day");
  const [language, setLanguage] = useState("");

  return (
    <Box maxWidth="1200px" mx="auto" p="15px" bg="gray.100">
      <PageHeader />
      <Flex alignItems="center" justifyContent="space-between" my="20px">
        <GroupTitle />
        <Filter
          viewType={viewtype}
          language={language}
          datejump={datejump}
          onViewChange={setViewtype}
          onDateJumpChange={setDatejump}
          onLanguageChange={setLanguage}
        />
      </Flex>

      <SimpleGrid
        columns={viewtype === "list" ? 1 : 3}
        spacing="15px"
        my="20px"
      >
        <Repo isListView={viewtype === "list"} />
        <Repo isListView={viewtype === "list"} />
        <Repo isListView={viewtype === "list"} />
        <Repo isListView={viewtype === "list"} />
        <Repo isListView={viewtype === "list"} />
        <Repo isListView={viewtype === "list"} />
      </SimpleGrid>

      <Flex alignItems="center" justifyContent="center" my="20px">
        <Button colorScheme="blue">Load next group</Button>
      </Flex>
    </Box>
  );
};

export default Feed;
