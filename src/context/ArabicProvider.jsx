import ArabicContext from "./arabic-context";

function ArabicProvider(props) {
  const store = {
    helmet:{
        defaultTemplate: '%s | شركة الجسور',
        homeTitle: 'الرئيسية',
        aboutUsTitle: 'عنا'
    }
  };

  return (
    <ArabicContext.Provider value={store}>
      {props.children}
    </ArabicContext.Provider>
  );
}

export default ArabicProvider;
