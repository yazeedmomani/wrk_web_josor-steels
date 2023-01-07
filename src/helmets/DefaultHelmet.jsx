import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import LangContext from "../context/lang-context";

function DefaultHelmet(){
    const langContext = useContext(LangContext);
  
    return ( 
    <Helmet htmlAttributes={{ lang : langContext.lang, dir: langContext.dir }} titleTemplate="%s | Josor Steels">
        {/* HTML Meta Tags */}
        <meta charset="UTF-8" />

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <meta name="title" content="TODO" />
        <meta name="description" content="TODO" />
        <meta name="author" content="Yazeed al-Momani" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="english" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="”notranslate”" />
        <meta name="revised" content="TODO" />
        <meta name="rating" content="TODO" />
        <meta name="HandheldFriendly" content="TODO" />
        <meta name="format-detection" content="telephone=yes"/>

        {/* Open Graph Protocols */}
        <meta property="og:url" content="TODO" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TODO" />
        <meta property="og:title" content="TODO" />
        <meta property="og:description" content="TODO" />
        <meta property="og:image" content="TODO" />
        <meta property="og:image:alt" content="TODO" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="TODO" />
        <meta property="twitter:url" content="TODO" />
        <meta name="twitter:title" content="TODO" />
        <meta name="twitter:description" content="TODO" />
        <meta name="twitter:image" content="TODO" />
        <meta name="twitter:image:alt" content="TODO" />
        <meta name="twitter:creator" content="@yaz_momani" />
  </Helmet>
  )
};

export default DefaultHelmet;