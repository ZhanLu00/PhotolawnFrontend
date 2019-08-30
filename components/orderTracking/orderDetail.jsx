import BillingAddress from './BillingAddress';
import PaymentMethod from './PaymentMethods';
import OrderDetails from './OrderDetails';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const OrderDetail = props => (
  <div style={layoutStyle}>
    <div class="row">
      <div class="column">{BillingAddress(props.somthing)}</div>
      <div class="column">{PaymentMethod(props.somthing)}</div>
      <div class="column">{OrderDetail(props.somthing)}</div>
</div>
  </div>
);

export default OrderDetail;