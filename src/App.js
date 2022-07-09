import Qna from "./components/Qna";
import Data from "./qnas.js";

function App() {
  return (
    <div className="faq-page">
      <h1>FAQ</h1>
      <div className="qna-container">
        {Data.map((item) => (
          <Qna key={item.key} {...item}></Qna>
        ))}
      </div>
    </div>
  );
}

export default App;
