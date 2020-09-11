import React from "react";
import { connect } from "react-redux";
import { chooseItemAction } from "../action/oantutiAction";
function RenderItem(props) {
  let { propsImg, item } = props;
  let keyframe = `@keyframes randomAnimation${Date.now()}{
    0% {top: -25px}
    25% {top: 50px}
    50% {top: -25px}
    75% {top: 50px}
    100% {top: 0px}
  }`
  console.log(keyframe);
  return(
    <div style={{position: 'relative', width: "50px",
    height: "50px",overflow: 'hidden', backgroundColor: 'white'}}>
    <style>
      {keyframe}
    </style>
  <img
  onClick={()=>props.chooseItem(item)}
    
    src={propsImg}
    style={{
      width: "50px",
      height: "50px",
      backgroundColor: "white",
      cursor: "pointer",
      position: 'absolute',
      top: 0,
      left: 0,
      animation: `randomAnimation${Date.now()} 0.5s`,
    }}
    alt=""
  />
  </div>
  );
}
const mapDispatchToProps = (dispatch) =>{
  return{
    chooseItem: (item) => dispatch(chooseItemAction(item))
  }
}
export default connect(null, mapDispatchToProps)(RenderItem)