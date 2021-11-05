import type { NextPage } from "next";
import { Container, Flex, Heading, Button, VStack } from "@chakra-ui/react";
import Layout from "../components/layout";
import { useEthers } from "@usedapp/core";
import MintStats from "../components/mintstats";
import MintButton from "../components/mintbutton";

const Home: NextPage = () => {
  const { activateBrowserWallet, deactivate, account, chainId } = useEthers();

  return (
    <Layout>
      <Container maxWidth="xl">
        <VStack spacing={8} alignItems={"center"}>
          <Heading>Looks Rare - Do the mint</Heading>
          {!account && (
            <Button
              onClick={() => {
                activateBrowserWallet();
              }}
            >
              Connect
            </Button>
          )}
          {account && (
            <VStack spacing={5}>
              <MintStats />
              <MintButton />
            </VStack>
          )}
        </VStack>
      </Container>
    </Layout>
  );
};

export default Home;
