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
      <main className={styles.main}>
        <h1
          style={{
            color: "white",
          }}
        >
          EL TEMACH
        </h1>
      </main>
    </>
  )
}
