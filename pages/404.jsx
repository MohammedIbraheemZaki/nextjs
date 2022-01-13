import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
const Error = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
      console.log('effect after 2000 seconds');
    }, 2000)
  }, [])
  return (
    <div className='container'>
      <div className="row">
        <div className="col-12">
          <h1>enta 7mar yala </h1>
          <Link href='/' >
            dos hena 34an trg3 lel home
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Error
