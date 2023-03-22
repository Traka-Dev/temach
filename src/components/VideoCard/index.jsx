import { motion } from "framer-motion"
import styles from "@/styles/VideoCard.module.css"

export const VideoCard = ({
  videoId = "PLISQYenBhbyOlGvSaTU2xDabfPOeyZYV9",
  isPlayList = true,
  title = "Video Del Temach",
  width = 460,
  height = 275,
}) => {
  const PLAYLIST_URL = "videoseries?list="
  const VIDEO_URL = "https://www.youtube-nocookie.com/embed/"
  const BASE_URL = VIDEO_URL + (isPlayList && PLAYLIST_URL)

  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: "0" }}
      transition={{ duration: 1 }}
      className={styles.card}
    >
      <h2 className={styles.title}>{title}</h2>
      <iframe
        width={width}
        height={height}
        src={BASE_URL + videoId}
        title={title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </motion.div>
  )
}
