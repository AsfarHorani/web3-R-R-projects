// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


// Helper functions OpenZeppelin provides.
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract VotingSys{

    //storing movies
    Movie [] public movies;
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
     event Voted (string message);
  event NewMovie ();
 constructor (string [] memory _title, 
 string [] memory _details, 
 string  [] memory _cover){
       console.log("Initialized a constructor");
        for(uint i=0; i<_title.length; i++){
            uint ind = _movieId.current();
            movies.push(Movie(
                ind,
               _title[i],
               _details[i],
               _cover[i]
            ));
             console.log("%s: movie %s initialized",movies[i].title);
            _movieId.increment();
        }
    }

  function vote(uint  mId) public{
    votes[msg.sender]=mId;
    emit Voted("You have casted vote");

  }


  function addMovie( string memory title,string memory  details,string memory cover)public {
        uint ind = _movieId.current();
            movies.push(Movie(ind,title,details,cover));
            _movieId.increment();
        }
  
    function getAllMovies() public view returns (Movie [] memory) {

          return movies;
  }

}
  
