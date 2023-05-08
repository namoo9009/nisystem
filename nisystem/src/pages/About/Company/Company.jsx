import Header from "../../../components/Header/Header";
import PageHeader from "../../../components/PageHeader/PageHeader";
import styles from "./Company.module.css";

export default function AboutCompany() {
  return (
    <section className={styles.about_company}>
        <Header />
        <PageHeader title="엔아이시스템 소개" destription="엔아이시스템은 고객을 우선적으로 생각하는 기업입니다."/>
    </section>
  );
}
