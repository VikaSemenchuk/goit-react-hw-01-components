import { Profile } from "./profile/Profile";
import user from '../data/user.json'
import { Statistics } from "./statistics/Statistics";
import data from '../data/data.json'

export const App = () => {
  return <>
    <Profile user={user}/>
    <Statistics data={data} />
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
