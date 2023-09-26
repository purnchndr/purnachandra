import { Link, NavLink } from "react-router-dom";

import style from "./Header.module.css";
import logo from "../../assets/img/icon.png";
import {
  LinkedInIcon,
  DocumentIcon,
  InstagramIcon,
  GithubIcon,
  EmailIcon,
  PhoneIcon,
} from "../common/Icons";

function Header() {
  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        <NavLink to="/" title="profile photo" className={style.navlink}>
          <img className={style.navimg} src={logo} alt="logo icon" />
        </NavLink>
        <div className={style.links}>
          <NavLink className={style.navlink} to="/">
            Projects
          </NavLink>
          <NavLink className={style.navlink} to="/">
            Experience
          </NavLink>
          <NavLink className={style.navlink} to="/">
            Contact
          </NavLink>
          <NavLink className={style.navlink} to="/">
            Education
          </NavLink>
        </div>
        <div className={style.links}>
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
      </nav>
    </header>
  );
}

export default Header;
