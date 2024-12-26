import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
   <main>
    <h1>
      hello world
      {/* <a href="/users/new">new user</a> */}
    </h1>
      <Link href="/users">user</Link>
      <ProductCard />
   </main> 
  )
}
