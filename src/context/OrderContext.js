import {createContext, useContext, useEffect, useState} from 'react';
import {useAuthContext} from './AuthContext';
import {ORDER_STATUSES} from '../utils/order_status';

const OrderContext = createContext({});

const OrderContextProvider = ({children}) => {
  const {userInfo} = useAuthContext();
  const [order, setOrder] = useState(null);
  const [user, setUser] = useState(null);
  const [dishes, setDishes] = useState(null);

  const getOrder = async id => {
    if (!id) {
      setOrder(null);
      return;
    }
    try {
      const order = await axios.get(`${BASE_URL}/orders/${id}`);
      const order_dishes = await axios.get(
        `${BASE_URL}/order-dishes?order_id=${id}`,
      );
      setOrder(order);
      setDishes(order_dishes);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const getOrders = async status => {
    try {
      const orders = await axios.get(
        `${BASE_URL}/orders/courier?status=${status}`,
      );
      return orders.data;
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const acceptOrder = async id => {
    try {
      const acceptedOrder = await axios.put(`${BASE_URL}/orders/${id}`, {
        user_id: id,
        courier_id: 'userID',
        restaurant_id: restaurant.id,
        total: total,
        status: ORDER_STATUSES.ACCEPTED,
      });
      setOrder(acceptedOrder);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const pickupOrder = async id => {
    try {
      const updatedOrder = await axios.put(`${BASE_URL}/orders/${id}`, {
        user_id: id,
        courier_id: 'userID',
        restaurant_id: restaurant.id,
        total: total,
        status: ORDER_STATUSES.PICKED_UP,
      });
      setOrder(updatedOrder);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const finishOrder = async id => {
    try {
      // Updating an order
      const finishedOrder = await axios.put(`${BASE_URL}/orders/${id}`, {
        user_id: id,
        courier_id: 'userID',
        restaurant_id: restaurant.id,
        total: total,
        status: ORDER_STATUSES.COMPLETED,
      });
      setOrder(finishedOrder);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    if (!order) {
      return;
    }
  }, [order?.id]);

  return (
    <OrderContext.Provider
      value={{
        acceptOrder,
        getOrder,
        getOrders,
        pickupOrder,
        finishOrder,
        order,
        user,
        dishes,
      }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
export const useOrderContext = () => useContext(OrderContext);
