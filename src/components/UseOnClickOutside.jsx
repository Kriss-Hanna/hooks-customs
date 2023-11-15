import { useRef, useState }from 'react'
import useOnClickOutside from '../hooks/useOnClickOutside'

const UseOnClickOutside = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    const closeDropdown = () => {
      setIsOpen(false);
    };
  
    useOnClickOutside(dropdownRef, closeDropdown);
  
    return (
      <div ref={dropdownRef}>
        <button onClick={() => setIsOpen(!isOpen)}>
          Toggle Dropdown
        </button>
        {isOpen && (
          <div>
            <p>Contenu du menu déroulant</p>
            {/* Autres contenus du menu déroulant */}
          </div>
        )}
      </div>
    );
}

export default UseOnClickOutside