"use client";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";

import { assets } from "@/constants/assets";
import { useAllowanceAndBalance } from "@/hooks/useAllowanceAndBalance";

import Skel from "../Skel";
import TokenIcon from "../TokenIcon";

const CoinTable = () => {
  const {
    data,
    isLoading: isDataLoading,
    isPending,
  } = useAllowanceAndBalance();
  const isLoading = isDataLoading || isPending;
  const tokensWithAllowanceAndBalance = data || assets;

  return (
    <TableContainer component={Paper} style={{ maxHeight: 432 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Token</TableCell>
            <TableCell>Balance</TableCell>
            <TableCell>Allowance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="!overflow-y-scroll">
          {tokensWithAllowanceAndBalance.map((token) => (
            <TableRow
              key={token.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <div className="flex gap-2 items-center h-full">
                  <TokenIcon name={token.iconName} />
                  <span>{token.name}</span>
                </div>
              </TableCell>
              <TableCell>
                <Skel width={"50%"} isLoading={isLoading}>
                  {token.balance}
                </Skel>
              </TableCell>
              <TableCell>
                <Skel width={"50%"} isLoading={isLoading}>
                  {token.allowance}
                </Skel>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CoinTable;
