import { HeadHtml } from "@/components/HeadHtml"
import { Navbar } from "@/components/Navbar"
import { LatestVideos } from "@/components/LatestVideos"
import { motion } from "framer-motion"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <HeadHtml />
      <Navbar />
      <main className={styles.main}>
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: "0" }}
          transition={{ duration: 1 }}
          className={styles.hero}
        ></motion.div>
        <div
          style={{
            zIndex: "10",
            backgroundColor: "#e9e1e1",            
            marginTop: "-15vh",
            minHeight: "50vh",
            width: "80vw",
          }}
        >
          <LatestVideos />
        </div>
      </main>
    </>
  )
}
