import React from 'react'

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map(person => {
    return {
      params: {id: person.id.toString()}
    }
  })

  return{
    paths: paths,
    fallback: false
  }
}
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
  const data = await res.json();

  return{
    props: {person: data}
  }
}
const Person = ({person}) => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-12">
          <h1>Details page</h1>
          <p>{person.name}</p>
          <p>{person.email}</p>
          <p>{person.website}</p>
          <p>{person.phone}</p>
        </div>
      </div>
    </div>
  )
}

export default Person
