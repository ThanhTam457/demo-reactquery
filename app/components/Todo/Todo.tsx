'use client'

import { useSearchParams } from 'next/navigation';
import TaskList from './Tasks';

const Todo = () => {
    const searchParams = useSearchParams();
    const userId = Number(searchParams.get('data'));
    console.log(userId);
    
    return ( 
        <div className="bg-white">
            <h1 className="text-center text-3xl font-bold">Todo task</h1>
            <TaskList userID={userId}/>
        </div>
     );
}
 
export default Todo;