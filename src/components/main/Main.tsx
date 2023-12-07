import Card from "../card/Card";
import Navigator from "../nav/Navigator";
import "./style/main.scss";
const Main = () => {
  return (
    <div className="main-container">
      <Navigator />
      <Card />
      {/* <Modal>
        <PostDetail />
      </Modal> */}
    </div>
  );
};

export default Main;
