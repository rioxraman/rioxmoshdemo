import { useState } from 'react'
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
    const [count, setCount] = useState(0);
    const [alertVisiblity, setAlertVisiblity] = useState(false);
    let items = ['newyork', 'california', 'florida', 'colarado', 'arizona'];
    const handleSelectedItem = (item: string) => {
        console.log(item);
    };
    return (
        <div>
            <ListGroup items={items} heading="cities" onSelectItem={handleSelectedItem} />
            {alertVisiblity && <Alert onClose={() => setAlertVisiblity(false)}>Hello Owlrd</Alert>}
            <Button
                onClick={() => {
                    setAlertVisiblity(true);
                }}
                color="secondary"
            >
                Click Here
            </Button>
        </div>
    );
}

export default App
