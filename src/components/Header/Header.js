import React, { useContext, useState, useEffect, useRef } from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import { SidebarContext } from '../../utils/UseSidebar';
import { MenuIcon, YouTubeLogo, SearchIcon, VideoIcon, NotificationIcon} from '../../utils/Icons';
import { YOUTUBE_SEARCH_API } from '../../utils/Constants';
import { searchedResults } from '../../utils/searchSlice.js'
import { useDispatch, useSelector } from 'react-redux';  

const Navbar = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  // console.log('This is search button acti', searchActive);
  
  const [showSuggestions, setShowSuggestions] = useState(false);
  // console.log('This is API call searchQuery:', searchQuery);
  const searchRef = useRef(null);

  //Search Results from redux store initial state
  const cacheSearch = useSelector(state => state.search);
  /** Example
  *searchCache = {
  * "iphone": ["iphone 11", "iphone 14"]
  * }
  *searchQuery = iphone
  */

  const dispatch = useDispatch();

  /** How it's working:
   * key - i
   * - Component renders.
   * - `useEffect` runs.
   * - Starts a timer to make an API call after 200ms.
   * 
   * key - ip (i press p before 200ms)
   * -Cleanup function from the previous `useEffect` run clears the previous timer even before re-render happens.
   * - Component re-renders due to state change (`searchQuery`).
   * - `useEffect` runs again.
   * - Starts a new timer to make an API call after 200ms.
   * 
   * This process repeats, effectively debouncing the API calls.
   */

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.length > 0) {
        if (cacheSearch[searchQuery]) {
          setSuggestions(cacheSearch[searchQuery]);
        } else {
          getSearchResults();
        }
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const getSearchResults = async () => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const data = await response.json();
      const suggestions = Array.isArray(data[1]) ? data[1] : [data[1]];
      setSuggestions(suggestions);
      dispatch(searchedResults({
        [searchQuery]: suggestions
      }));
    } catch (error) {
      console.error('Search error:', error);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion, event) => {
    event.preventDefault();
    event.stopPropagation();
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className='nav-container'>
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between bg-black px-4 sm:py-2 md:py-2 py-3 z-50">
        <div className="flex items-center">
          <button className="p-2 hover:bg-gray-700 rounded-full hidden lg:block" onClick={toggleSidebar}>
            <MenuIcon className="text-white" />
          </button>
          <a href="/" className={`${searchActive ? "hidden" : "flex"} ml-4 flex items-center`}>
            <YouTubeLogo className="text-white" />
          </a>
        </div>
        <div className="w-full max-w-[600px] relative" ref={searchRef}>
          <div className={`${searchActive ? "flex" : "hidden"} sm:flex flex-grow max-w-2xl mx-4`}>
            {searchActive && (
              <button
                onClick={() => {
                  setSearchActive(false);
                  setShowSuggestions(false);
                }}
                className="mr-2 bg-transparent text-white hover:text-gray-400"
              >
                <IoArrowBackOutline className="w-6 h-6" />
              </button>
            )}
            <input
              type="text"
              placeholder="Search"
              className="w-full px-3 py-2 border border-gray-700 bg-black text-white rounded-l-full focus:outline-none focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(e.target.value.length > 0);
              }}
              onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
            />
            <button className="bg-gray-700 px-2 sm:px-6 py-0 sm:py-2 rounded-r-full border border-l-0 border-gray-700 hover:bg-gray-600">
              <SearchIcon className="text-white" />
            </button>
          </div>
          {showSuggestions && searchQuery.length > 0 && (
            <div className='absolute left-0 right-0 mt-1 mx-4 z-50'>
              <ul className='text-white bg-black rounded-lg shadow-lg max-h-[70vh] overflow-y-auto'>
                {suggestions.map((s) => (
                  <li 
                    key={s} 
                    className='px-4 py-3 hover:bg-slate-600 active:bg-slate-700 flex items-center cursor-pointer'
                    onClick={(e) => handleSuggestionClick(s, e)}
                  >
                    🔍 <span className='ml-2 break-words'>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button 
          className={`${searchActive ? 'hidden' : 'block'} lg:hidden`} 
          onClick={() => setSearchActive(true)}
        >
          <SearchIcon className="text-white w-6 h-6" />
        </button>

        <div className="hidden lg:flex items-center">
          <button className="p-2 hover:bg-gray-700 rounded-full">
            <VideoIcon className="text-white" />
          </button>
          <button className="p-2 hover:bg-gray-700 rounded-full">
            <NotificationIcon className="text-white" />
          </button>
          <button className="ml-2 w-8 h-8 rounded-full font-semibold bg-gray-400 text-gray-700 flex items-center justify-center">
            A
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;