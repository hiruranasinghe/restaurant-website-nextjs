import React from "react";


interface Order {
  id: string;
  date: string;
  price: number;
  products: string;
  status: string;
}

const mockOrders: Order[] = [
  { id: "1237861238721", date: "19.07.2023", price: 89.90, products: "Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)", status: "On the way (approx. 10min)..." },
  { id: "9874563210123", date: "18.07.2023", price: 45.50, products: "Fries (1), Chicken Wrap (1)", status: "Delivered" },
  { id: "4561239870001", date: "17.07.2023", price: 120.00, products: "Steak Dinner (1), Red Wine Bottle (1)", status: "Preparing" },
  { id: "7890123456789", date: "16.07.2023", price: 30.25, products: "Coffee (3), Muffins (3)", status: "Cancelled" },
];


const getStatusColor = (status: string): string => {
    if (status.includes("On the way")) return "text-yellow-600 bg-yellow-100";
    if (status === "Delivered") return "text-green-600 bg-green-100";
    if (status === "Preparing") return "text-blue-600 bg-blue-100";
    return "text-red-600 bg-red-100";
};

const OrdersPage: React.FC = () => {
  return (
 
    <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-9rem)] p-4 md:p-8 lg:px-20 xl:px-40 bg-gray-50">
        
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 border-b-2 border-red-500/50 pb-2">Your Order History</h1>


      <div className="overflow-x-auto shadow-2xl rounded-xl bg-white">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="text-left text-sm uppercase text-gray-700 bg-gray-100 border-b border-gray-200">
              <th className="hidden lg:table-cell py-4 px-4 font-bold tracking-wider">Order ID</th>
              <th className="py-4 px-4 font-bold tracking-wider">Date</th>
              <th className="py-4 px-4 font-bold tracking-wider">Total Price</th>
              <th className="hidden md:table-cell py-4 px-4 font-bold tracking-wider">Products</th>
              <th className="py-4 px-4 font-bold tracking-wider">Status</th>
            </tr>
          </thead>
          
          <tbody>
            {mockOrders.map((order) => (
              <tr 
                key={order.id} 
                className="text-sm md:text-base border-b border-gray-100 transition-colors duration-200 hover:bg-red-50"
              >
       
                <td className="hidden lg:table-cell py-4 px-4 text-gray-500 font-medium whitespace-nowrap">
                    #{order.id.substring(0, 8)}...
                </td>
                
                {/* Date */}
                <td className="py-4 px-4 text-gray-700 font-medium whitespace-nowrap">
                    {order.date}
                </td>
                
                {/* Price */}
                <td className="py-4 px-4 font-extrabold text-red-600 whitespace-nowrap">
                    ${order.price.toFixed(2)}
                </td>
                
                {/* Products: Visible on medium screens and up */}
                <td className="hidden md:table-cell py-4 px-4 text-gray-800 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
                    {order.products}
                </td>
                
                {/* Status */}
                <td className="py-4 px-4">
                    <span className={`py-1 px-3 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                        {order.status}
                    </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;