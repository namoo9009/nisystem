import { Link } from "react-router-dom";
import styles from "./Reference.module.css";

export default function HomeReference() {
  return (
    <section className={styles.home_reference}>
      <div className={`${styles.inner} inner`}>
        <h1>Reference</h1>
        <div className={styles.description}>
          <p>10년 이상의 경력으로 전문성있는 서비스를 제공합니다.</p>
          <p>엔아이시스템의 검증된 레퍼런스를 확인해보세요.</p>
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
      </div>
    </section>
  );
}
