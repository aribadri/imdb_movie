import classes from './MyModal.module.css';

function MyModal({ visible, setModal, children, setVideoUrl }) {
  const rootClasses = [classes.myModal];
  if (visible) {
    rootClasses.push(classes.active);
  }
  function closegModal() {
    setModal(false)
    setVideoUrl('')
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className={rootClasses.join(' ')} onClick={closegModal}>
      <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default MyModal;
