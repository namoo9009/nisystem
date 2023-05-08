import styles from "./Banner.module.css";

export default function HomeBanner() {
  return (
    <section className={styles.home_banner}>
      <div className="inner">
        <p>
          hybrid
          <br />
          IT service
        </p>
        <p>Network 전문인력을 통해 전문화된 서비스를 제공합니다.</p>
      </div>
    </section>
  );
}
