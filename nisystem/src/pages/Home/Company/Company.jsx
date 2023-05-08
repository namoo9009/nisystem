import { Link } from "react-router-dom";
import styles from "./Company.module.css";

export default function HomeCompany() {
  return (
    <section className={styles.home_company}>
      <div className={`${styles.inner} inner`}>
        <h1>엔아이시스템을 소개합니다.</h1>
        <p>
          엔아이시스템은 고객을 우선적으로 생각하는 기업입니다.
          <br />
          엔아이시스템은 고객을 우선적으로 생각하는 기업입니다 감사합니다.
        </p>
        <Link to="/">
          <span>자세히 보기</span>
          <svg
            width="40"
            height="16"
            viewBox="0 0 40 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.5 2L39 8.5L32.5 15"
              stroke="#fff"
              stroke-miterlimit="10"
            />
            <path d="M39 8.5H0" stroke="#fff" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
