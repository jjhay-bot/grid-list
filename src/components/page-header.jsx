import React from "react";
import { Button } from "@chakra-ui/button";
import { Flex, Stack } from "@chakra-ui/layout";
import { FaGithub, FaChrome, FaTwitter } from "react-icons/fa";
import Brand from './brand';

const PageHeader = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Brand />
      <Stack isInline>
        <Button leftIcon={<FaGithub />}>View Source</Button>
        <Button leftIcon={<FaChrome />} colorScheme="red">
          Use Extension
        </Button>
        <Button leftIcon={<FaTwitter />} colorScheme="purple">
          Tweet
        </Button>
      </Stack>
    </Flex>
  );
};

export default PageHeader;
