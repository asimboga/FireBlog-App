import React from "react";


const Navbar = () => {
  const currentUser = {displayName:"asim boga"}
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <link to="/" className="navbar-brand text-warning">
            <h4>Navbar</h4>
          </link>
          <div className="d-flex text-white align-items-center">
            {currentUser ? (
              <>
              <h5 className="mb-0 text-capitalize">{currentUser.displayName}</h5>
              <button className="ms-2 btn btn-outline-danger"></button>
              </>
            ): null}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
