import LangProvider from "./lang/provider";
import ContentProvider from "./content/provider";

export default function Provider(props) {
  return (
    <LangProvider>
      <ContentProvider>{props.children}</ContentProvider>
    </LangProvider>
  );
}
