import '../UserCards/usercard.scss'
import { motion } from 'framer-motion'

interface Props {
  card: any,
  i: number
}
const index = ({ card, i }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -60 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.2, delay: i * 0.2 }}
      className='card__wrapper'>
      <div>{card.icon}</div>
      <h1>{card.title}</h1>
      <h2>{card.data}</h2>
    </motion.div>
  )
}

export default index