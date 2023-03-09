import { useNavigate } from "react-router";

import Button from "../../../../components/buttons/Button";

import styles from "./contact.module.css";

import useContent from "../../../../hooks/use-content/use-content";

export default function Contact() {
  const [content] = useContent();
  const usedContent = content.home.contact;

  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();

    navigate(usedContent.button.to);
  }

  return (
    <section className={styles.section}>
      <h2 className="h3">{usedContent.title}</h2>
      <Button
        type="primary"
        onClick={handleClick}>
        {usedContent.button.text}
      </Button>
    </section>
  );
}
