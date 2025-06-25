// import React, { useState } from 'react';
// import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

// const mockOrders = [
//   {
//     id: '312424SFS3',
//     paymentId: 'afdffaseREW12e',
//     name: 'Vikash',
//     product: 'Product A',
//     address: '123 Street, City',
//     phone: '1234567890',
//     email: 'vikash@example.com',
//     userId: 'user_123',
//     pinCode: '110001',
//     total: '$99.99',
//     status: 'Delivered',
//     date: '2025-06-10',
//     image: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/130-home_default/customizable-mug.jpg",
//   },
//   {
//     id: '7848AHSJ22',
//     paymentId: 'aei893asF123',
//     name: 'John Doe',
//     product: 'Product B',
//     address: '456 Avenue, Town',
//     phone: '9876543210',
//     email: 'john@example.com',
//     userId: 'user_456',
//     pinCode: '220011',
//     total: '$59.49',
//     status: 'Pending',
//     date: '2025-06-11',
//     image:'https://rukminim2.flixcart.com/image/416/416/xif0q/cycle/c/e/w/14t-xzx-seagreen-cycle-for-boys-and-girls-14-13-xaipro-56-single-original-imah8z5n78htm3rg.jpeg?q=70&crop=false',
//   },
//   {
//     id: '99482JJW02',
//     paymentId: 'xyz01312ABC',
//     name: 'Meera K',
//     product: 'Product C',
//     address: '789 Boulevard, City',
//     phone: '7689423011',
//     email: 'meera@example.com',
//     userId: 'user_789',
//     pinCode: '330022',
//     total: '$45.00',
//     status: 'Confirmed',
//     date: '2025-06-12',
//     image:'https://rukminim2.flixcart.com/image/128/128/xif0q/resistance-tube/y/n/l/tummy-trimmer-multipurpose-fitness-exerciser-for-home-gym-original-imagzujnvtrjmwft.jpeg?q=70&crop=false',
//   },
// ];




// const getStatusBadge = (status) => {
//   switch (status) {
//     case 'Delivered':
//       return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">Delivered</span>;
//     case 'Pending':
//       return <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded">Pending</span>;
//     case 'Confirmed':
//       return <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">Confirmed</span>;
//     default:
//       return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">{status}</span>;
//   }
// };

// const RecentOrders = () => {
//   const [openRows, setOpenRows] = useState({});

//   const toggleRow = (id) => {
//     setOpenRows((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   return (
//     <section className="">
//       <div className="flex flex-col md:flex-row   ">
//         <div className="w-full bg-white p-6 overflow-auto">
//           <h1 className="font-semibold text-xl ">Recent Orders</h1>
//           <table className="w-full mt-6 border-collapse border text-sm">
//             <thead className="bg-gray-100 text-left">
//               <tr>
//                 <th className="p-2 border text-center"></th>
//                 <th className="p-2 border">ORDER ID</th>
//                 <th className="p-2 border">PAYMENT ID</th>
//                 <th className="p-2 border">NAME</th>
//                 <th className="p-2 border">PRODUCT</th>
//                 <th className="p-2 border">ADDRESS</th>
//                 <th className="p-2 border">PHONE</th>
//                 <th className="p-2 border">EMAIL</th>
//                 <th className="p-2 border">USER ID</th>
//                 <th className="p-2 border">PIN CODE</th>
//                 <th className="p-2 border">TOTAL</th>
//                 <th className="p-2 border">STATUS</th>
//                 <th className="p-2 border">DATE</th>
//               </tr>
//             </thead>
//             <tbody>
//               {mockOrders.map((order) => (
//                 <React.Fragment key={order.id}>
//                   <tr className="hover:bg-gray-50">
//                     <td className="p-2 border text-center">
//                       <button onClick={() => toggleRow(order.id)}>
//                         {openRows[order.id] ? <FaAngleUp /> : <FaAngleDown />}
//                       </button>
//                     </td>
//                     <td className="p-2 border text-red-500">{order.id}</td>
//                     <td className="p-2 border text-red-500">{order.paymentId}</td>
//                     <td className="p-2 border">{order.name}</td>
//                     <td className="p-2 border">{order.product}</td>
//                     <td className="p-2 border w-64">{order.address}</td>
//                     <td className="p-2 border">{order.phone}</td>
//                     <td className="p-2 border">{order.email}</td>
//                     <td className="p-2 border">{order.userId}</td>
//                     <td className="p-2 border">{order.pinCode}</td>
//                     <td className="p-2 border">{order.total}</td>
//                     <td className="p-2 border">{getStatusBadge(order.status)}</td>
//                     <td className="p-2 border whitespace-nowrap">{order.date}</td>
//                   </tr>

//                   {openRows[order.id] && (
//                     <tr className="bg-gray-50">
//                       <td colSpan="13" className="p-4 border">
//                         <table className="w-full text-sm border mt-2">
//                           <thead className="bg-gray-100">
//                             <tr>
//                               <th className="p-2 border">Product ID</th>
//                               <th className="p-2 border">Title</th>
//                               <th className="p-2 border">Image</th>
//                               <th className="p-2 border">Quantity</th>
//                               <th className="p-2 border">Sub Total</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                            <tr className="text-center">
//   <td className="p-2 border">{order.id}</td>
//   <td className="p-2 border">{order.product}</td>
//   <td className="p-2 border">
//     {order.image ? (
//       <div className="flex justify-center items-center">
//         <img
//           src={order.image}
//           alt={order.product}
//           className="w-16 h-16 object-cover border rounded"
//         />
//       </div>
//     ) : (
//       'N/A'
//     )}
//   </td>
//   <td className="p-2 border">1</td>
//   <td className="p-2 border">{order.total}</td>
// </tr>

//                           </tbody>
//                         </table>
//                       </td>
//                     </tr>
//                   )}
//                 </React.Fragment>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RecentOrders;



import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const mockOrders = [
  {
    id: 'ORD-001',
    paymentId: 'PAY-001',
    name: 'Alice Johnson',
    address: '123 Main St, New York, NY',
    phone: '123-456-7890',
    email: 'alice@example.com',
    userId: 'user_001',
    pinCode: '10001',
    total: '$120.00',
    status: 'Delivered',
    date: '2025-06-10',
    products: [
      {
        productId: 'P001',
        title: 'Wireless Mouse',
        image: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/130-home_default/customizable-mug.jpg",
        quantity: 2,
        subTotal: '$40.00'
      },
      {
        productId: 'P002',
        title: 'Bluetooth Keyboard',
        image:'https://rukminim2.flixcart.com/image/416/416/xif0q/cycle/c/e/w/14t-xzx-seagreen-cycle-for-boys-and-girls-14-13-xaipro-56-single-original-imah8z5n78htm3rg.jpeg?q=70&crop=false',
        quantity: 1,
        subTotal: '$80.00'
      },
      {
        productId: 'P001',
        title: 'Wireless Mouse',
        image:'https://rukminim2.flixcart.com/image/128/128/xif0q/resistance-tube/y/n/l/tummy-trimmer-multipurpose-fitness-exerciser-for-home-gym-original-imagzujnvtrjmwft.jpeg?q=70&crop=false',
        quantity: 2,
        subTotal: '$40.00'
      },
      {
        productId: 'P002',
        title: 'Bluetooth Keyboard',
        image: 'https://example.com/keyboard.jpg',
        quantity: 1,
        subTotal: '$80.00'
      }
    ]
  },
  {
    id: 'ORD-002',
    paymentId: 'PAY-002',
    name: 'Bob Smith',
    address: '456 Elm St, Los Angeles, CA',
    phone: '987-654-3210',
    email: 'bob@example.com',
    userId: 'user_002',
    pinCode: '90001',
    total: '$70.00',
    status: 'Pending',
    date: '2025-06-12',
    products: [
      {
        productId: 'P003',
        title: 'Running Shoes',
        image:'https://rukminim2.flixcart.com/image/128/128/xif0q/resistance-tube/y/n/l/tummy-trimmer-multipurpose-fitness-exerciser-for-home-gym-original-imagzujnvtrjmwft.jpeg?q=70&crop=false',
        quantity: 1,
        subTotal: '$70.00'
      }
    ]
  },
  {
    id: 'ORD-003',
    paymentId: 'PAY-003',
    name: 'Charlie Davis',
    address: '789 Oak St, Chicago, IL',
    phone: '555-555-5555',
    email: 'charlie@example.com',
    userId: 'user_003',
    pinCode: '60601',
    total: '$150.00',
    status: 'Confirmed',
    date: '2025-06-14',
    products: [
      {
        productId: 'P004',
        title: 'Smartphone',
        image: 'https://example.com/phone.jpg',
        quantity: 1,
        subTotal: '$150.00'
      },
      {
        productId: 'P001',
        title: 'Wireless Mouse',
        image:'https://rukminim2.flixcart.com/image/128/128/xif0q/resistance-tube/y/n/l/tummy-trimmer-multipurpose-fitness-exerciser-for-home-gym-original-imagzujnvtrjmwft.jpeg?q=70&crop=false',
        quantity: 2,
        subTotal: '$40.00'
      },
      {
        productId: 'P002',
        title: 'Bluetooth Keyboard',
        image: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/130-home_default/customizable-mug.jpg",
        quantity: 1,
        subTotal: '$80.00'
      }
    ]
  },
  {
    id: 'ORD-003',
    paymentId: 'PAY-003',
    name: 'Charlie Davis',
    address: '789 Oak St, Chicago, IL',
    phone: '555-555-5555',
    email: 'charlie@example.com',
    userId: 'user_003',
    pinCode: '60601',
    total: '$150.00',
    status: 'Confirmed',
    date: '2025-06-14',
    products: [
      {
        productId: 'P004',
        title: 'Smartphone',
        image: 'https://example.com/phone.jpg',
        quantity: 1,
        subTotal: '$150.00'
      },
      {
        productId: 'P001',
        title: 'Wireless Mouse',
        image:'https://rukminim2.flixcart.com/image/128/128/xif0q/resistance-tube/y/n/l/tummy-trimmer-multipurpose-fitness-exerciser-for-home-gym-original-imagzujnvtrjmwft.jpeg?q=70&crop=false',
        quantity: 2,
        subTotal: '$40.00'
      },
      {
        productId: 'P002',
        title: 'Bluetooth Keyboard',
        image: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/130-home_default/customizable-mug.jpg",
        quantity: 1,
        subTotal: '$80.00'
      }
    ]
  }
];

const getStatusBadge = (status) => {
  switch (status) {
    case 'Delivered':
      return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">Delivered</span>;
    case 'Pending':
      return <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded">Pending</span>;
    case 'Confirmed':
      return <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">Confirmed</span>;
    default:
      return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">{status}</span>;
  }
};

const RecentOrders = () => {
  const [openRows, setOpenRows] = useState({});

  const toggleRow = (id) => {
    setOpenRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="bordered border-2 bg-white ">
      <div className="p-4 rounded shadow overflow-auto">
        <h2 className="text-xl font-semibold py-4">Recent Orders</h2>
       <div className="">
         <table className="w-full bordered border-2 text-sm ">
          <thead className="bg-gray-300 ">
            <tr className=''>
              <th className="p-2 border text-center"></th>
              <th className="p-2 border">ORDER ID</th>
              <th className="p-2 border">PAYMENT ID</th>
              <th className="p-2 border">NAME</th>
              <th className="p-2 border">EMAIL</th>
              <th className="p-2 border">PHONE</th>
              <th className="p-2 border">ADDRESS</th>
              <th className="p-2 border">USER ID</th>
              <th className="p-2 border">PIN CODE</th>
              <th className="p-2 border">TOTAL</th>
              <th className="p-2 border">STATUS</th>
              <th className="p-2 border">DATE</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((order) => (
              <React.Fragment key={order.id}>
                <tr className="hover:bg-gray-50">
                  <td className="text-center border">
                    <button onClick={() => toggleRow(order.id)}>
                      {openRows[order.id] ? <FaAngleUp /> : <FaAngleDown />}
                    </button>
                  </td>
                  <td className="border p-2 text-red-500">{order.id}</td>
                  <td className="border p-2 text-red-500">{order.paymentId}</td>
                  <td className="border p-2">{order.name}</td>
                  <td className="border p-2">{order.email}</td>
                  <td className="border p-2 whitespace-nowrap">{order.phone}</td>
                  <td className="border p-2">{order.address}</td>
                  <td className="border p-2">{order.userId}</td>
                  <td className="border p-2">{order.pinCode}</td>
                  <td className="border p-2">{order.total}</td>
                  <td className="border p-2">{getStatusBadge(order.status)}</td>
                  <td className="border p-2 whitespace-nowrap">{order.date}</td>
                </tr>

                {openRows[order.id] && (
                  <tr className="bg-gray-50">
                    <td colSpan="12" className="p-4 border">
                      <table className="w-full text-sm border">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="p-2 border">Product ID</th>
                            <th className="p-2 border">Title</th>
                            <th className="p-2 border">Image</th>
                            <th className="p-2 border">Quantity</th>
                            <th className="p-2 border">Subtotal</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.products.map((product) => (
                            <tr key={product.productId}>
                              <td className="p-2 border text-center">{product.productId}</td>
                              <td className="p-2 border">{product.title}</td>
                              <td className="p-2 border text-center">
                                <img src={product.image} alt={product.title} className="w-12 h-12 object-cover mx-auto" />
                              </td>
                              <td className="p-2 border text-center">{product.quantity}</td>
                              <td className="p-2 border text-center">{product.subTotal}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
       </div>
      </div>
    </section>
  );
};

export default RecentOrders;
