import { useHistory } from 'react-router-dom';
import MapContainer from './components/Map/MapContainer';
import PageContainer from './pages/PageContainer';

const SectionContainer = () => {
    const history = useHistory();

    return (
        <div>
            <div onClick = {() => console.log("hello")/*history.push('/maps')*/}>
                <MapContainer/>
            </div>
            <div onClick = {() => console.log("hello")/*history.push('/pages')*/}>
                <PageContainer/> 
            </div>
        </div>
    );
}

export default SectionContainer;