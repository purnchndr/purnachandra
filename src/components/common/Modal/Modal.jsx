import { Link } from "react-router-dom";
import style from "./Modal.module.css";
import { CrossIcon, OpenLinkIcon } from "../Icons";

function Modal({
  header,
  children,
  link,
  footer,
  show,
  closeModal,
  width = 700,
}) {
  if (!show) return;
  return (
    <div
      className={`${style.modalOverlay} ${show ? style.show : ""}`}
      onClick={closeModal}
    >
      <div
        className={style.modalCntnr}
        width={width}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.modalHeader}>
          <h1 className={style.modalHeaderText}>{header}</h1>
          <span className={style.closeModal} onClick={closeModal}>
            <CrossIcon size={25} />
          </span>
        </div>
        <div className={style.modalBody}>{children}</div>

        <div className={style.modalFooter}>
          <p className={style.footerText}>{footer}</p>
          {link ? (
            <Link to={link} target="_blanl">
              <OpenLinkIcon size={25} />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Modal;
