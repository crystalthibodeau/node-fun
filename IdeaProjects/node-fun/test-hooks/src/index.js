import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {FaStar} from "react-icons/fa";


// =========== #1
// function App() {
//     const [status, setStatus] = useState("Not Deposited");
//     return (
//         <div className="App">
//             <h1>Paycheck is: {status}</h1>
//             <button onClick={() => setStatus("Deposited")}>
//                 Deposit
//             </button>
//         </div>
//
//     );
// }


// =========== #2

// function App() {
//     const [checked, setChecked] = useState(false);
//     return (
//         <div className="App">
//             <input type="checkbox" value={checked} onChange={() => setChecked(!checked)}/>
//             <p>{checked ? "checked" : "not checked"}</p>
//         </div>
//
//     );
// }

// =========== #3

// const createArray = (length) => [
//     ...Array(length)
// ];
//
// function Star({selected = false, onSelect}) {
//     return <FaStar color={selected ? "gold" : "gray"}
//                    style={{"padding" : "5px"}}
//                    size={40}
//                    onClick={onSelect}/>;
// }
//
// function StarRating({totalStars = 5}) {
//     const [selectedStars, setSelectedStars] = useState(0);
//     return (
//         <div style={{"padding": "1rem", "text-align" : "center", "margin-top" : "1rem"}}>
//             {createArray(totalStars).map((n, i) => (
//                 <Star key={i}
//                       selected={selectedStars > i}
//                       onSelect={() => setSelectedStars(i + 1)}
//                 />
//             ))}
//             <p>{selectedStars} of {totalStars}</p>
//         </div>
//
//     );
//
// }

// function App() {
//     return <StarRating totalStars={5} />;
// }

// =========== #4

// function App() {
//     const [name, setName] = useState("Crystal");
//
//     useEffect(() => {
//         document.title = `Celebrate ${name}`;
//     }, [name])
//
//     return (
//         <section>
//             <p>Congratulations {name}!</p>
//             <button onClick={() => setName("Mikey")}>
//                 Winner
//             </button>
//         </section>
//     );
// }

// =========== #5

// function App() {
//     const [data, setData] = useState([]);
//
//     useEffect(() => {
//         fetch(`https://api.github.com/users`)
//             .then((response) => response.json())
//             .then(setData)
//         // Same as -
//         // .then(res => setData(res))
//     }, []);
//     if (data) {
//         return (
//             <div>
//                 <ul>
//                     {data.map((user) => (
//                         <li key={user.id}>
//                             <p>{user.login}</p>
//                             <img src={user.avatar_url} alt={user.login + "s avatar"}/>
//                         </li>
//                     ))}
//                 </ul>
//                 <div className={"text-center"}>
//                     <button className={"margin-2"} onClick={() => setData([])}>
//                         Erase Data
//                     </button>
//                 </div>
//
//             </div>
//         );
//     }
//     return (
//         <p>No Users Found</p>
//     );
// }

// =========== #6

function App() {
    return "hello";
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

