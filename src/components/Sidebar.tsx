import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img src="https://images.unsplash.com/photo-1614790871804-fe037bdc1214?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40" className={styles.cover} />

      <div className={styles.profile}>
        <Avatar src="https://github.com/kaiquecamposdev.png"/>

        <strong>Kaique de Campos M.</strong>
        <span>Web Developer</span>
      </div>
      
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}