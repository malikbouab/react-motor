import React from "react";

export default function Navbar() {
    return (
        <header>
            <nav className="container">
                <a href="#" className="logo">Cyl<span>exx</span></a>
                <div class="link">
                    <ul>
                        <li>
                            <a href="#" className="nav-link">Article</a>
                        </li>
                        <li>
                            <a href="#" className="nav-link">A propos </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link">Contact</a>
                        </li>
                    </ul>
                    <i class="uil uil-moon toggle-btn"></i>
                </div>
            </nav>
        </header>
    );
}

function stickyNavbar() {
    const header = document.querySelector("header");
    console.log('header', header)
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}
stickyNavbar();
window.addEventListener("scroll", stickyNavbar);