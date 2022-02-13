import React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Heading } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";

const Brand = () => {
  return (
    <Flex alignItems="center">
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5VOIJTKhQNgBLepC2ZrFqrEJ4s8fKh0FySbaKu-kQk9IHaRPOo8h6nQ6oglSQX4GxciM&usqp=CAU"
        width="55px"
        style={{ borderRadius: "50%" }}
      />
      <Box ml="10px">
        <Heading fontSize="24px">GitBowl</Heading>
        <Text color="gray.600">Most starred projects on GH</Text>
      </Box>
    </Flex>
  );
};

export default Brand;
