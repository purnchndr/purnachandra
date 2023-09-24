import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import style from "./HomePage.module.css";
import resume from "../assets/docs/PratapResume.pdf";
import {
  LinkedInIcon,
  DocumentIcon,
  InstagramIcon,
  GithubIcon,
  EmailIcon,
  PhoneIcon,
} from "../components/common/Icons";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

function Main() {
  return (
    <main className={style.main}>
      <Intro />
    </main>
  );
}

function Intro() {
  return (
    <section className={style.section}>
      <div className={style.intro}>
        <p>Hi, I am </p>
        <div className={style.name}>
          <h1 className={style.firstName}>Purnachandra </h1>
          <h2 className={style.lastName}>Pratap Nishad</h2>
        </div>
        <div className={style.profession}>
          <p>Software Engineer and Full Stack Developer</p>
        </div>
        <div className={style.links}>
          <Link
            target="_blank"
            title="Linkedin link"
            className={style.navlink}
            to="https://www.linkedin.com/in/purnchndr/"
          >
            <LinkedInIcon size={15} />
          </Link>

          <Link
            target="_blank"
            title="Github Link"
            className={style.navlink}
            to="https://www.github.com/purnchndr/"
          >
            <GithubIcon size={15} />
          </Link>
          <Link
            target="_blank"
            title="Resume document"
            className={style.navlink}
            to="https://docs.google.com/document/d/18PEardLKILyrmBauSSOVJrAi6Ve1SLxgg4aBELqgZBk/edit?usp=sharing"
          >
            <DocumentIcon size={15} />
          </Link>
          <Link
            target="_blank"
            title="Instagram Link"
            className={style.navlink}
            to="https://www.instagram.com/purnchndr/"
          >
            <InstagramIcon size={15} />
          </Link>
          <Link
            title="Email Link"
            className={style.navlink}
            to="mailto:pratap.careers@gmail.com"
          >
            <EmailIcon size={15} />
          </Link>
          <Link
            title="Phone Link"
            className={style.navlink}
            to="tel:+919125847068"
          >
            <PhoneIcon size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
