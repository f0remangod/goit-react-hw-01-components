import styled from 'styled-components';

export const TableHead = styled.th`
  width: 220px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #2c87ff;
`;
export const TableRaw = styled.tr`
  color: #ffffff;
  :nth-child(2n) {
    background-color: #dddddd;
  }
`;
export const Table = styled.table`
  margin: 20px auto 0px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.7);
`;
export const TableData = styled.td`
  width: 220px;
  padding: 10px 20px;

  color: #5a5a5a;
  text-align: center;
  text-transform: ${props => props.firstColumn && 'capitalize'};
  text-align: ${props => props.firstColumn && 'left'};
  padding: ${props => props.firstColumn && '10px 0px 10px 94px'};
`;
