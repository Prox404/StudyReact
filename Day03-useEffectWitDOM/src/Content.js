import { useState, useEffect } from "react";

const categories = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];

function Content() {
    const [content, setContent] = useState([]);
    const [tab, setTab] = useState('posts');
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY >= 200);
        }

        console.log('callback');

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            console.log('unmount');
        }
    }, []);

    

    const handleChangeCategories = (category) => {
        setTab(category);
        console.log(category);
    };

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${tab}`)
            .then((res) => res.json())
            .then((post) => setContent(post));
        // console.log('setContent');

        return () => {
            setContent([]);
            console.log('unmount');
        }   
    }, [tab]);

    console.log('Content rendered');

    return (
        <div>
            {
                categories.map(category => (
                    <button
                        style={tab === category ? { color: 'red' } : { color: 'black' }}
                        key={category}
                        onClick={() => handleChangeCategories(category)}>
                        {category}
                    </button>
                ))
            }


            < ul >
                {(() => {switch (tab) {
                    case 'posts':
                        // console.log('posts-render');
                        return content.map((post) => (
                            <li key={post.id}>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </li>
                        ));
                    case 'comments':

                        return content.map((comment) => (
                            <li key={comment.id}>
                                <h3>{comment.name}</h3>
                                <p>{comment.body}</p>
                            </li>
                        ));
                    case 'albums':
                        return content.map((album) => (
                            <li key={album.id}>
                                <h3>{album.title}</h3>
                            </li>
                        ));
                    case 'photos':
                        return content.slice(0,10).map((photo) => (
                            <li key={photo.id}>
                                <img src={photo.thumbnailUrl} alt={photo.title} />
                            </li>
                        ));
                    case 'todos':
                        return content.map((todo) => (
                            <li key={todo.id}>
                                <h3>{todo.title}</h3>
                                <p>{todo.completed ? 'Completed' : 'Not completed'}</p>
                            </li>
                        ));
                    case 'users':
                        return content.map((user) => (
                            <li key={user.id}>
                                <h3>{user.name}</h3>
                                <p>{user.email}</p>
                            </li>
                        ));
                    default:
                        return null;
                }})()}
                
            </ul >

            {scroll &&
                <div style={{position: 'fixed', bottom:10, right:10}}>
                    <button>Scroll to Top</button>
                </div>
            }
        </div>


    )
}

export default Content