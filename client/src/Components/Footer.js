import React from 'react';



const Footer = () => {
    return (
        <footer>
            <div className="social">
                <ul>
                    <li>
                        {/* rel tag helps with 'tabnabbing': makes fraudulent attempt to obtain sensitive information such as usernames,
                        passwords, and credit card details */}
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" ></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"></a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"></a>
                    </li>
                    <li>
                        <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer"></a>
                    </li>
                </ul>
                <p className="footer-info">Kiwi's Paradise | Copyright @ 2019 | All Rights Reserved.</p>
                <p className="footer-info">Last Updated by: August 16, 2019</p>
            </div>
        </footer>
    )
}

export default Footer;