import EnglishContext from "./english-context";

function EnglishProvider(props) {
  const store = {
    helmet: {
      defaultTemplate: "%s | Josor Steels",
      homeTitle: "Home",
      aboutUsTitle: "About us",
    },
  };

  return (
    <EnglishContext.Provider value={store}>
      {props.children}
    </EnglishContext.Provider>
  );
}

export default EnglishProvider;
