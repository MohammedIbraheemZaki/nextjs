import Link from 'next/link'
import { useState, useEffect } from 'react'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return{
    props: {persons: data}
  }
}
const Persons = ({persons}) => {

  const [developers, setDevelopers] = useState(persons)
  const [filter, setFilter] = useState([])
  const [search, setSearch] = useState('')


  useEffect(() => {
    if(search === ''){
      setFilter(developers)
    } else {
      setFilter(developers.filter((developer) => developer.name.toLowerCase().includes(search.toLowerCase())))
    }
  }, [developers, search])

  const handleSearch = (e, name, index) => {
    setSearch(e.target.value)
    // setDevelopers(currentDeveloper => {
    //   const developers = [...currentDeveloper]
    //   developers[index] = {...developers[index], name}
    //   return developers
    // })
  }
  
  return (
    <div className='container' >
      <div className="row">
        <div className="col-12">
          <h1>All persons page</h1>
        </div>
        <input className="form-control my-4 " type="text" placeholder="Search for user" aria-label="default input example" value={search} onChange={handleSearch}/>
        {filter.map(person => (
          <div className="col-4"  key={person.id}>
            <div className="card mb-4 ">
              {/* <img src="..." className="card-img-top" alt="..."> */}
              <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-text">{person.email}</p>
                <p className="card-text">{person.address.street}</p>
                <Link href={'/persons/'+person.id} >
                  <a className="btn btn-primary">Go somewhere</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Persons
