"use client";

import { motion } from "framer-motion";

import { fadeUpAnimation, framerProps } from "@/utils/animations";

import CoinTable from "../CoinTable";
import WalletConnectButton from "../WalletConnectButton";

const TableBox = () => {
  return (
    <motion.div
      {...framerProps}
      variants={fadeUpAnimation}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
      className="absolute h-[512px] max-w-[100vw] sm:w-[512px] sm:h-[512px] !mx-32 z-50 bg-secondary-700 flex flex-col rounded-lg"
    >
      <div className="w-full h-24 px-8 flex justify-between items-center border-b border-white/20">
        <h2 className="text-white text-2xl">1inch</h2>
        <WalletConnectButton />
      </div>
      <div className="w-full h-full">
        <CoinTable />
      </div>
    </motion.div>
  );
};

export default TableBox;
