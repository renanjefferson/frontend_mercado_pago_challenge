import { Routes as Switch, Route } from 'react-router-dom';

import Checkout from '../pages/Checkout';
import Success from '../pages/Success';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" element={<Checkout />} />
      <Route path="/payment/success/:transactionId" element={<Success />} />
    </Switch>
  );
};

export default Routes;
