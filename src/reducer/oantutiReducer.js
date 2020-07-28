import { CHOOSE, PLAY } from "../constant/oantutiConstant";

const initialState = {
  arrImgInState: [
    { "./img/bua.png": "bua" },
    { "./img/bao.png": "bao" },
    { "./img/keo.png": "keo" },
  ],
  imgShowInState: [{ "./img/bua.png": "bua" }],
  imgShowRandomInState: [{ "./img/bua.png": "bua" }],
  winning: 0,
  playClick: 0,
  result: "",
};
const oantutiReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE: {
      let imgShowInStateNew = [action.item];
      return { ...state, imgShowInState: imgShowInStateNew };
    }
    case PLAY: {
      let imgShowRandomInStateNew = [
        state.arrImgInState[
          Math.floor(Math.random() * state.arrImgInState.length)
        ],
      ];

      let valueRandom = "";
      let valueChoose = [state.imgShowInState];
      let resultNew = state.result;
      let winningNew = state.winning;
      state.imgShowInState.map((item, index) => {
        return Object.values(item).map((value, indexx) => {
          return (valueChoose = value);
        });
      });
      imgShowRandomInStateNew.map((item, index) => {
        return Object.values(item).map((value, indexx) => {
          return (valueRandom = value);
        });
      });
      if (valueChoose === "keo") {
        if (valueRandom === "keo") {
          resultNew = "DRAW";
        } else if (valueRandom === "bao") {
          resultNew = "WIN";
        } else {
          resultNew = "LOSE";
        }
      } else if (valueChoose === "bao") {
        if (valueRandom === "keo") {
          resultNew = "LOSE";
        } else if (valueRandom === "bao") {
          resultNew = "DRAW";
        } else {
          resultNew = "WIN";
        }
      } else {
        if (valueRandom === "keo") {
          resultNew = "WIN";
        } else if (valueRandom === "bao") {
          resultNew = "LOSE";
        } else {
          resultNew = "DRAW";
        }
      }

      if (resultNew === "WIN") {
        winningNew += 1;
      }
      return {
        ...state,
        winning: winningNew,
        imgShowRandomInState: imgShowRandomInStateNew,
        playClick: ++state.playClick,
        result: resultNew,
      };
    }
    default:
      return state;
  }
};

export default oantutiReducer;
