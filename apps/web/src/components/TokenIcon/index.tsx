import { getTokenIcon } from "@/utils";

interface TokenIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

const TokenIcon = ({
  name,
  height = 32,
  width = 32,
  ...props
}: TokenIconProps) => {
  const Icon = getTokenIcon(name);

  return <Icon {...props} height={height} width={width} />;
};

export default TokenIcon;
