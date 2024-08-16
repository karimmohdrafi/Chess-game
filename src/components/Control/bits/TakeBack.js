import { hover } from '@testing-library/user-event/dist/hover';
import { useAppContext }from '../../../contexts/Context'
import { takeBack } from '../../../reducer/actions/move';

const TakeBack = () => {

    const { dispatch } = useAppContext();

    return <div>
        <button style={{borderRadius:'20px', backgroundColor:'grey', cursor:'pointer', color:'black', fontWeight:'bold'}} onClick={() => dispatch(takeBack())}>Take Back</button>
    </div>
}

export default TakeBack