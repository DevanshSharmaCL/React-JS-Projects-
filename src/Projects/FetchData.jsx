import React, { useEffect, useState } from 'react';

function FetchData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

    return (
        <div>
            {data.length > 0 ? (
                data.slice(0, 5).map((post) => ( // Display only first 5 posts
                    <div key={post.id}>
                        <h1>Title: {post.title}</h1>
                        <p>Body: {post.body}</p>
                        <hr />
                    </div>
                ))
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
}

export default FetchData;
