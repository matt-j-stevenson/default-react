import styles from '../style/module/Hello.module.scss'

const Hello = ({ text }) => {
  return (
    <>
      <h1 className={styles.Hello}>{text}</h1>
    </>
  )
}

export default Hello
