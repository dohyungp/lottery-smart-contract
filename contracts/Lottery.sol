// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Lottery {
    struct BetInfo {
        uint256 answerBlockNumber;
        address payable better;
        bytes challenges;
    }

    address public owner;

    uint256 private _pot;

    constructor() {
        owner = msg.sender;
    }

    function getPot() public view returns (uint256) {
        return _pot;
    }
}
