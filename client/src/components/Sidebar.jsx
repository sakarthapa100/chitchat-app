import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { TfiAlignJustify } from 'react-icons/tfi';
import OtherUsers from './OtherUsers';
import { useSelector, useDispatch } from 'react-redux';
import { setOtherUsers } from '../redux/userSlice';
import toast from 'react-hot-toast';

const Slidebar = ({ className }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { otherUsers } = useSelector(store => store.user); // Changed OtherUsers to otherUsers
  const dispatch = useDispatch();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logout button clicked');
  };

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    const conversationUser = otherUsers?.find((user) =>
      user.username.toLowerCase().includes(search.toLowerCase())
    );
    if (conversationUser) {
      dispatch(setOtherUsers([conversationUser]));
    } else {
      toast.error("User not found");
    }
  };

  return (
    <div className={`flex overflow-auto h-full flex-col p-4 border-r border-slate-500 ${className}`}>
      <form onSubmit={searchSubmitHandler}>
        <div className="sticky top-0 z-50">
          <div className="flex items-center space-x-4 mb-4">
            <button
              type="button" // Added type attribute
              className="btn btn-primary-content drawer-button"
              onClick={toggleDrawer}
            >
              <TfiAlignJustify className="w-6 h-6" />
            </button>
            <div className="relative flex-1 max-w-md">
              <FaSearch
                className="absolute left-5 top-1/2 transform -translate-y-1/2 text-[#9e9ea7] w-4 h-4"
                aria-hidden="true"
              />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search"
                className="w-full h-10 pl-10 pr-4 border-2 border-transparent rounded-lg outline-none bg-[#f3f3f4] text-[#0d0c22] transition duration-300 ease-in-out focus:border-[rgba(234,76,137,0.4)] focus:bg-white focus:shadow-[0_0_0_4px_rgba(234,76,137,0.1)] hover:border-[rgba(234,76,137,0.4)] hover:bg-white hover:shadow-[0_0_0_4px_rgba(234,76,137,0.1)] placeholder-[#9e9ea7]"
              />
            </div>
          </div>
        </div>
        <div className={`drawer ${drawerOpen ? 'open' : ''}`}>
          <div className="drawer-content">
            {/* Page content here */}
          </div>
          {drawerOpen && (
            <div className="drawer-side">
              <button
                aria-label="close sidebar"
                className="drawer-overlay"
                onClick={toggleDrawer}
              ></button>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
              </ul>
            </div>
          )}
        </div>

        {!drawerOpen && (
          <div>
            <OtherUsers />
          </div>
        )}
      </form>
    </div>
  );
};

export default Slidebar;
