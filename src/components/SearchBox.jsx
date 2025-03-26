'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function SearchBox() {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${searchTerm}`);
    };
  return (
    <div>
      <form className='flex justify-between px-5 max-w-6xl mx-auto' onSubmit={handleSubmit}>
        <input
        type='text'
        placeholder='Search keywords...'
        className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1'
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)}></input>
        <button type='submit' className='px-4 py-2 text-amber-600  rounded-lg disabled:text-gray-400 '
        disabled={!searchTerm}>Search</button>
      </form>
    </div>
  )
}
