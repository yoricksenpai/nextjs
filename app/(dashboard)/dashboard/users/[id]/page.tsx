import React from 'react'
import { notFound } from 'next/navigation';

const Page = ({params}: {params : { id: string }}) => {
    if (!params || !params.id) {
        notFound(); // Gère le cas où l'ID est invalide
      }
    const {id} = params
    return (
        <div className='text-3xl'>User details page: {id}</div>
    )
}

export default Page