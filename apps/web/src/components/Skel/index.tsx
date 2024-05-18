import React from "react";
import Skeleton from "react-loading-skeleton";
import type { SkeletonProps } from "react-loading-skeleton";

// Skeleton wrapper
interface SkelProps extends SkeletonProps {
  isLoading: boolean;
  children?: React.ReactNode;
}
const Skel = ({ isLoading, children, ...props }: SkelProps) => {
  if (isLoading) {
    return <Skeleton {...props} />;
  }
  return children;
};

export default Skel;
