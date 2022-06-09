import { useMyBalance, usePrice, useTotalSupply } from "../lib/hooks";
import { formatEther } from "ethers/lib/utils";
import {
  Heading,
  HStack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import {useBlockNumber, useChainMeta, useEthers} from "@usedapp/core";

const MintStats = () => {
  const { account } = useEthers();
  const totalSupply = useTotalSupply();
  const price = usePrice();
  const myBalance = useMyBalance();

  const blockNumber = useBlockNumber();
  const { chainId } = useEthers();

  // @ts-ignore
  const {chainName} = useChainMeta(chainId)

  return (
    <VStack spacing={6}>
      <Heading size={"md"}>
        Block: {blockNumber} ({chainName}){" "}
      </Heading>
      <Text size={"sm"}>Address: {account}</Text>
      <HStack spacing={6}>
        <Stat>
          <StatLabel>Total Supply</StatLabel>
          <StatNumber>
            {totalSupply ? totalSupply.toNumber() : "Loading..."}
          </StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Current Price</StatLabel>
          <StatNumber>{price ? formatEther(price) : "Loading..."}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>My Balance</StatLabel>
          <StatNumber>
            {myBalance ? myBalance.toNumber() : "Loading..."}
          </StatNumber>
        </Stat>
      </HStack>
    </VStack>
  );
};

export default MintStats;
