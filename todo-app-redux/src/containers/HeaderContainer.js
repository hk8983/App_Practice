import { connect } from "react-redux";
import Topbar from "../component/topbar/Topbar";

const mapStateToProps = (state) => ({
  data: state.cardItems,
});

export default connect(mapStateToProps)(Topbar);
