import CheckeredBackground from "@/components/CheckeredBackground";
import WalletConnectButton from "@/components/WalletConnectButton";

export default function Page() {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      <CheckeredBackground />
      <div className="absolute w-[512px] h-[512px] z-50 bg-white flex justify-center items-center rounded-lg">
        <WalletConnectButton />
      </div>
    </div>
  );
}
