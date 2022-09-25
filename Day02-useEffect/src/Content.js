import { useState, useEffect } from "react";

const categories = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];

function Content() {
    const [content, setContent] = useState([]);
    const [tab, setTab] = useState('posts');

    console.log('Content rendered');

    const handleChangeCategories = (category) => {
        setTab(category);
        console.log(category);
    };

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${tab}`)
            .then((res) => res.json())
            .then((post) => setContent(post));
    },[tab]);


    return (
        <div>
            {
                categories.map(category => (
                    <button 
                    style = {tab === category ? {color: 'red'} : {color: 'black'}}
                    key={category} 
                    onClick={() => handleChangeCategories(category)}>
                        {category}
                    </button>
                ))
            }


            < ul >
                { tab === 'posts' && 
                    content.map((post) => (
                        <li key={post.id}>
                            {post.title}
                        </li>
                    ))
                        ||
                    tab === 'comments' && 
                    content.map((comment) => (
                        <li key={comment.id}>
                            {comment.name}
                        </li>
                    ))
                        ||
                    tab === 'albums' && 
                    content.map((album) => (
                        <li key={album.id}>
                            {album.title}
                        </li>
                    ))
                        ||
                    tab === 'photos' &&
                    content.slice(0, 100).map((photo) => (
                        <li key={photo.id}>
                            <img key={photo.id} src={photo.url}/>
                        </li>
                    ))
                        ||
                    tab === 'todos' &&
                    content.map((todo) => (
                        <li key={todo.id}>
                            {todo.title}
                        </li>
                    ))
                        ||
                    tab === 'users' &&
                    content.map((user) => (
                        <li key={user.id}>
                            {user.name}
                        </li>
                    ))
                }
            </ul >

        </div>
    )
}

export default Content