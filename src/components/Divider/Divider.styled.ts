import styled from 'styled-components/native';
import {Divider} from 'react-native-paper';
import {rgba} from 'polished';

export const DividerStyled = styled(Divider)`
  height: 1px;
  background: ${rgba('black', 0.1)};
`;
