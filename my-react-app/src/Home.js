import { useState, useEffect} from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    // make a usestate
    const [name2, setName2] = useState('mario');


    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('luigi');
        setAge(30);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Klik her</button>

            { error && <div>{ error }</div> }
            {isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs"/> */}
            <button onClick={() => setName2('luigi')}>change name</button>
            <p> { name2 }</p>
        </div>
     );
}
 
export default Home;