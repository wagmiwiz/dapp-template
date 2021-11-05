import { useContractCall, useContractFunction, useEthers } from "@usedapp/core";
import { Interface } from "@ethersproject/abi";
import { BigNumber } from "@ethersproject/bignumber";
import { NFT_CONTRACT_ABI } from "../contracts/abi";
import { Contract } from "@ethersproject/contracts";

export const useTotalSupply = (): BigNumber => {
  const totalSupply = useContractCall({
    abi: new Interface(NFT_CONTRACT_ABI),
    address: process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS as string,
    method: "totalSupply",
    args: [],
  });

  return totalSupply?.[0];
};

export const usePrice = (): BigNumber => {
  const price = useContractCall({
    abi: new Interface(NFT_CONTRACT_ABI),
    address: process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS as string,
    method: "price",
    args: [],
  });

  return price?.[0];
};

export const useMyBalance = (): BigNumber => {
  const { account } = useEthers();

  const balance = useContractCall({
    abi: new Interface(NFT_CONTRACT_ABI),
    address: process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS as string,
    method: "balanceOf",
    args: [account],
  });

  return balance?.[0];
};

export const useMint = () => {
  const { library } = useEthers();
  const mintingContract = new Contract(
    process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS as string,
    NFT_CONTRACT_ABI,
    library
  );
  const { state, send: mint } = useContractFunction(mintingContract, "summon");

  return { state, mint };
};
