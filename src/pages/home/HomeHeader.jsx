import { useNavigate } from "react-router";

import styles from "./HomeHeader.module.css";

import Button from "../../components/Button";

function HomeHeader() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <h1 className="h2">Josor Steels</h1>
      <p>Let your imagination go wild with our strong stable steels</p>
      <Button
        type="primary"
        onClick={navigate.bind(null, "/contact")}>
        Contact us
      </Button>
      <Button type="secondary">Learn more</Button>
    </header>
  );
}

export default HomeHeader;
