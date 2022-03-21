import { useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {

    //let name = 'mario';
    // make a usestate
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const [name2, setName2] = useState('mario');

   

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                console.log(res)
                if (!res.ok) {
                    throw Error('could not fetch the bacon for that resource')
                }
                return res.json()
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
        }, 1000);
       
    }, []);

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