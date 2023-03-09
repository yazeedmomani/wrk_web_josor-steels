import { useNavigate } from "react-router";

import styles from "./header.module.css";

import Button from "../../../../components/buttons/Button";
import useContent from "../../../../hooks/use-content/";

export default function Header() {
  const [content] = useContent();
  const usedContent = content.home.header;

  const navigate = useNavigate();

  function handlePrimaryClick(e) {
    e.preventDefault();

    navigate(usedContent.primaryButton.to);
  }

  return (
    <header className={styles.header}>
      <h1 className="h2">{usedContent.title}</h1>
      <p>{usedContent.subTitle}</p>
      <Button
        type="primary"
        onClick={handlePrimaryClick}>
        {usedContent.primaryButton.text}
      </Button>
      <Button
        type="secondary"
        href="#HomeServices">
        {usedContent.secondaryButton}
      </Button>
    </header>
  );
}
