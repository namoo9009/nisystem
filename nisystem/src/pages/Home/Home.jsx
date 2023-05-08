import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HomeAbout from "./About/About";
import HomeBanner from "./Banner/Banner";
import HomeBusiness from "./Business/Business";
import HomeCompany from "./Company/Company";
import styles from "./Home.module.css";
import HomeReference from "./Reference/Reference";

export default function () {
  return (
    <>
      <Header />
      <main className={styles.home}>
        <HomeBanner />
        <HomeAbout />
        <HomeReference />
        <HomeBusiness />
        <HomeCompany />
      </main>
      <Footer />
    </>
  );
}
