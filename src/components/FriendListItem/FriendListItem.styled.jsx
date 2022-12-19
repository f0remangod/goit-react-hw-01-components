import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.7);
  padding: 12px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Status = styled.span`
  background-color: ${props => (props.status ? 'green' : 'red')};
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;
export const Avatar = styled.img`
  display: block;
`;
export const Name = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
