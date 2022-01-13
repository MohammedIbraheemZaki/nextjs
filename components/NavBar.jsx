import Link from 'next/link'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <div className="container">
          <Link href="/" >
            <a className="navbar-brand">Ninja List</a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
              <Link href="/" >
                <a className="nav-link active" aria-current="page">Home</a>
              </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" >
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/persons" >
                  <a className="nav-link">Persons</a>
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
