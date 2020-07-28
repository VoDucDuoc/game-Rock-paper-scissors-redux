import React from "react";
import "../buble.css";
import "../App.css";
import { connect } from "react-redux";
import Result from "./Result";
import RenderItem from "./RenderItem";
function Play(props) {
  let { arrImg, imgShow, imgRandom } = props;

  //render bua bao keo de player chon
  const renderItems = () => {
    return arrImg.map((item, index) => {
      return Object.keys(item).map((propsImg, indexx) => {
        return (
          <div key="index">
            <RenderItem propsImg={propsImg} item={item} />
          </div>
        );
      });
    });
  };

  //render bua bao keo da duoc chon
  const renderItemsChoosen = () => {
    return imgShow.map((item, index) => {
      return Object.keys(item).map((propsImg, indexx) => {
        return (
          <div key={index}>
            <RenderItem propsImg={propsImg} item={item} />
          </div>
        );
      });
    });
  };

  //render bua bao keo ngau nhien cho computer
  const renderItemsRandom = () => {
    return imgRandom.map((item, index) => {
      return Object.keys(item).map((propsImg, indexx) => {
        return (
          <div key={index}>
            <RenderItem propsImg={propsImg} item={item} />
          </div>
        );
      });
    });
    
  };
  return (
    <div className="playComponent">
      <img className="player" src="./img/player.png" alt="" />
      <div className="buabaokeo d-flex">{renderItems()}</div>
      <div className="speech-bubble">{renderItemsChoosen()}</div>

      <Result playClick={props.playClick} result={props.result} winning={props.winning} />

      <img className="computer" src="./img/playerComputer.png" alt="" />
      <div className="speech-bubble bubble-computer">
        {renderItemsRandom()}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    arrImg: state.oantutiReducer.arrImgInState,
    imgShow: state.oantutiReducer.imgShowInState,
    imgRandom: state.oantutiReducer.imgShowRandomInState,
    playClick: state.oantutiReducer.playClick,
    result: state.oantutiReducer.result,
    winning: state.oantutiReducer.winning,
  };
};

export default connect(mapStateToProps)(Play);
