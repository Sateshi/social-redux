import './Sidebar.css'
import logo from '../assets/img/S.jfif'

function Sidebar(){
    return(
        <aside>
            <div className="side-wrapper">
                <div className='user-info'>
                    <img src={logo} alt="" className='profile-picture'/>
                    <div className='user-text'>
                        <p className='user-name'>Sateshi</p>
                        <p className='user-status'>Developer</p>
                    </div>
                </div>
                <div className='menu-list'>
                    <div className='menu-item'>
                        <input type="search" name="" id="" />
                    </div>
                    <div className='menu-item'>
                        <span>Dashboard</span>
                    </div >
                    <div className='menu-item'>
                        <span>Revenue</span>
                    </div>
                    <div className='menu-item'>
                        <span>Notifications</span>
                    </div>
                    <div className='menu-item'>
                        <span>Analytics</span>
                    </div>
                    <div className='menu-item'>
                        <span>Likes</span>
                    </div>
                    <div className='menu-item'>
                        <span>Wallets</span>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;