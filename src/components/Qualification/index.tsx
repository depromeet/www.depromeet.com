import { QualificationBody } from '~/components/Qualification/QualificationBody';
import { QualificationItem } from '~/components/Qualification/QualificationItem';
import { QualificationWrapper } from '~/components/Qualification/QualificationWrapper';

export const Qualification = Object.assign(QualificationWrapper, {
  Body: QualificationBody,
  Item: QualificationItem,
});
