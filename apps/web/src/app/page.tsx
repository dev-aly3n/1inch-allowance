import CheckeredBackground from "@/components/CheckeredBackground";
import TableBox from "@/components/TableBox";

export default function Page() {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      <CheckeredBackground />
      <TableBox />
    </div>
  );
}
