import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  const menuList = [
    { name: "Home", link: "/" },
    { name: "회사소개", link: "/" },
    { name: "사업소개", link: "/" },
    { name: "고객문의", link: "/" },
    { name: "채용", link: "/" },
  ];
  return (
    <header className={styles.header}>
      <div className={`inner ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="NI System 로고"
          />
        </Link>
        <div className={styles.menu}>
          <div className={styles.list_1dep}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              Home
            </NavLink>
          </div>
          <div className={styles.list_1dep}>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              회사소개
            </NavLink>
            <div className={styles.list_2dep}>
              <Link to="/about/company">엔아이시스템 소개</Link>
              <Link to="/about/message">인사말</Link>
              <Link to="/about/history">연혁</Link>
              <Link to="/about/client">고객사</Link>
              <Link to="/about/vendor">협력사</Link>
              <Link to="/about/location">오시는 길</Link>
            </div>
          </div>
          <div className={styles.list_1dep}>
            <NavLink
              to="/business"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              사업소개
            </NavLink>
            <div className={styles.list_2dep}>
              <Link to="/">Firewall</Link>
              <Link to="/">Switch</Link>
              <Link to="/">AP</Link>
              <Link to="/">Software</Link>
              <Link to="/">MSP</Link>
              <Link to="/">Consulting</Link>
              <Link to="/">Global Service</Link>
            </div>
          </div>
          <div className={styles.list_1dep}>
            <NavLink
              to="/costomer"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              고객문의
            </NavLink>
          </div>
          <div className={styles.list_1dep}>
            <NavLink
              to="/employment"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              채용
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
