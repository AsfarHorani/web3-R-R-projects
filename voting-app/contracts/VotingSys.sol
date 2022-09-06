pragma solidity ^0.8.0;

contract VotingSol{

    mapping(uint=>movie) public movies;

    constructor () public{

    }

    struct movie{
        uint id;
        string title;
        string details;
        string cover;
        uint vote;
    }
}