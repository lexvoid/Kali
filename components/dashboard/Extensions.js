import { useState, useContext, useEffect } from "react";
import AppContext from "../../context/AppContext";
import { Text, UnorderedList, ListItem } from "@chakra-ui/react";

export default function Extensions() {
  const value = useContext(AppContext);
  const { dao } = value.state;

  return(
    <>
    {dao['extensions'].length > 0 ?
    <>
    <Text>Extensions</Text>
    <UnorderedList>
      {dao["extensions"].map((e, index) => (
        <ListItem key={index}>{e}</ListItem>
      ))}
    </UnorderedList>
    </>
    : <Text>No extensions installed</Text>}
    </>
  );
}
