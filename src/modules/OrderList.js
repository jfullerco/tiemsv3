import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import RestDBService from '../services/RestDBService'
import '../style.css'

function OrderList(props) {
  const {id} = useParams()
  const [orders, setOrders] = useState([])
  console.log(orders)

  useEffect(() => {
    retrieveClient(id)
  }, [])

const retrieveClient = (id) => {
    RestDBService.getClient(id)
    .then(res => {
      
      setOrders(res.data.orders)
      
      console.log()
    })
    .catch(e => {
      console.log()
    })
  }

return (
  
    <div className="widget">
     <table>
      <th>Orders</th>
      <tr>
        {orders ? (
                orders.map(order => (
                  <ul>
                    <Link to={`/orders/${order._id}`} key="order._id">
                      {order.orderNum} 
                    </Link>
                  </ul>
                ))
              ):(
            "No Orders"
              )
        }
    </tr>
    </table>
    </div>

  
)
}
export default OrderList