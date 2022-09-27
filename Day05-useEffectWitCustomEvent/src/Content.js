import { useState, useEffect } from "react";

const pages = [
    {
        id: 1,
        title: "Page 1",
    },
    {
        id: 2,
        title: "Page 2",
    },
    {
        id: 3,
        title: "Page 3",
    }
];

function Content() {
    const [pageID, setPageID] = useState(1);

    useEffect(() => {
        const listener = (e) => {
            setPageID(e.detail.id);
            console.log(e.detail.id);
        };
        window.addEventListener(`page-${pageID}`, listener);
        return () => {
            window.removeEventListener(`page-${pageID}`, listener);
        };
    }, [pageID]);
    console.log('re-render..');

    return (
        <div>
            <ul>
            {
                pages.map( page => (
                    <li  
                    key={page.id} 
                    onClick={() => setPageID(page.id)}>{page.title}</li>
                ))
            }
            </ul>
            
        </div>
    );
}

export default Content