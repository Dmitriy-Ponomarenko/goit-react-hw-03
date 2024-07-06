import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.user}>
        <p>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p>
          <BsFillTelephoneFill className={css.icon} />
          {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)} className={css.button}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
