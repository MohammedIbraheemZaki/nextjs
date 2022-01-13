import Link from 'next/link'
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return{
    props: {persons: data}
  }
}
const Persons = ({persons}) => {
  return (
    <div className='container' >
      <div className="row">
        <div className="col-12">
          <h1>All persons page</h1>
        </div>

        {persons.map(person => (
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
