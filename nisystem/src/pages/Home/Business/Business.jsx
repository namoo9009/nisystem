import { Link } from "react-router-dom";
import styles from "./Business.module.css";

export default function HomeBusiness() {
  return (
    <section className={styles.home_business}>
      <div className={`${styles.inner} inner`}>
        <ul>
          <li>
            <div className={styles.description}>
              <div>
                <h2>Firewall</h2>
                <p>
                  카카오모빌리티는 ‘스마트모빌리티’를 통해
                  <br /> 더 여유 있고 가치 있는 일상을 만들어가겠습니다.
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
                      stroke="#333"
                      stroke-miterlimit="10"
                    />
                    <path d="M39 8.5H0" stroke="#333" />
                  </svg>
                </Link>
              </div>
            </div>
            <img
              className={styles.image}
              src={`${process.env.PUBLIC_URL}/images/home_business.jpg`}
              alt="NI System 로고"
            />
          </li>
          <li>
            <div className={styles.description}>
              <div>
                <h2>Switch</h2>
                <p>
                  사람들이 더 많은 것을 보고 느끼고 발견할 수 있도록 <br />
                  생활을 변화시키는 이동 기술과 경험을 선보입니다.
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
                      stroke="#333"
                      stroke-miterlimit="10"
                    />
                    <path d="M39 8.5H0" stroke="#333" />
                  </svg>
                </Link>
              </div>
            </div>
            <img
              className={styles.image}
              src={`${process.env.PUBLIC_URL}/images/home_business.jpg`}
              alt="NI System 로고"
            />
          </li>
          <li>
            <div className={styles.description}>
              <div>
                <h2>MSP</h2>
                <p>
                  삶을 움직이는 모빌리티는 안전에서부터 시작합니다.
                  <br />
                  승객과 드라이버, 모두의 안전을 위해 노력하겠습니다.
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
                      stroke="#333"
                      stroke-miterlimit="10"
                    />
                    <path d="M39 8.5H0" stroke="#333" />
                  </svg>
                </Link>
              </div>
            </div>
            <img
              className={styles.image}
              src={`${process.env.PUBLIC_URL}/images/home_business.jpg`}
              alt="NI System 로고"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
