import type {
  IClearItemActionPayload,
  ISelectorCheckIfElementExistsByUNID,
  ISelectorGetItemData,
} from '../../types';

export interface ICountableItemInfoProps {
  SelectorCheckIfElementExistsByUNID: ISelectorCheckIfElementExistsByUNID;
  SelectorGetCurrentItemData: ISelectorGetItemData;
  clearItemDataAction: IClearItemActionPayload;
  selectors?: any;
}
