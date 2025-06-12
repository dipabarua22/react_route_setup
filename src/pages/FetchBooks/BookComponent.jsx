import React from 'react';

const BookComponent = ({b}) => {

    const{_id, image, bookName, Writer,Price,Publishers,NumberofPage,BookType, LastUpdate, Description} = b;
    return (
        <div className='shadow-2xl p-4 rounded-lg'>
           <img className='w-36 h-48'src={image} alt="" />
           <p className='text-lg font-semibold'>{bookName}</p>
           <p><span className='font-semibold text-orange-500'>writer:</span>{Writer}</p>
           <p><span className='font-semibold text-orange-500'>price:</span>{Price}</p>
           <p><span className='font-semibold text-orange-500'>publisher:</span>{Publishers}</p>
           <p><span className='font-semibold text-orange-500'>Numberofpage:</span>{NumberofPage}</p>
           <p><span className='font-semibold text-orange-500'>Description:</span>{Description}</p>
        </div>
    );
};

export default BookComponent;


//router e api link load
//fetchbook.jsx(mapping)
//sent to book component
//book component recieve {b}
