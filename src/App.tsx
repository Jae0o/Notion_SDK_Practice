import { Editor, Viewer } from "./lib/container";
import * as S from "./App.styles";

const App = () => {
  return (
    <S.Layout>
      <Editor />
      <Viewer />
    </S.Layout>
  );
};

export default App;
