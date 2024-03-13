import React from 'react'

const ContactPage = () => {
  const HandleForm = (e) => {
    e.preventDefault()
  }

  return (
    <div className='contain'> 
        <div className='bg-background lg:px-10 px-4 py-10 mb-10 lg:w-2/4'>
            <div className='pb-10 border-b-[1px] border-gary-200'>
                <h1 className='text-3xl font-bold'>Contact our staff</h1>
                <p className='my-4 text-gray-600 text-xl'>Choose the appropriate method to contact us</p>
            </div>
            {/* email */}
            <div className='flex sm:flex-nowrap flex-wrap items-center gap-4 border-b-[1px] border-gray-200 py-10'>
                <h1 className='text-lg font-bold text-gray-700 whitespace-nowrap'>Email / </h1>
                <a className='text-mainblue sm:text-xl text-lg hover:text-sky-500' style={{wordWrap:'anywhere'}} href='mailto:ahmedmohamed@outlook.com'>ahmedmohamed@outlook.com</a>
            </div>
            {/* mobile phone */}
            <div className='flex sm:flex-nowrap flex-wrap gap-4 border-b-[1px] border-gray-200 py-10'>
                <h1 className='text-lg font-bold text-gray-700 whitespace-nowrap'>Phone Numbers / </h1>
                <div className='flex items-center justify-start flex-wrap gap-2'>
                    <a className='text-mainblue text-lg hover:text-sky-500' href='tel:01066404523'>01066404523</a>
                    <a className='text-mainblue text-lg hover:text-sky-500' href='tel:01066404523'>01066404523</a>
                </div>
            </div>
            {/* whatsapp number */}
            <div className='flex sm:flex-nowrap flex-wrap gap-4 border-b-[1px] border-gray-200 py-10'>
                <h1 className='text-lg font-bold text-gray-700 whitespace-nowrap'>Whatsapp Numbers / </h1>
                <div className='flex items-center justify-start flex-wrap gap-2'>
                    <a className='text-mainblue text-lg hover:text-sky-500' href='whatsapp://send?phone=+201066404523'>01066404523</a>
                    <a className='text-mainblue text-lg hover:text-sky-500' href='whatsapp://send?phone=+201066404523'>01066404523</a>
                </div>
            </div>
            {/* form  */}
            <form onSubmit={HandleForm} className='flex sm:flex-nowrap flex-wrap gap-4 border-b-[1px] border-gray-200 py-10'>
                <h1 className='text-lg font-bold text-gray-700 whitespace-nowrap'>Leave a message / </h1>
                <div className='grid lg:grid-cols-2 w-full gap-2'>
                  <input name='name' className='rounded border-gray-200 border-[1px] font-semibold py-1 px-2' placeholder='name'/>
                  <input name='phone' className='rounded border-gray-200 border-[1px] font-semibold py-1 px-2' placeholder='phone'/>
                    <textarea maxLength={500} name='msg' placeholder='messageg' className='lg:col-span-2 rounded border-gray-200 border-[1px] font-semibold py-1 px-2 resize-none' rows={6}></textarea>
                    <button className='border-[1px] border-gray-200 rounded bg-gray-600 hover:bg-gray-500 text-white py-1 lg:text-lg w-36'>send</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactPage