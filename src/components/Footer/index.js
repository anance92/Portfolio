import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {
    return (
        <footer className="w-100 mt-auto bg-secondary p-4">
            <div className="container">&copy;2021 by Alexandra</div>
            <div>
            <i class="fab fa-github"></i>
                <FontAwesomeIcon icon="check-square" />
  </div>
        </footer>
    );
};

export default Footer;