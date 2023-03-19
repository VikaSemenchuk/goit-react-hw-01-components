import { Profile } from "./profile/Profile";
import { Statistics } from "./statistics/Statistics";
import { FriendList } from "./friends/FriendList";
import { TransactionHistory } from "./transactionHistory/TransactionHistory";

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'

export const App = () => {
  return <>
    <Profile user={user}/>
    <Statistics data={data} />
    <FriendList friends={friends} />
    <TransactionHistory transactions={transactions} />
  </>
  
};

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
