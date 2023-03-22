import { VideoCard } from "@/components/VideoCard"
import styles from "@/styles/LatestVideos.module.css"

export const LatestVideos = () => {
  const MARTES_WAR_MODE = {
    id: "PLISQYenBhbyP-5N5oMRDYILwur45_rzjV",
    title: "Martes De Modo Guerra",
  }
  const TEMACH_VLOGS = {
    id: "PLISQYenBhbyOlGvSaTU2xDabfPOeyZYV9",
    title: "Temach Vlogs",
  }
  const MUSICA_ALFA = {
    id: "PLISQYenBhbyPWf_8zDIjpG0SR0TvpepUj",
    title: "Musica Alfa",
  }
  const VIERNES_MORRAS = {
    id: "PLfQJZr0RNHTVQZAihMJ0x1cPpOhNbdcJ4",
    title: "Viernes De Morras",
  }

  return (
    <div className={styles.container}>
      <VideoCard videoId={MARTES_WAR_MODE.id} title={MARTES_WAR_MODE.title} />
      <VideoCard videoId={TEMACH_VLOGS.id} title={TEMACH_VLOGS.title} />
      <VideoCard videoId={MUSICA_ALFA.id} title={MUSICA_ALFA.title} />
      <VideoCard videoId={VIERNES_MORRAS.id} title={VIERNES_MORRAS.title} />
    </div>
  )
}
