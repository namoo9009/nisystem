import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import PageHeader from "../../../components/PageHeader/PageHeader";
import PageTitle from "../../../components/PageTitle/PageTitle";
import styles from "./Company.module.css";

export default function AboutCompany() {
  return (
    <>
      <Header />
      <main className={styles.about_company}>
        <PageHeader
          title="엔아이시스템 소개"
          destription="엔아이시스템은 고객을 우선적으로 생각하는 기업입니다."
        />
        <OutlineSection />
        <MissionAndVisionSection />
      </main>
      <Footer />
    </>
  );
}

function OutlineSection() {
  return (
    <section className={styles.outline_section}>
      <div className={`${styles.inner} inner`}>
        <PageTitle title="개요" />
      </div>
    </section>
  );
}

function MissionAndVisionSection() {
  return (
    <section>
      <div className="inner">
        <PageTitle title="미션 및 비전" />
      </div>
      <div className={styles.mission_box}>
        <div className="inner">
          <h3>미션</h3>
          <p>
            최고의 컴포넌트와 독창적인 솔루션으로
            <br /> 모두에게 가치있는 경험을 제공한다
          </p>
          <p>
            We bring the best components and compelling solutions that enrich
            people's experience
          </p>
        </div>
      </div>
      <div className={styles.vision_box}>
        <h3>비전</h3>
        <p>
          나도 일하고 싶고,
          <br /> 누구나 함께 일하고 싶어하는
          <br /> 최고의 성장기업
        </p>
        <p>
          We bring the best components and compelling solutions
          <br />
          that enrich people's experience
        </p>
        <ul>
          <li>
            <div className={styles.vision_image_box}></div>
            <div className={styles.vision_test_box}>
              <p>전문성</p>
              <p>고객의 성공을 위해 최고의 기술에 집중한다.</p>
            </div>
          </li>
          <li>
            <div className={styles.vision_image_box}></div>
            <div className={styles.vision_test_box}>
              <p>안정성</p>
              <p>오너십을 가지고 자신의 성장을 위해 노력한다.</p>
            </div>
          </li>
          <li>
            <div className={styles.vision_image_box}></div>
            <div className={styles.vision_test_box}>
              <p>도전성</p>
              <p>핵심 분야에서 최고 수준의 전문가로 성장한다.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
