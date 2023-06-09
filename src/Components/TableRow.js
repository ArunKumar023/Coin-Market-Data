// TableRow.js

import React from 'react';

const TableRow = ({ coin }) => {
  return (
    <tr>
      <td>{coin.name}</td>
      <td>{coin.id}</td>
      <td>
        <img src={coin.image} alt={coin.name} width="20" height="20" />
      </td>
      <td>{coin.symbol}</td>
      <td>{coin.current_price}</td>
      <td>{coin.total_volume}</td>
    </tr>
  );
};

export default TableRow;
