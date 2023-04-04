import Image from 'next/image'
import Navbar from './(NavBar)/Navbar'
import Main from './(components)/Main'
import PopularSeals from './(components)/PopularSeals'
import { heroapi } from '../constants'
import Higlights from './(components)/Higlights'
import TopRatedSels from './(components)/TopRatedSels'
export default function Home() {
  return (
    <main className="w-full h-auto overflow-hidden ">
      <Navbar/>
      <Main heroapi={heroapi}/>
      <PopularSeals />
      <Higlights/>
      <TopRatedSels/>
    </main>
  )
}
