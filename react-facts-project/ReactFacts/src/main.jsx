
import { createRoot } from 'react-dom/client';
import ReactLogo from './ReactLogo';
import Heading from './Heading';
import ReactFacts from './ReactFacts';

const root = createRoot(document.getElementById(`root`));






root.render(
    <>
        <ReactLogo/>
        <Heading/>
        <ReactFacts/>
    </>
)

// /** Challenge:
//  * Move the `main` element into its own component called "MainContent"
//  * and render that component inside the Page component.
//  *
//  * Do the same with the `footer` element, moving it into a new
//  * component called "Footer"
//  */
//
// function Header() {
//     return (
//         <header>
//             <img src="react-logo.png" width="40px" alt="React logo" />
//         </header>
//     )
// }
//
// function MainContent()
// {
//     return (
//         <>
//
//                 <h1>Reason I am excited to learn React</h1>
//                 <ol>
//                     <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
//                     <li>I am more likely to get a job as a front end developer if I know React</li>
//                 </ol>
//         </>
//     );
// }
//
// function MyFooter()
// {
//     return (<footer>
//         <small>© 2024 Ziroll development. All rights reserved.</small>
//     </footer>);
// }
// function Page() {
//     return (
//         <>
//             <Header />
//             <MainContent />
//             <MyFooter/>
//         </>
//     )
// }
//
// root.render(
//     <Page />
// )
