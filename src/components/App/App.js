import AddDeal from "../AddDeal";
import { useState } from "react";
import CardContainer from "../CardContainer";
import EmptyDeals from "../NoDeals";

function App() {

  const start_deals = [
    {
      id: 1,
      descr: 'Learn JS',
      importance: 'very important',
      day: 1
    },
    {
      id: 2,
      descr: 'Learn React',
      importance: 'very important',
      day: 2
    },
    {
      id: 3,
      descr: 'Layout with SASS',
      importance: 'not important',
      day: 3
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

  const deleteDeal = id => setDeals(deals.filter(elem => elem.id !== id));
  const deleteDay = day_num => setDeals(deals.filter(elem => elem.day !== day_num));
  return (
    <div>
      <AddDeal createDeal={createDeal} />
      <CardContainer deals={deals} deleteDeal={deleteDeal} deleteDay={deleteDay}/>
    </div>
  );
}

export default App;
