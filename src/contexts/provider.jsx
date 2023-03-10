import { Provider as LangProvider } from "./lang/";
import { Provider as ContentProvider } from "./content/";

export default function Provider(props) {
  return (
    <LangProvider>
      <ContentProvider>{props.children}</ContentProvider>
    </LangProvider>
  );
}
