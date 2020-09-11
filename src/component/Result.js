import React from "react";
import { connect } from "react-redux";
import { playAction, checkResult } from "../action/oantutiAction";

function Result(props) {
  let { result, winning, playClick } = props;
  const renderResult = () => {
    if (result === "") {
      return <h1>Im iron man, i love you 3000!!!</h1>;
    } else if (result === "WIN") {
      return <h1 className="text-success">YOU WIN!</h1>;
    }else if(result === "LOSE"){
        return <h1 className="text-danger">YOU LOSE!</h1>;
    }else{
        return <h1>DRAW</h1>;
    }
  };
  
  
  return (
    <div className="resultComponent">
      <div className="text-nowrap">{renderResult()}</div>
      <h2>
        Số bàn thắng: <span> {winning}</span>
      </h2>
      <h2>
        Số bàn chơi: <span> {playClick}</span>
      </h2>
      <button onClick={() => props.play()} className="btn btn-success">
        Play game
      </button>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    play: () => {
      let count = 0;
      let randomInterval = setInterval(()=>{
        dispatch(playAction());
        count ++;
        if(count >=15){
          clearInterval(randomInterval)
          dispatch(checkResult());
        }
      }, 100)
     
    },
  };
};
export default connect(null, mapDispatchToProps)(Result);
