import styles from './styles.module.scss'

const Header = ({...props}) => {
  return (<div className={styles.header}>
    {
      props.children
    }
  </div>);
};

export default Header;