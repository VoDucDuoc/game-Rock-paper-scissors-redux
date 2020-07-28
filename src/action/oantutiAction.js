import { CHOOSE, PLAY } from "../constant/oantutiConstant";

export const chooseItemAction = (item) => {
  return { type: CHOOSE, item };
};

export const playAction = () => {
  return { type: PLAY };
};
