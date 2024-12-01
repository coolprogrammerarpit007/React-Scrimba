
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById(`root`));

function ReactLogo()
{
    return <img src="../assets/react-logo.png" width="200px" height="200px" />;
}

function Heading()
{
    return <h1>
        Fun Facts About React
    </h1>
}

function ReactFacts()
{
    return (
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub.</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps.</li>
        </ul>
    )
}
root.render(
    <>
        <ReactLogo/>
        <Heading/>
        <ReactFacts/>
    </>
)