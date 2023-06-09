import { Link } from "react-router-dom";
import "../styles/adminnav.css";

const AdminNavbar = () => {
  return (
    <div className="mainN" >
      {/* <img src={bg} alt="" /> */}
      
      <div className="onee na-cenet">
        <ul>
          <li>
            <Link to="/admin/">Home</Link>
          </li>
          <li>
            <Link to="/admin/addUser/">Add user</Link>
          </li>
          <li>
            <Link to="/admin/addBook/">Add Books</Link>
          </li>
          <li>
            <Link to="/admin/bookList/">Book List </Link>
          </li>
          <li>
            <Link to="/admin/UserList/">UserList</Link>
          </li>
        </ul>
           
      </div>
      <button className="bt"> <Link to="/"> LogOut</Link></button>
    </div>
  );
};

export default AdminNavbar;
