function DropDown({ index, title, desc, toggle, isOpen }) {
   return (
      <div className="dropdown-container">
         <div
            className="header"
            onClick={() => toggle(index)}
         >
            <h2>{title}</h2>
            <img
               className={isOpen ? 'arrow rotate' : 'arrow'}
               src="../../src/assets/Logo/arrow-up.png"
               alt="arrow"
            />
         </div>

         <div className={`content ${isOpen ? 'open' : ''}`}>
            <p>{desc}</p>
         </div>
      </div>
   );
}

export default DropDown;
