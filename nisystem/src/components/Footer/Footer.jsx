import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className="inner">
        <ul className={styles.terms}>
          <li>
            <Link to="/">이용약관</Link>
          </li>
          <li>
            <Link to="/">개인정보처리방침</Link>
          </li>
        </ul>
        <ul className={styles.company_box}>
          <li>(주)엔아이시스템</li>
          <li>대표이사 이현봉</li>
          <li>사업자등록번호 646-81-02517</li>
          <li>경기도 의왕시 성고개로 53, A동 805호 (포일동, 에이스청계타워)</li>
        </ul>
        <p className={styles.copyrite}>
          Copyright ⓒ NISYSTEM. All rights reserved.
        </p>
      </div>
    </section>
  );
}
