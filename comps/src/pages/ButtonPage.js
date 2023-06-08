import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'
import Button from "../components/Button";


function ButtonPage() {

    const handleClick = () => {
        console.log('Clicked!');
    };

    return (
        <div>
            <div>
                <Button success className="mb-5" onClick={handleClick}>
                    <GoBell />
                    Click me
                </Button>
            </div>
            <div>
                <Button danger >
                    <GoCloudDownload />
                    Click me
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase />
                    Click me
                </Button>
            </div>
            <div>
                <Button secondary>Click me</Button>
            </div>
            <div>
                <Button primary>Click me</Button>
            </div>
        </div>

    );
}

export default ButtonPage;