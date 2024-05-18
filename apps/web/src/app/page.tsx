import CheckeredBackground from "@/components/CheckeredBackground";
import CoinTable from "@/components/CoinTable";
import WalletConnectButton from "@/components/WalletConnectButton";

export default function Page() {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      <CheckeredBackground />
      <div className="absolute h-[512px] max-w-[100vw] sm:w-[512px] sm:h-[512px] !mx-32 z-50 bg-secondary-700 flex flex-col rounded-lg">
        <div className="w-full h-24 px-8 flex justify-between items-center border-b border-white/20">
          <h2 className="text-white text-2xl">1inch</h2>
          <WalletConnectButton />
        </div>
        <div className="w-full h-full">
          <CoinTable />
        </div>
      </div>
    </div>
  );
}
