import React from "react";
let currentYear = (new Date()).getFullYear();
function Footer() {
    return (
        <div className="footer">
            <p>Copyright ⓒ {currentYear} </p>
        </div>
    )
}

export default Footer;
