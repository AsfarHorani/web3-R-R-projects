// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


// Helper functions OpenZeppelin provides.
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract VotingSys{

    //storing movies
    mapping(uint=>Movie) public movies;
    //storing votes
    mapping(address=> uint) public votes;


  using Counters for Counters.Counter;

  //movie count
  Counters.Counter private _movieId;

    struct Movie{
        uint id;
        string title;
        string details;
        string cover;
    }
     event Voted ();
  event NewMovie ();
 constructor (string [] memory _title, 
 string [] memory _details, 
 string  [] memory _cover){
       console.log("Initialized a constructor");
        for(uint i=0; i<_title.length; i++){
            uint ind = _movieId.current();
            movies[ind]=Movie(
                ind,
               _title[i],
               _details[i],
               _cover[i]
            );
             console.log("%s: movie %s initialized",ind,_title[i]);
            _movieId.increment();
        }
    }

  function vote(uint  mId) public{
    votes[msg.sender]=mId;
    emit Voted();

  }


  function addMovie( string memory title,string memory  details,string memory cover)public {
        uint ind = _movieId.current();
            movies[ind]=Movie(ind,title,details,cover);
            _movieId.increment();
        }
  
    function getAllNames() public view returns (string[] memory) {
  console.log("Getting all movies from contract");
  string[] memory allMovies = new string[](_movieId.current());
  for (uint i = 0; i < _movieId.current(); i++) {
    allMovies[i].id=movies[i].id;
    allMovies[i].title= movies[i].title;
    allMovies[i].details= movies[i].details;
    allMovies[i].cover= movies[i].cover;
    console.log("Name for token %d is %s", i, allMovies[i]);
  }

  return allMovies;
}
  
}