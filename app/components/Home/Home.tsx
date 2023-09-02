'use client'
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

interface User{
    id: number,
    name: string,
    username: string,
    phone: string,
    website: string,
}

const Home = () => {
    const {isLoading, error, data} = useQuery({
        queryKey: ['users'],
        queryFn: () =>
            fetch('https://jsonplaceholder.typicode.com/users').then(
                (res) => res.json(),
            ),
    })

    if(isLoading) return 'Loading...'
    if (error) return 'An error has occurred!'

    return ( 
        <div className='bg-white'>
            <h1 className='text-center mb-4 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>Welcome Admin!</h1>
            <h1 className='text-center text-2xl font-bold'>Please choose a user to see his Tasks</h1>
            <div className=' px-12'>
                {data.map((user: User)=>(
                    <div className='flex border-2 justify-between py-4 px-5' key={user.id}>
                        <div>
                            <p>Full name: {user.name}</p>
                            <p>Phone number: {user.phone}</p>
                            <p>Username: {user.username}</p>
                            <p>Website: {user.website}</p>
                        </div>
                        <div>
                            <Link href={{
                                pathname: '/todo',
                                query: {
                                    data: user.id
                                }
                            }}>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Choose</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
 
export default Home;