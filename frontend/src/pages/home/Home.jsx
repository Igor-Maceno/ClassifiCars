import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styles from './Home.module.css';
import Card from '../../components/card/Card';

const Home = () => {
  return (
    <div>
      <div className={styles.search}>
        <SearchIcon/>
        <input type="text" name='search' placeholder='Busque por marca ou modelo'/>
        <label htmlFor="search">Pesquisar</label>
      </div>
      <div className={styles.news}>
        <Card name="Igor"/>
      </div>
    </div>
  )
}

export default Home