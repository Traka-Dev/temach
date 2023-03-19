import { HeadHtml } from "@/components/HeadHtml"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <HeadHtml />
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
