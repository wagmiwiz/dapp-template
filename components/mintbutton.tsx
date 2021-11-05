import { useMint, usePrice } from "../lib/hooks";
import { Button, VStack } from "@chakra-ui/react";
import { useEthers } from "@usedapp/core";
import { useState } from "react";

const MintButton = () => {
  const { account } = useEthers();

  const price = usePrice();

  const { mint } = useMint();

  const [minting, setMinting] = useState<boolean>(false);

  const quantity = 2;

  return (
    <VStack spacing={6}>
      <Button
        isLoading={minting}
        onClick={async () => {
          setMinting(true);
          try {
            await mint(2, { value: price.mul(2) });
          } catch (e) {
            console.log(e);
          }
          setMinting(false);
        }}
      >
        Mint {quantity}
      </Button>
    </VStack>
  );
};

export default MintButton;
