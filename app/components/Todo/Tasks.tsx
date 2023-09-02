'use client'
import { useQuery } from '@tanstack/react-query';

type Task = {
    id: number,
    title: string,
    userId: number,
    completed: boolean,
}

type props = {
    userID: number,
}

const TaskList = ({ userID }: props) => {
    // const url = 'https://jsonplaceholder.typicode.com/todos';
    // console.log(url);
    const { isLoading, error, data } = useQuery({
        queryKey: ['todos'],
        queryFn: () => fetch(`https://jsonplaceholder.typicode.com/users/${userID}/todos`).then(
            (res) => res.json()
            )
    })

    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred!!!'


    return (
        <div className='px-20'>
            {data.map((task: Task) => (
                <div className='border-2 px-5 py-4'>
                    <p>Name: {task.title}</p>
                    {/* <p className={`${task.completed === true && "text-green-400"}`}>Completed</p> */}
                    {task.completed === true ? (
                        <div className='text-green-400'>Completed</div>
                    ) : (
                        <div className='text-red-500'>Not Completed</div>
                    )
                }
                </div>
            ))}
           
        </div>
    );
}

export default TaskList;