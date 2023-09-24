import style from "./Footer.module.css";
import {
  LinkedInIcon,
  DocumentIcon,
  InstagramIcon,
  GithubIcon,
} from "../common/Icons";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.section}>
        <h3 className={style.footerHeading}>Purnachandra</h3>
        <div className={style.conataint}>
          <p>
            I love problem solving using code, want to have a talk, fill free to
            connect me.
          </p>
        </div>
      </div>
      <hr className={style.line} />
      <div className={style.section}>
        <h3 className={style.footerHeading}>Connect With Me</h3>
        <div className={style.conataint}>
          <Link
            title="Linkedin link"
            className={style.navlink}
            to="https://www.linkedin.com/in/purnchndr/"
          >
            <LinkedInIcon size={20} />
          </Link>

          <Link
            title="Github Link"
            className={style.navlink}
            to="https://www.linkedin.com/in/purnchndr/"
          >
            <GithubIcon size={20} />
          </Link>
          <Link
            title="Resume document"
            className={style.navlink}
            to="https://www.linkedin.com/in/purnchndr/"
          >
            <DocumentIcon size={20} />
          </Link>
          <Link
            title="Instagram Link"
            className={style.navlink}
            to="https://www.linkedin.com/in/purnchndr/"
          >
            <InstagramIcon size={20} />
          </Link>
        </div>
      </div>
      <hr className={style.line} />
      <div className={style.section}>
        <h3 className={style.footerHeading}>Social Links</h3>
        <div className={style.conataint}>
          <Link
            title="Linkedin link"
            className={style.navlink}
            to="https://www.linkedin.com/in/purnchndr/"
          >
            <LinkedInIcon size={20} />
          </Link>

          <Link
            title="Github Link"
            className={style.navlink}
            to="https://www.linkedin.com/in/purnchndr/"
          >
            <GithubIcon size={20} />
          </Link>
          <Link
            title="Resume document"
            className={style.navlink}
            to="https://www.linkedin.com/in/purnchndr/"
          >
            <DocumentIcon size={20} />
          </Link>
          <Link
            title="Instagram Link"
            className={style.navlink}
            to="https://www.linkedin.com/in/purnchndr/"
          >
            <InstagramIcon size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
