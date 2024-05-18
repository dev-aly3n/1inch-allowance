import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";

import { Asset } from "@/types";

import TokenIcon from "../TokenIcon";

interface CoinTableProps {
  tokens: Asset[];
}

const CoinTable = ({ tokens }: CoinTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell>Token</TableCell>
            <TableCell>Balance</TableCell>
            <TableCell>Allowance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tokens.map((token) => (
            <TableRow
              key={token.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {/* <TableCell>
                <div className="flex gap-2 items-center h-full">
                  <TokenIcon name={token.name} />
                  <span>{token.name}</span>
                </div>
              </TableCell>
              <TableCell>{token.balance/token.decimals}</TableCell>
              <TableCell>{token.allowance}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CoinTable;
