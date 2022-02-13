import React from "react";
import { Box, Heading, Text, Flex, Link, Stack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { GoIssueOpened, GoRepoForked, GoStar } from "react-icons/go";
import { Button } from "@chakra-ui/button";

const Repo = ({ isListView }) => {
  return (
    <Flex flex={1} flexDir="column" justifyContent="center">
      <Box p="15px" borderWidth={1} bg="white" rounded="5px">
        {!isListView && (
          <Flex>
            <Image
              src="https://www.shareicon.net/data/512x512/2016/08/05/807310_gaming_512x512.png"
              width="40px"
              bg="gray.400"
              rounded="50%"
            />
            <Box ml="10px">
              <Heading fontSize="16px">jhayDA</Heading>
              <Text fontSize="14px">View profile</Text>
            </Box>
          </Flex>
        )}
        <Stack justifyContent="space-between" isInline>
          <Box mb="10px">
            <Box mb="10px">
              <Heading as="a" href="#" target="_blank" color="purple.700">
                gitbowl
              </Heading>
              <Text fontSize="14px" color="gray.600">
                Built by &middot;{" "}
                <Link href="#" fontWeight={700} target="_blank" fontSize="19px">
                  jhayDA
                </Link>
                &middot; February 13, 2022
              </Text>
            </Box>
            <Text fontSize="14px" color="gray.900" mb="10px">
              Bowl the most starred projects on any date on GitBowl
            </Text>
            <Stack isInline spacing="10px">
              <Button
                as="a"
                variant="link"
                _hover={{ textDecor: "none" }}
                cursor="pointer"
                leftIcon={<GoStar />}
                fontSize="14px"
                iconSpacing="4px"
              >
                {" "}
                3561
              </Button>
              <Button
                as="a"
                variant="link"
                _hover={{ textDecor: "none" }}
                cursor="pointer"
                leftIcon={<GoRepoForked />}
                fontSize="14px"
                iconSpacing="4px"
              >
                {" "}
                545
              </Button>
              <Button
                as="a"
                variant="link"
                _hover={{ textDecor: "none" }}
                cursor="pointer"
                leftIcon={<GoIssueOpened />}
                fontSize="14px"
                iconSpacing="4px"
              >
                {" "}
                5
              </Button>
            </Stack>
          </Box>

          <Stack alignItems="center" justifyContent="center">
            {isListView && (
              <Image
                src="https://www.shareicon.net/data/512x512/2016/08/05/807310_gaming_512x512.png"
                w={"100px"}
                h={"100px"}
                rounded="100%"
              />
            )}
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Repo;
