import React, { useEffect, useState } from "react";
import { Box, Flex, Stack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import languages from "./../data/language.json";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaCalendarAlt, FaList, FaTable } from "react-icons/fa";
import { Button } from "@chakra-ui/button";

const Filter = (props) => {
  const {
    viewType,
    language,
    datejump,
    onViewChange,
    onDateJumpChange,
    onLanguageChange,
  } = props;

  const [viewtype, setViewtype] = useState("grid");

  useEffect(() => {
    onViewChange(viewtype);
  }, [viewtype]);

  return (
    <Flex>
      <Select
        bg="white"
        value={language}
        onChange={(e) => onLanguageChange(e.target.value)}
      >
        {languages.map((item) => (
          <option value={item.value} key={item.value}>
            {item.label}
          </option>
        ))}
      </Select>
      <Menu>
        <MenuButton
          as={Button}
          bg="white"
          borderWidth={1}
          pr="65px"
          width="fit-content"
          fontWeight={400}
          leftIcon={<FaCalendarAlt />}
          ml="10px"
        >
          <Box as='span' textTransform='capitalize'>{datejump}</Box>
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => onDateJumpChange("day")}>Daily</MenuItem>
          <MenuItem onClick={() => onDateJumpChange("week")}>Weekly</MenuItem>
          <MenuItem onClick={() => onDateJumpChange("month")}>Monthly</MenuItem>
          <MenuItem onClick={() => onDateJumpChange("year")}> Yearly</MenuItem>
        </MenuList>
      </Menu>

      <Stack
        isInline
        spacing={0}
        borderWidth={1}
        rounded="5px"
        alignItems="center"
        ml="10px"
      >
        <Button
          leftIcon={<FaTable />}
          bg={viewtype == "list" ? "gray.200" : "white"}
          onClick={() => {
            setViewtype("grid");
          }}
        >
          Grid
        </Button>
        <Button
          leftIcon={<FaList />}
          bg={viewtype == "grid" ? "gray.200" : "white"}
          onClick={() => {
            setViewtype("list");
          }}
        >
          List
        </Button>
      </Stack>
    </Flex>
  );
};

export default Filter;
