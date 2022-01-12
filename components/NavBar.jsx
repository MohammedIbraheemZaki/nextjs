import Link from 'next/link'

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Ninja List</h1>
      </div>
      <div className="links">
        <Link href="/" >
          <a>Home</a>
        </Link>
        <Link href="/about" >
          <a>About</a>
        </Link>
        <Link href="/persons" >
          <a>Ninja Listing</a>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
