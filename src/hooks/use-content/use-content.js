import { useContext } from "react";
import LangContext from "../../contexts/lang";
import ContentContext from "../../contexts/content";
import images from "./helpers/image-requires";

export default function useContent() {
  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);

  const content = contentContext[`${langContext.lang}`];
  const pathNav = content.components.PathNav;

  return [content, images, pathNav];
}
