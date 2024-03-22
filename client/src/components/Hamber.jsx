// import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'

// import "./Hamber.css";
// import { Link, NavLink } from "react-router-dom";

// export const Hmaber = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const linkClassName = 'nav-list'

//   return (
//     <nav className="navigation">
      
//         <div className="logo">
//                     <Link to="/"
//                         style={{
//                             display: 'flex',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             gap: '3px',
//                             textDecoration: 'none',
                            
//                         }}
//                     >  
                        
//                         <svg 
//                         id="logo-13" 
//                         width="35" 
//                         height="30" 
//                         viewBox="0 0 49 48" 
//                         fill="none" 
//                         xmlns="http://www.w3.org/2000/svg"> 
//                         <path d="M1.98441 29.2899C1.98441 27.0299 2.42954 
//                         24.7919 3.29444 22.704C4.15935 20.6159 5.42701 18.7187 
//                         7.02513 17.1206C8.62324 15.5225 10.5204 14.2548 12.6084 
//                         13.3899C14.6965 12.5251 16.9344 12.0799 19.1945 12.0799V29.2899H1.98441Z" 
//                         className="ccustom" fill="#277481"></path> <path d="M1.98441 29.2899C1.98441 31.55 
//                         2.42954 33.7879 3.29444 35.876C4.15935 37.964 5.42701 39.8612 7.02513 41.4593C8.62324 
//                         43.0574 10.5204 44.3251 12.6084 45.19C14.6965 46.0549 16.9344 46.5 19.1945 46.5V29.2899H1.98441Z" 
//                         className="ccompli1" fill="#61459C"></path> <path d="M36.4043 29.2899C36.4043 31.55 35.9595 
//                         33.7879 35.0947 35.876C34.2298 37.964 32.9622 39.8612 31.3638 41.4593C29.7657 43.0574 27.8685 
//                         44.3251 25.7804 45.19C23.6925 46.0549 21.4545 46.5 19.1945 46.5V29.2899H36.4043Z" 
//                         className="ccompli2" fill="#A992DB"></path> <path d="M47.0156 14.422C47.0156 
//                         21.5586 41.23 27.344 34.0935 27.344H21.1716V14.422C21.1716 7.2854 26.957 1.5 34.0935 
//                         1.5C41.23 1.5 47.0156 7.2854 47.0156 14.422Z" className="ccustom" fill="#FF0000">

//                         </path>
//                         </svg>
//                         <h1>
//                            Smart-Tech
//                         </h1>
//                     </Link>
//                 </div>
      
//       <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//       <div className="nav-item">
//             <ul id="nav-items items" className={menuOpen ? "open" : ""}>
//                 <li className={linkClassName} id=''><Link to='/' className='links'>Home</Link></li>
//                     <li className={linkClassName} id=''><Link to='/' className='links'>Solution</Link></li>
//                     <li className={linkClassName} id=''><Link to='/'className='links'>About Us</Link></li>
//                     <li className={linkClassName} id=''><Link to='/' className='links'>Services</Link></li>
//                     <li className={linkClassName} id=''><Link to='/' className='links'>Gallary</Link></li>
//                     <li className='free-btn' id=''><Link to='/' className='links'>Contact Us </Link></li>
//             </ul>
//       </div>
//       <div className="icons">
//                     <FontAwesomeIcon icon="fa-solid fa-message" />
//                     <div className='gh'> </div>
//                     <strong>GH</strong>
//         </div> 
      
//     </nav>
//   );
// };

// export default Hmaber;
// library.add(fab, fas, far);