import React, { useState } from "react";
import { Flex, VStack, Progress, Button } from "@chakra-ui/react";
import ChooseNetwork from "./ChooseNetwork";
import ChooseName from "./ChooseName";
import ChooseType from "./ChooseType";
import Customized from "./Customized";
import ChooseMembers from "./ChooseMembers";
import ChooseDocs from "./ChooseDocs";
import Checkout from "./Checkout";

export default function FactoryWrapper() {

  const [visible, setVisible] = useState(0);
  const [clickPath, setClickPath] = useState([]);
  const [details, setDetails] = useState({
    network: 999,
    daoName: null,
    symbol: null,
    daoType: null,
    members: null,
    shares: null,
    votingPeriod: null,
    paused: 1,
    quorum: 0,
    supermajority: 51,
    extensions: null,
    docs: null
  });

  const handleNext = (num) => {
    let array = clickPath;
    array.push(visible);
    setClickPath(array);
    setVisible(num);
    console.log("clickPath", array);
  }

  const handleBack = () => {
    let array = clickPath;
    let last = array.length - 1;
    console.log(last);
    setVisible(array[last]);
    array.splice(-1,1);
    setClickPath(array);
    console.log("clickPath", array);
  }

  const views = [
    <ChooseNetwork details={details} setDetails={setDetails} handleNext={handleNext} />,
    <ChooseName details={details} setDetails={setDetails} handleNext={handleNext} />,
    <ChooseType details={details} setDetails={setDetails} handleNext={handleNext} />,
    <Customized details={details} setDetails={setDetails} handleNext={handleNext} />,
    <ChooseMembers details={details} setDetails={setDetails} handleNext={handleNext} />,
    <ChooseDocs details={details} setDetails={setDetails} handleNext={handleNext} />,
    <Checkout details={details} setDetails={setDetails} handleNext={handleNext} />
  ];

  return (
    <VStack>
      {clickPath.length > 0 ? <Button onClick={handleBack}>Back</Button> : null}
      <Progress width="100%" value={(visible * 100) / (views.length - 1)} />
      {views[visible]}
    </VStack>
  );
}
