import React from 'react';

const Albums = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums', { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const albums = await res.json();

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {albums.map((album: { id: number; title: string }) => (
                <div key={album.id} className='bg-white shadow-md rounded-lg p-4 transition duration-300 ease-in-out hover:scale-105'>
                    <h3 className='text-lg font-semibold mb-2'>{album.title}</h3>
                    <p className='text-gray-600'>ID: {album.id}</p>
                </div>
            ))}
        </div>
    );
};

export default Albums;