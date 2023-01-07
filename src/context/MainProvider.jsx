import LangProvider from "./LangProvider";
import ArabicProvider from "./ArabicProvider";

function MainProvider(props) {
  return (
    <LangProvider>
      <ArabicProvider>{props.children}</ArabicProvider>
    </LangProvider>
  );
}

export default MainProvider;
