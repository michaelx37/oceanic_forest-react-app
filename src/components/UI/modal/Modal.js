import classes from './Modal.module.css';

const Modal = (props) => {
  return (
    <div className={classes.bg1}>
      <div className={classes.bg2}>
        <div className={classes.content}>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
