import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App' // Ensure this matches the App.jsx exports
import { toast } from 'react-toastify'

const List = ({ token }) => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className='flex flex-col gap-2'>
      <p>All Products List</p>
      {/* Table headers and mapping logic... */}
      {list.map((item, index) => (
        <div key={index} className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border text-sm'>
          <img className='w-12' src={item.image[0]} alt="" />
          <p>{item.name}</p>
          <p>{item.category}</p>
          <p>{currency}{item.price}</p>
          <p className='text-right cursor-pointer'>X</p>
        </div>
      ))}
    </div>
  )
}

export default List