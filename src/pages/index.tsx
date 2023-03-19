import { HeadHtml } from "@/components/HeadHtml"
import { Navbar } from "@/components/Navbar"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <HeadHtml />
      <Navbar />
      <main
        style={{ backgroundImage: "url('./bg.jpeg')" }}
        className={styles.main}
      ></main>
    </>
  )
}
