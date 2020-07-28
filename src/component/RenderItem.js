import React from "react";
import { connect } from "react-redux";
import { chooseItemAction } from "../action/oantutiAction";
function RenderItem(props) {
  let { propsImg, item } = props;
  return(
  <img
  onClick={()=>props.chooseItem(item)}
    className="mx-1"
    src={propsImg}
    style={{
      width: "50px",
      height: "50px",
      backgroundColor: "white",
      cursor: "pointer",
    }}
    alt=""
  />
  );
}
const mapDispatchToProps = (dispatch) =>{
  return{
    chooseItem: (item) => dispatch(chooseItemAction(item))
  }
}
export default connect(null, mapDispatchToProps)(RenderItem)