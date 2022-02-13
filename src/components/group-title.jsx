import React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";

const GroupTitle = () => {
  return (
    <Flex alignItems='baseline' fontSize="24px" fontWeight={700}>
      This week{" "}
      <Text fontSize="15px" fontWeight={500} color="gray.500" ml='10px'>
        February 13, 2022 -  February 19, 2022
      </Text>
    </Flex>
  );
};

export default GroupTitle;
