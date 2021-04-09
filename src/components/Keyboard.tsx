import React, {FC} from 'react'
import styles from '../styles/keyboard.module.sass'

const Button: FC = () => {
  return <div className={styles.button}></div>
}

const Keyboard: FC = () => {
  const layout = [
    Array.from({length: 14}),
    Array.from({length: 14}),
    Array.from({length: 14}),
    Array.from({length: 13}),
    Array.from({length: 12}),
    Array.from({length: 10}),
  ]

  return (
    <div className={styles.container}>
      {layout.map((row, i) => (
        <div key={`row-${i}`} className={styles.row}>
          {row.map((_, j) => (
            <Button key={`button-${i}-${j}`} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Keyboard
