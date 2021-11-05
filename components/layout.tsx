import Head from "next/head";
import {
  Box,
  Button,
  Text,
  Flex,
  HStack,
  Image,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";

const Layout = ({ children }: { children: any }) => {
  return (
    <Flex maxWidth={"100vw"} flexDirection={"column"} alignItems={"stretch"}>
      <Head>
        <title>Minting Template Dapp</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Flex justifyContent={"center"} alignItems={"center"} p={5}>
        <HStack spacing={4}>
          <Link href={"/"} passHref={true}>
            <ChakraLink>Mint</ChakraLink>
          </Link>
          <Link href={"/faq"} passHref={true}>
            <ChakraLink>FAQ</ChakraLink>
          </Link>
        </HStack>
      </Flex>

      {children}
    </Flex>
  );
};

export default Layout;
