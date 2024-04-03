// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LegalRecords {
    struct Document {
        string content;
        string ipfsHash;
        bool isShared;
    }

    mapping(address => Document[]) private userDocuments;
    mapping(address => bool) private isJudge;
    mapping(address => bool) private isLawyer;
    mapping(address => bool) private isClient;

    constructor(address _judgeAddress, address _lawyerAddress, address _clientAddress) {
        isJudge[_judgeAddress] = true;
        isLawyer[_lawyerAddress] = true;
        isClient[_clientAddress] = true;
    }

    function addDocument(string memory _content, string memory _ipfsHash) public {
        require(isClient[msg.sender], "Only clients can add new documents.");
        userDocuments[msg.sender].push(Document({
            content: _content,
            ipfsHash: _ipfsHash,
            isShared: false
        }));
    }

    function viewDocument(uint _documentId) public view returns (string memory, string memory, bool) {
        Document[] storage documents = userDocuments[msg.sender];
        require(_documentId < documents.length, "Document does not exist.");
        Document memory document = documents[_documentId];
        require(isClient[msg.sender] || isJudge[msg.sender] || isLawyer[msg.sender], "You don't have access to this document.");
        return (document.content, document.ipfsHash, document.isShared);
    }

    function shareDocument(uint _documentId) public {
        require(isLawyer[msg.sender], "Only lawyers can share documents.");
        Document[] storage documents = userDocuments[msg.sender];
        require(_documentId < documents.length, "Document does not exist.");
        Document storage document = documents[_documentId];
        document.isShared = true;
    }

    // Additional functions for uploading, updating, and other functionalities can be added here
}
