import React, { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faHeart,
  faMagnifyingGlass,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";

function Search() {
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  //for filter
  const [recoreds, setRecoreds] = useState([]);
  // const [recoreds, setRecoreds] = useState(items);
  const [totalResult, setTotalResult] = useState(0);
  let pageLimit = 15;

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `https://api.jikan.moe/v4/characters?page=&limit=${pageLimit}&q=&order_by=favorites&sort=desc`
      );
      const data = await res.json();
      const totalNoOfPages = data.pagination.last_visible_page;
      setPageCount(Math.ceil(totalNoOfPages / 15));
      setItems(data.data);
      setRecoreds(data.data);
    };
    getComments();
  }, []);

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `https://api.jikan.moe/v4/characters?page=${currentPage}&limit=${pageLimit}&q=&order_by=favorites&sort=desc`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const commentFromServer = await fetchComments(currentPage);
    setItems(commentFromServer);
    setRecoreds(commentFromServer.data);
    // setTotalResult(commentFromServer.data.length);
  };

  const filterFunciton = async (event) => {
    const res = await fetch(
      `https://api.jikan.moe/v4/characters?page=1&limit=${pageLimit}&q=${event.target.value}&order_by=favorites&sort=desc`
    );
    const data = await res.json();
    setTotalResult(data.data.length);
    setRecoreds(data.data);
  };

   return (
    <>
      <div className="container">
        <label
          className="searchLabel"
          htmlFor="searchRecoreds"
          style={{ fontSize: "30" }}
        >
          <h2> Search Anime Characters </h2>
        </label>
        <br />

        <div>


        <button className="sr"        
        >
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#2a2b2d",}} />          
        </button>


          <input
            autoFocus
            type="text"
            name="searchRecoreds"
            className="searchText"
            id="searchRecoreds"            
            onChange={filterFunciton}
            placeholder="Search by name..."            
          ></input>
          <br />
          <label htmlFor="">
            Total Result : {totalResult ? totalResult : "No matching recored.."}{" "}
          </label>          
        </div>

        {recoreds?.map((item, index) => (
          <div key={index} className="card my-3">
            <div className="card-body autocomplete">
              <table>
                <tbody>
                  <tr>
                    <td className="autocompleteItems">
                      {item.name}
                      <button style={{ float: "left" }} className="arrowButton">
                        <FontAwesomeIcon
                          icon={faX}
                          size="lg"
                          style={{ color: "#a29090" }}
                        />
                      </button>
                      <button
                        style={{ float: "right" }}
                        onClick={() => window.open(item.url)}
                        className="arrowButton"
                      >
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          beat
                          style={{ color: "#9d65c3" }}
                        />
                      </button>
                      <button style={{ float: "right", border: "none" }}>
                        <FontAwesomeIcon
                          icon={faHeart}
                          size="3xs"
                          style={{ color: "#bd0a0a" }}
                        />
                        {item.favorites}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <ReactPaginate
          previousLabel={"Previous"} //default value
          nextLabel={"Next"} //default value
          breakLabel={"..."} //default value
          pageCount={pageCount} //show total number of pages (suggested dynamic)
          marginPagesDisplayed={3} // how many pages at start and end will be show
          pageRangeDisplayed={3} // on click of breakLabel i.e. (...) three dots show hidden pages of break label
          onPageChange={handlePageClick} // call this mehtod when user click on page
          containerClassName={"pagination justify-content-center"} // css class for unordered list
          pageClassName={"page-item"} //classname for each pages
          pageLinkClassName={"page-link"} //classname of a href tag
          previousClassName={"page-item"} // add same style for previous button as other because use same bootstrap class
          previousLinkClassName={"page-link"} //add same style for previous className for a href tag because use same class name as other
          nextClassName={"page-item"} // add same style for next button as other because use same bootstrap class
          nextLinkClassName={"page-link"} //add same style for next className for a href tag because use same class name as other
          breakClassName={"page-item"} // add same style for breakLabel button as other because use same bootstrap class
          breakLinkClassName={"page-link"} //add same style for breakLabel className for a href tag because use same class name as other
          activeClassName={"active"} // to show which page is currently is displayed
        />
      </div>
    </>
  );
}
export default Search;
