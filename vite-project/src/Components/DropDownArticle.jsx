import { useState } from 'react';

function DropDownArticle({ title, children }) {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <div className="DropDown_container">
         <div className="DropDown">
            <p>{title}</p>
            <img
               onClick={() => setIsOpen(!isOpen)}
               className={isOpen ? 'isOpen' : 'isClosed'}
               src="../../src/assets/Logo/arrow-up.png"
               alt="arrow"
            />
         </div>
         <div className={`DropDown_desc ${isOpen ? 'visible' : 'invisible'}`}>
            {children}
         </div>
      </div>
   );
}

export default DropDownArticle;
