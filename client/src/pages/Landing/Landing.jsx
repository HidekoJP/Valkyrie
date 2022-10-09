import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Landing = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/login');
    }, []);

    return ( 
        <div className="Valkyrie">
            <h1>Valkyrie</h1>   
        </div>
     );
}
 
export default Landing;