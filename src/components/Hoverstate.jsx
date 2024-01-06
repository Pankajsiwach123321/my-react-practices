import React from "react";

// import `url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css");`
const Hoverstate = () => {
  return (
    <div className=" bg-black">
      <ul id="MiniLeftNav">
        <li>
          <a class="navtext" href="#">
            <svg class="bi" width="32" height="32" fill="currentColor">
              <use xlinkHref="bootstrap-icons.svg#shop" />
            </svg>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a class="navtext" href="#">
            <i class=" fa  fac-c fa-2x"></i>
            <span>Services</span>
          </a>
        </li>
        <li>
          <a class="navtext" href="#">
            <i class="fa fa-briefcase fa-2x"></i>
            <span>Products</span>
          </a>
        </li>
        <li>
          <a class="navtext" href="#">
            <i class="fa fa-photo fa-2x"></i>
            <span>Gallery</span>
          </a>
        </li>
        <li>
          <a class="navtext" href="#">
            <i class="fa fa-envelope fa-2x"></i>
            <span>Contact us</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Hoverstate;
