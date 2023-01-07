import LangProvider from "./LangProvider";
import ContentProvider from "./ContentProvider";

function MainProvider(props) {
  return (
    <LangProvider>
      <ContentProvider>{props.children}</ContentProvider>
    </LangProvider>
  );
}

export default MainProvider;
