import React, { useContext, useState, useEffect } from 'react';
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

  // Making a API call when search query changes
  useEffect(() => {
    // Make a API call for every key stroke press
    // But if the difference between 2 API calls is less then < 200 ms then don't make another API call
    const timer = setTimeout(() => {
      // getting data from store state this is same as chacheSearch.searchQuery
      if (cacheSearch[searchQuery]) {
        //Ensure cached results are treated as individual items
        setSuggestions(cacheSearch[searchQuery]);
      } else {
        getSearchResults();
      }
    }, 200);
    // return the timer so that it gets cleared when the component unmounts(this is called even before re-render)
    return () => clearTimeout(timer);
  }, [searchQuery]);


  const getSearchResults = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.json();
    // console.log('This is data', data[1]);
    
    // Ensure API results are stored consistently
    /*It checks if data[1] is an array using Array.isArray().
    If it is an array, it uses it as is.
    If it's not an array (e.g., if it's a single string), it wraps it in an array.
    This ensures that suggestions is always an array, whether the API returns an array or a single item. */
    const suggestions = Array.isArray(data[1]) ? data[1] : [data[1]];
    setSuggestions(suggestions);
    
    // Dispatch action to store data if not already in the store
    dispatch(searchedResults({
      [searchQuery]: suggestions
    }));
  }

  return (
    <div className='nav-container'>
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between bg-black px-4 sm:py-2 md:py-2 py-3 z-50">
        <div className="flex items-center">
          {/* Menu button for medium and larger screens only else its hidden */}
          <button className="p-2 hover:bg-gray-700 rounded-full hidden lg:block" onClick={toggleSidebar}>
            <MenuIcon className="text-white" />
          </button>
          <a href="/" className={`${searchActive === true ? "hidden" : "flex"} ml-4 flex items-center`}>
            <YouTubeLogo className="text-white" />
          </a>
        </div>
        <div className="w-[600px]">
          <div className={`${searchActive === true ? "flex" : "hidden"} sm:flex flex-grow max-w-2xl mx-4`}>
          {searchActive && (
            <button
              onClick={() => setSearchActive(false)}
              className="mr-2 bg-transparent text-white hover:text-gray-400"
            >
              <IoArrowBackOutline  className="w-6 h-6" /> {/* Replace `MenuIcon` with the correct back arrow icon */}
            </button>
          )}
              <input type="text" placeholder="Search" className="w-full px-3 py-2 border border-gray-700 bg-black text-white rounded-l-full focus:outline-none focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value )}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}/>
              <button className="bg-gray-700 px-2 sm:px-6 py-0 sm:py-2 rounded-r-full border border-l-0 border-gray-700 hover:bg-gray-600">
                <SearchIcon className="text-white" />
              </button>
           </div>
           {
            showSuggestions && searchQuery.length > 0 && (
              <div className='pl-4 mt-3 fixed'>
                <ul className='text-white px-4  flex flex-col break-words bg-black w-[500px] rounded-lg'>
                  {suggestions.map((s) => (
                    <li key={s} className='hover:bg-slate-600 flex items-center'>
                      🔍 <span className='ml-2 break-words'>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
           }
        </div>
        <button className={`${searchActive === true ?'hidden':'block'} lg:hidden`} onClick={() => setSearchActive(true)}>
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