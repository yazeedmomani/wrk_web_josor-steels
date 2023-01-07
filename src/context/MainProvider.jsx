import LangProvider from "./LangProvider";

function MainProvider(props) {
  return <LangProvider>{props.children}</LangProvider>;
}

export default MainProvider;
