import React from "react";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { FaGithub, FaChrome, FaTwitter } from "react-icons/fa";

const Feed = () => {
  return (
    <Box maxWidth="1200px" mx="auto" p="15px">
      <Flex justifyContent="space-between" alignItems="center">
        <Flex>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5VOIJTKhQNgBLepC2ZrFqrEJ4s8fKh0FySbaKu-kQk9IHaRPOo8h6nQ6oglSQX4GxciM&usqp=CAU"
            width="55px"
            style={{ borderRadius: "50%" }}
          />
          <Box ml="10px">
            <Heading fontSize='24px' >GitBowl</Heading>
            <Text color="gray.600">Most starred projects on GH</Text>
          </Box>
        </Flex>
        <Stack isInline>
          <Button leftIcon={<FaGithub/>}>View Source</Button>
          <Button leftIcon={<FaChrome/>} colorScheme="red">Use Extension</Button>
          <Button leftIcon={<FaTwitter/>} colorScheme="purple">Tweet</Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Feed;
