import { PositionsBody } from '~/components/Positions/PositionsBody';
import { PositionsItem } from '~/components/Positions/PositionsItem';
import { PositionsWrapper } from '~/components/Positions/PositionsWrapper';

export const Positions = Object.assign(PositionsWrapper, {
  Body: PositionsBody,
  Item: PositionsItem,
});
