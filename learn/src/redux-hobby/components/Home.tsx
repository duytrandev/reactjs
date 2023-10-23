import { addHobbyAction } from '../redux/actions/hobby';
import { RootState } from '../store';
import { Hobby } from './Hobby';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const hobbies = useSelector((state: RootState) => state.hobbies);

  function handleClick() {
    dispatch(
      addHobbyAction({
        id: 'asd',
        name: 'asdsd'
      })
    );
  }
  return (
    <div>
      <h1>Hobby:</h1>
      <button onClick={handleClick}>Gen</button>
      <ul>
        {hobbies.hobbies.map((hobby, index) => {
          return <Hobby name={hobby.name} key={index} id={hobby.id} />;
        })}
      </ul>
    </div>
  );
};

export default Home;
