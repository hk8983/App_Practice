import { connect } from "react-redux";
import { AddToCart, RemoveToCart } from "../actions";
import Home from "./Home";

const mapStateToProps = (state) => ({
  data: state.cardItems,
});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(AddToCart(data)),
  RemoveToCartHandler: (data) => dispatch(RemoveToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
