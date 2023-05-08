import styles from "./About.module.css";

export default function HomeAbout() {
  return (
    <section className={styles.home_about}>
      <div className="inner">
        <h1>About 엔아이시스템</h1>
        <p className={styles.description}>엔아이시스템은 전문성을 기반으로 최상의 네트워크 서비스를 고객에게 제공합니다</p>
        <ul>
            <li>
                <img src="" alt="" />
                <div>
                    <p>17<span>년</span></p>
                    <p>경력연수</p>
                </div>
            </li>
            <li>
                <img src="" alt="" />
                <div>
                    <p>300<span>개</span></p>
                    <p>고객사</p>
                </div>
            </li>
            <li>
                <img src="" alt="" />
                <div>
                    <p>500<span>Bps</span></p>
                    <p>트래픽</p>
                </div>
            </li>
            <li>
                <img src="" alt="" />
                <div>
                    <p>400<span>??</span></p>
                    <p>Rack</p>
                </div>
            </li>
            <li>
                <img src="" alt="" />
                <div>
                    <p>300<span>개</span></p>
                    <p>고객사</p>
                </div>
            </li>
        </ul>
      </div>
    </section>
  );
}
