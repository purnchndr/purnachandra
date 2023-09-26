import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import style from "./HomePage.module.css";
import {
  LinkedInIcon,
  DocumentIcon,
  InstagramIcon,
  GithubIcon,
  EmailIcon,
  PhoneIcon,
} from "../components/common/Icons";
import { Link } from "react-router-dom";
import Modal from "../components/common/Modal/Modal";
import { useState } from "react";

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
      <Skills />
      <Projects />
      <Experience />
      <Education />
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

function Experience() {
  return (
    <section className={`${style.eperienceSection} ${style.reverseFlex}`}>
      <h1 className={style.experienceHeading}>Profession Experience</h1>
      <div className={style.experienceSectionCntnr}>
        <aside className={style.experienceAside}>
          <div className={style.experienceTitle}>
            <h1>Tata Cunsultancy Services (TCS)</h1>
            <p>Assistant Systems Engineer</p> ||
            <small>Apr 2023 - Jul 2023</small>
          </div>
          <summary className={style.experienceSummary}>
            <p>
              &bull;&nbsp;&nbsp; &nbsp;&nbsp;As a Full Stack Engineer, my main
              role is to design and develop an Ecommerce website using React and
              Node. <br />
              &bull;&nbsp;&nbsp; &nbsp;&nbsp;This involves understanding the
              client&#39;s requirements, designing the website&#39;s
              architecture, and integrating various third-party tools to enhance
              the user experience
            </p>
          </summary>
        </aside>
        <aside className={style.experienceAside}>
          <div className={style.experienceTitle}>
            <h1>Newgen Software</h1>
            <p>Applications Engineer</p> ||
            <small>Nov 2021 - Mar 2023</small>
          </div>
          <summary className={style.experienceSummary}>
            <p>
              &bull;&nbsp;&nbsp; &nbsp;&nbsp;Worked on a Hybrid mobile App
              (Android and IOS) for a leading Corporate Bank, to create a very
              secure and robust online/offline Corporate loan initiation App.{" "}
              <br />
              &bull;&nbsp;&nbsp; &nbsp;&nbsp;Integrate the app to various APIs
              of main process and third party to maintain workflow in mobile
              app.
              <br />
              &bull;&nbsp;&nbsp; &nbsp;&nbsp;Technology used : Java, Javascript,
              SQL, HTML, CSS, JSON, React.js, Node.js, Express.js, MongoDb
            </p>
          </summary>
        </aside>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className={`${style.eperienceSection} ${style.reverseFlex}`}>
      <h1 className={style.experienceHeading}>Education</h1>
      <div className={style.experienceSectionCntnr}>
        <aside className={style.experienceAside}>
          <div className={style.experienceTitle}>
            <h1>Dr. Abdul Kalam Technical University</h1>
            <p>Lucknow, Uttar Pradesh, India</p> ||
            <small>Aug 2017 - Sep 2021</small>
          </div>
          <summary className={style.experienceSummary}>
            <p>
              &bull;&nbsp;&nbsp; &nbsp;&nbsp;Completed my Bachelors with Honors
              in Electronics and Cummunications Engineering.
              <br />
              &bull;&nbsp;&nbsp; &nbsp;&nbsp;Learned Fundament of Cumputer
              Science and Developed many Projects with my team.
            </p>
          </summary>
        </aside>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className={`${style.eperienceSection} ${style.reverseFlex}`}>
      <h1 className={style.experienceHeading}>Skills</h1>
      <div className={style.experienceSectionCntnr}>
        <div className={style.experienceAside}>
          <span className={style.skill}>Ract.js</span>
          <span className={style.skill}>Node.js</span>
          <span className={style.skill}>Express.js</span>
          <span className={style.skill}>MongoDb</span>
          <span className={style.skill}>Javascript</span>
          <span className={style.skill}>Java</span>
          <span className={style.skill}>SQL</span>
          <span className={style.skill}>HTML</span>
          <span className={style.skill}>CSS</span>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [modalshow, setModalShow] = useState(false);
  const [data, setData] = useState({});
  const projects = [
    {
      header: "Country Rush",
      link: "https://prataps-country-rush.netlify.app/",
      footer: "Visit Country Rush to know more 👉",
      tech: "React",
      time: "2023",
      image: "https://purnchndr.github.io/imagecdn/img/purnchndr/country.png",
    },
    {
      header: "Eat And Split",
      link: "https://prataps-eat-n-split.netlify.app/",
      footer: "Visit Eat And Split to know more 👉",
      tech: "React",
      time: "2023",
      image: "https://purnchndr.github.io/imagecdn/img/purnchndr/eansplit.png",
    },
    {
      header: "TO DO App",
      link: "https://ill-puce-sturgeon-tam.cyclic.app/Good%20morning",
      footer: "Visit TO DO App to know more 👉",
      tech: "Node, EJS",
      time: "2022",
      image: "https://purnchndr.github.io/imagecdn/img/purnchndr/todo.png",
    },
    {
      header: "Far Away",
      link: "https://prataps-travel-list.netlify.app/",
      footer: "Visit Far Away to know more 👉",
      tech: "React",
      time: "2023",
      image: "https://purnchndr.github.io/imagecdn/img/purnchndr/faraway.png",
    },
  ];
  function closeModal() {
    setModalShow(false);
  }

  function setModal(i) {
    setData(projects[i]);
    setModalShow(true);
  }
  return (
    <section className={style.projectSection}>
      {modalshow ? (
        <Modal
          closeModal={closeModal}
          link={data.link}
          header={data.header}
          show={modalshow}
          footer={data.footer}
        >
          <iframe className={style.projectIframe} src={data.link} />
        </Modal>
      ) : null}

      <h1 className={style.projectHeading}>Projects</h1>
      <div className={style.projectCntnr}>
        {projects.map((curr, i) => {
          return (
            <div
              key={i}
              onClick={() => setModal(i)}
              className={style.projectCard}
            >
              <div className={style.projectTitle}>
                <h1>{curr.header}</h1>
                <p>{curr.tech}</p> ||
                <small>{curr.time}</small>
              </div>
              <summary className={style.projectImgCntnr}>
                <img
                  className={style.projectImg}
                  src={curr.image}
                  alt={curr.header}
                />
              </summary>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HomePage;
