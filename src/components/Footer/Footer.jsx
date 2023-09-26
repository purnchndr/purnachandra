import style from "./Footer.module.css";
import {
  LinkedInIcon,
  DocumentIcon,
  InstagramIcon,
  GithubIcon,
  EmailIcon,
  PhoneIcon,
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
            target="_blank"
            title="Linkedin link"
            className={style.navlink}
            to="https://www.linkedin.com/in/purnchndr/"
          >
            <LinkedInIcon size={20} />
          </Link>

          <Link
            target="_blank"
            title="Instagram Link"
            className={style.navlink}
            to="https://www.instagram.com/purnchndr/"
          >
            <InstagramIcon size={20} />
          </Link>
          <Link
            title="Email Link"
            className={style.navlink}
            to="mailto:pratap.careers@gmail.com"
          >
            <EmailIcon size={20} />
          </Link>
          <Link
            title="Phone Link"
            className={style.navlink}
            to="tel:+919125847068"
          >
            <PhoneIcon size={20} />
          </Link>
        </div>
      </div>
      <hr className={style.line} />
      <div className={style.section}>
        <h3 className={style.footerHeading}>Social Links</h3>
        <div className={style.conataint}>
          <Link
            target="_blank"
            title="Linkedin link"
            className={style.navlink}
            to="https://www.linkedin.com/in/purnchndr/"
          >
            <LinkedInIcon size={20} />
          </Link>

          <Link
            target="_blank"
            title="Github Link"
            className={style.navlink}
            to="https://www.github.com/purnchndr/"
          >
            <GithubIcon size={20} />
          </Link>
          <Link
            target="_blank"
            title="Resume document"
            className={style.navlink}
            to="https://docs.google.com/document/d/18PEardLKILyrmBauSSOVJrAi6Ve1SLxgg4aBELqgZBk/edit"
          >
            <DocumentIcon size={20} />
          </Link>
          <Link
            target="_blank"
            title="Instagram Link"
            className={style.navlink}
            to="https://www.instagram.com/purnchndr/"
          >
            <InstagramIcon size={20} />
          </Link>
          <Link
            title="Email Link"
            className={style.navlink}
            to="mailto:pratap.careers@gmail.com"
          >
            <EmailIcon size={20} />
          </Link>
          <Link
            title="Phone Link"
            className={style.navlink}
            to="tel:+919125847068"
          >
            <PhoneIcon size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
