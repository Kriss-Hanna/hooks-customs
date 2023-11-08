
import useInput from '../hooks/useInput';

function UseInputComponent() {
  const { value, bind } = useInput('');

  return (
    <div>
      <input type="text" {...bind} />
      <p>La valeur saisie est : {value}</p>
    </div>
  );
}

export default UseInputComponent;
