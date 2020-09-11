import { CHOOSE, PLAY, CHECKRESULT } from "../constant/oantutiConstant";

export const chooseItemAction = (item) => {
  return { type: CHOOSE, item };
};

export const playAction = () => {
  return { type: PLAY };
};

export const checkResult = () => {
  return {type: CHECKRESULT}
}