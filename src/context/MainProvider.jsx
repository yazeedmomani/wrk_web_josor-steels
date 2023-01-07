import LangProvider from "./LangProvider";
import ArabicProvider from "./ArabicProvider";
import EnglishProvider from "./EnglishProvider";

function MainProvider(props) {
  return (
    <LangProvider>
      <ArabicProvider>
        <EnglishProvider>{props.children}</EnglishProvider>
      </ArabicProvider>
    </LangProvider>
  );
}

export default MainProvider;
