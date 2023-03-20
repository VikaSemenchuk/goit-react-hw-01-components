import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendsList/FriendList';
import { TransactionHistory } from './transactionHistory/TransactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <section className="section profile">
        <Profile user={user} />
      </section>

      <section className="section statistics">
        <Statistics data={data} title="Upload stats" />
      </section>

      <section className="section friends">
        <FriendList friends={friends} />
      </section>

      <section className="section transactions">
        <TransactionHistory transactions={transactions} />
      </section>
    </>
  );
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
