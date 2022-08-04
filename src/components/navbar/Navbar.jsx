import './Navbar.css'
import avatar from '../../../assets/avatar.jpg'

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <div className='container-fluid'>
          <div className='row dashboad-bg-color'>
                <div className='col-2 align-self-center'>
                    <div className="nav_icon" onClick={() => openSidebar()}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='col-9 align-self-end'>
                 <div className="row justify-content-between">
                    <div className="col-8 align-self-end">
                        <div className="top-menu-items">
                            <ul className="d-flex align_items-center">
                                <li className='nav-item'><a className='nav-button nav-link active" aria-current="page"' href="#"> News (10)</a></li>
                                <li className='nav-item'><a className='nav-button nav-link' href="#"> Starred (7)</a></li>
                                <li className='nav-item'><a className='nav-button nav-link' href="#"> Archived (19)</a></li>
                                <li className='nav-item'><a className='nav-button nav-link' href="#"> Applied (23)</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className ="col-3">
                        <div className ="app-search-form pb-2">
                            <input type="text" placeholder="Search" name="search" className="form-control search-input" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
   
    )
}

export default Navbar