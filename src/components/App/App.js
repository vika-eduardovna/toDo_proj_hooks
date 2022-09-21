import AddDeal from "../AddDeal";
import { useState } from "react";
import CardContainer from "../CardContainer";

function App() {

  const start_deals = [
    {
      id: 1,
      descr: 'Learn JS',
      importance: 'very important',
      day: 'Monday'
    },
    {
      id: 2,
      descr: 'Learn React',
      importance: 'very important',
      day: 'Wednesday'
    },
    {
      id: 3,
      descr: 'Layout with SASS',
      importance: 'not important',
      day: 'Friday'
    },
  ]

  const [deals, setDeals] = useState(start_deals)

  const createDeal = (descr, importance, day) => {
    setDeals([...deals,
    {
      id: Date.now(),
      descr,
      importance,
      day
    }]);
  };


  return (
    <div>
      <AddDeal createDeal={createDeal} />
      <CardContainer deals={deals} />
    </div>
  );
}

export default App;
