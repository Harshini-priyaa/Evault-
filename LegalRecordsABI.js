// LegalRecordsABI.js

const LegalRecordsABI = {
    // Paste the content of LegalRecords.json here

    
        "contractName": "LegalRecords",
        "abi": [
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_judgeAddress",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "_lawyerAddress",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "_clientAddress",
                "type": "address"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_content",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_ipfsHash",
                "type": "string"
              }
            ],
            "name": "addDocument",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "_documentId",
                "type": "uint256"
              }
            ],
            "name": "viewDocument",
            "outputs": [],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "_documentId",
                "type": "uint256"
              }
            ],
            "name": "shareDocument",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ],
        "metadata": "{\"compiler\":{\"version\":\"0.8.21+commit.d9974bed\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_judgeAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_lawyerAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_clientAddress\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_content\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_ipfsHash\",\"type\":\"string\"}],\"name\":\"addDocument\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_documentId\",\"type\":\"uint256\"}],\"name\":\"shareDocument\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_documentId\",\"type\":\"uint256\"}],\"name\":\"viewDocument\",\"outputs\":[],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/LegalRecords.sol\":\"LegalRecords\"},\"evmVersion\":\"shanghai\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/LegalRecords.sol\":{\"keccak256\":\"0x493345b6b580b17ac5fc4e1282a44689fdde7fa6f9c5d78ba5d766391f014b34\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6227793687341a21e2d4a09ce8d3d499c6509ca7f81c0b4a57ebe27edbffb8c3\",\"dweb:/ipfs/QmU73niGjLovJztpGwRJZikq6rhgnEoUNGFCTpoqk8ZYwX\"]}},\"version\":1}",
        "bytecode": "0x608060405234801561000f575f80fd5b506040516108e13803806108e183398181016040528101906100319190610195565b6001805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550600160025f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055505050506101e5565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6101648261013b565b9050919050565b6101748161015a565b811461017e575f80fd5b50565b5f8151905061018f8161016b565b92915050565b5f805f606084860312156101ac576101ab610137565b5b5f6101b986828701610181565b93505060206101ca86828701610181565b92505060406101db86828701610181565b9150509250925092565b6106ef806101f25f395ff3fe608060405234801561000f575f80fd5b506004361061003f575f3560e01c806318939b5e146100435780634d2b19781461005f5780638e143e411461007b575b5f80fd5b61005d60048036038101906100589190610322565b610097565b005b61007960048036038101906100749190610489565b6101c5565b005b61009560048036038101906100909190610322565b610252565b005b60035f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff1680610132575060015f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff165b80610183575060025f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff165b6101c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101b99061057f565b60405180910390fd5b50565b60035f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff1661024e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102459061060d565b60405180910390fd5b5050565b60025f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff166102db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d29061069b565b60405180910390fd5b50565b5f604051905090565b5f80fd5b5f80fd5b5f819050919050565b610301816102ef565b811461030b575f80fd5b50565b5f8135905061031c816102f8565b92915050565b5f60208284031215610337576103366102e7565b5b5f6103448482850161030e565b91505092915050565b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61039b82610355565b810181811067ffffffffffffffff821117156103ba576103b9610365565b5b80604052505050565b5f6103cc6102de565b90506103d88282610392565b919050565b5f67ffffffffffffffff8211156103f7576103f6610365565b5b61040082610355565b9050602081019050919050565b828183375f83830152505050565b5f61042d610428846103dd565b6103c3565b90508281526020810184848401111561044957610448610351565b5b61045484828561040d565b509392505050565b5f82601f8301126104705761046f61034d565b5b813561048084826020860161041b565b91505092915050565b5f806040838503121561049f5761049e6102e7565b5b5f83013567ffffffffffffffff8111156104bc576104bb6102eb565b5b6104c88582860161045c565b925050602083013567ffffffffffffffff8111156104e9576104e86102eb565b5b6104f58582860161045c565b9150509250929050565b5f82825260208201905092915050565b7f596f7520646f6e277420686176652061636365737320746f207468697320646f5f8201527f63756d656e742e00000000000000000000000000000000000000000000000000602082015250565b5f6105696027836104ff565b91506105748261050f565b604082019050919050565b5f6020820190508181035f8301526105968161055d565b9050919050565b7f4f6e6c7920636c69656e74732063616e20616464206e657720646f63756d656e5f8201527f74732e0000000000000000000000000000000000000000000000000000000000602082015250565b5f6105f76023836104ff565b91506106028261059d565b604082019050919050565b5f6020820190508181035f830152610624816105eb565b9050919050565b7f4f6e6c79206c6177796572732063616e20736861726520646f63756d656e74735f8201527f2e00000000000000000000000000000000000000000000000000000000000000602082015250565b5f6106856021836104ff565b91506106908261062b565b604082019050919050565b5f6020820190508181035f8301526106b281610679565b905091905056fea26469706673582212202af5f93ba2cf61854b452d6fbfa939c3166f6a6c3254b1bd476b1a43a09173e164736f6c63430008150033",
        "deployedBytecode": "0x608060405234801561000f575f80fd5b506004361061003f575f3560e01c806318939b5e146100435780634d2b19781461005f5780638e143e411461007b575b5f80fd5b61005d60048036038101906100589190610322565b610097565b005b61007960048036038101906100749190610489565b6101c5565b005b61009560048036038101906100909190610322565b610252565b005b60035f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff1680610132575060015f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff165b80610183575060025f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff165b6101c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101b99061057f565b60405180910390fd5b50565b60035f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff1661024e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102459061060d565b60405180910390fd5b5050565b60025f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff166102db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d29061069b565b60405180910390fd5b50565b5f604051905090565b5f80fd5b5f80fd5b5f819050919050565b610301816102ef565b811461030b575f80fd5b50565b5f8135905061031c816102f8565b92915050565b5f60208284031215610337576103366102e7565b5b5f6103448482850161030e565b91505092915050565b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61039b82610355565b810181811067ffffffffffffffff821117156103ba576103b9610365565b5b80604052505050565b5f6103cc6102de565b90506103d88282610392565b919050565b5f67ffffffffffffffff8211156103f7576103f6610365565b5b61040082610355565b9050602081019050919050565b828183375f83830152505050565b5f61042d610428846103dd565b6103c3565b90508281526020810184848401111561044957610448610351565b5b61045484828561040d565b509392505050565b5f82601f8301126104705761046f61034d565b5b813561048084826020860161041b565b91505092915050565b5f806040838503121561049f5761049e6102e7565b5b5f83013567ffffffffffffffff8111156104bc576104bb6102eb565b5b6104c88582860161045c565b925050602083013567ffffffffffffffff8111156104e9576104e86102eb565b5b6104f58582860161045c565b9150509250929050565b5f82825260208201905092915050565b7f596f7520646f6e277420686176652061636365737320746f207468697320646f5f8201527f63756d656e742e00000000000000000000000000000000000000000000000000602082015250565b5f6105696027836104ff565b91506105748261050f565b604082019050919050565b5f6020820190508181035f8301526105968161055d565b9050919050565b7f4f6e6c7920636c69656e74732063616e20616464206e657720646f63756d656e5f8201527f74732e0000000000000000000000000000000000000000000000000000000000602082015250565b5f6105f76023836104ff565b91506106028261059d565b604082019050919050565b5f6020820190508181035f830152610624816105eb565b9050919050565b7f4f6e6c79206c6177796572732063616e20736861726520646f63756d656e74735f8201527f2e00000000000000000000000000000000000000000000000000000000000000602082015250565b5f6106856021836104ff565b91506106908261062b565b604082019050919050565b5f6020820190508181035f8301526106b281610679565b905091905056fea26469706673582212202af5f93ba2cf61854b452d6fbfa939c3166f6a6c3254b1bd476b1a43a09173e164736f6c63430008150033",
        "immutableReferences": {},
        "generatedSources": [
          {
            "ast": {
              "nativeSrc": "0:1511:1",
              "nodeType": "YulBlock",
              "src": "0:1511:1",
              "statements": [
                {
                  "body": {
                    "nativeSrc": "47:35:1",
                    "nodeType": "YulBlock",
                    "src": "47:35:1",
                    "statements": [
                      {
                        "nativeSrc": "57:19:1",
                        "nodeType": "YulAssignment",
                        "src": "57:19:1",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "73:2:1",
                              "nodeType": "YulLiteral",
                              "src": "73:2:1",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "67:5:1",
                            "nodeType": "YulIdentifier",
                            "src": "67:5:1"
                          },
                          "nativeSrc": "67:9:1",
                          "nodeType": "YulFunctionCall",
                          "src": "67:9:1"
                        },
                        "variableNames": [
                          {
                            "name": "memPtr",
                            "nativeSrc": "57:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "57:6:1"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "allocate_unbounded",
                  "nativeSrc": "7:75:1",
                  "nodeType": "YulFunctionDefinition",
                  "returnVariables": [
                    {
                      "name": "memPtr",
                      "nativeSrc": "40:6:1",
                      "nodeType": "YulTypedName",
                      "src": "40:6:1",
                      "type": ""
                    }
                  ],
                  "src": "7:75:1"
                },
                {
                  "body": {
                    "nativeSrc": "177:28:1",
                    "nodeType": "YulBlock",
                    "src": "177:28:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "194:1:1",
                              "nodeType": "YulLiteral",
                              "src": "194:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "197:1:1",
                              "nodeType": "YulLiteral",
                              "src": "197:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nativeSrc": "187:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "187:6:1"
                          },
                          "nativeSrc": "187:12:1",
                          "nodeType": "YulFunctionCall",
                          "src": "187:12:1"
                        },
                        "nativeSrc": "187:12:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "187:12:1"
                      }
                    ]
                  },
                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                  "nativeSrc": "88:117:1",
                  "nodeType": "YulFunctionDefinition",
                  "src": "88:117:1"
                },
                {
                  "body": {
                    "nativeSrc": "300:28:1",
                    "nodeType": "YulBlock",
                    "src": "300:28:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "317:1:1",
                              "nodeType": "YulLiteral",
                              "src": "317:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "320:1:1",
                              "nodeType": "YulLiteral",
                              "src": "320:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nativeSrc": "310:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "310:6:1"
                          },
                          "nativeSrc": "310:12:1",
                          "nodeType": "YulFunctionCall",
                          "src": "310:12:1"
                        },
                        "nativeSrc": "310:12:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "310:12:1"
                      }
                    ]
                  },
                  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                  "nativeSrc": "211:117:1",
                  "nodeType": "YulFunctionDefinition",
                  "src": "211:117:1"
                },
                {
                  "body": {
                    "nativeSrc": "379:81:1",
                    "nodeType": "YulBlock",
                    "src": "379:81:1",
                    "statements": [
                      {
                        "nativeSrc": "389:65:1",
                        "nodeType": "YulAssignment",
                        "src": "389:65:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "404:5:1",
                              "nodeType": "YulIdentifier",
                              "src": "404:5:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "411:42:1",
                              "nodeType": "YulLiteral",
                              "src": "411:42:1",
                              "type": "",
                              "value": "0xffffffffffffffffffffffffffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nativeSrc": "400:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "400:3:1"
                          },
                          "nativeSrc": "400:54:1",
                          "nodeType": "YulFunctionCall",
                          "src": "400:54:1"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nativeSrc": "389:7:1",
                            "nodeType": "YulIdentifier",
                            "src": "389:7:1"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "cleanup_t_uint160",
                  "nativeSrc": "334:126:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "361:5:1",
                      "nodeType": "YulTypedName",
                      "src": "361:5:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nativeSrc": "371:7:1",
                      "nodeType": "YulTypedName",
                      "src": "371:7:1",
                      "type": ""
                    }
                  ],
                  "src": "334:126:1"
                },
                {
                  "body": {
                    "nativeSrc": "511:51:1",
                    "nodeType": "YulBlock",
                    "src": "511:51:1",
                    "statements": [
                      {
                        "nativeSrc": "521:35:1",
                        "nodeType": "YulAssignment",
                        "src": "521:35:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "550:5:1",
                              "nodeType": "YulIdentifier",
                              "src": "550:5:1"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint160",
                            "nativeSrc": "532:17:1",
                            "nodeType": "YulIdentifier",
                            "src": "532:17:1"
                          },
                          "nativeSrc": "532:24:1",
                          "nodeType": "YulFunctionCall",
                          "src": "532:24:1"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nativeSrc": "521:7:1",
                            "nodeType": "YulIdentifier",
                            "src": "521:7:1"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "cleanup_t_address",
                  "nativeSrc": "466:96:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "493:5:1",
                      "nodeType": "YulTypedName",
                      "src": "493:5:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nativeSrc": "503:7:1",
                      "nodeType": "YulTypedName",
                      "src": "503:7:1",
                      "type": ""
                    }
                  ],
                  "src": "466:96:1"
                },
                {
                  "body": {
                    "nativeSrc": "611:79:1",
                    "nodeType": "YulBlock",
                    "src": "611:79:1",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "668:16:1",
                          "nodeType": "YulBlock",
                          "src": "668:16:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "677:1:1",
                                    "nodeType": "YulLiteral",
                                    "src": "677:1:1",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "680:1:1",
                                    "nodeType": "YulLiteral",
                                    "src": "680:1:1",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "670:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "670:6:1"
                                },
                                "nativeSrc": "670:12:1",
                                "nodeType": "YulFunctionCall",
                                "src": "670:12:1"
                              },
                              "nativeSrc": "670:12:1",
                              "nodeType": "YulExpressionStatement",
                              "src": "670:12:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nativeSrc": "634:5:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "634:5:1"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nativeSrc": "659:5:1",
                                      "nodeType": "YulIdentifier",
                                      "src": "659:5:1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "cleanup_t_address",
                                    "nativeSrc": "641:17:1",
                                    "nodeType": "YulIdentifier",
                                    "src": "641:17:1"
                                  },
                                  "nativeSrc": "641:24:1",
                                  "nodeType": "YulFunctionCall",
                                  "src": "641:24:1"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nativeSrc": "631:2:1",
                                "nodeType": "YulIdentifier",
                                "src": "631:2:1"
                              },
                              "nativeSrc": "631:35:1",
                              "nodeType": "YulFunctionCall",
                              "src": "631:35:1"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "624:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "624:6:1"
                          },
                          "nativeSrc": "624:43:1",
                          "nodeType": "YulFunctionCall",
                          "src": "624:43:1"
                        },
                        "nativeSrc": "621:63:1",
                        "nodeType": "YulIf",
                        "src": "621:63:1"
                      }
                    ]
                  },
                  "name": "validator_revert_t_address",
                  "nativeSrc": "568:122:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "604:5:1",
                      "nodeType": "YulTypedName",
                      "src": "604:5:1",
                      "type": ""
                    }
                  ],
                  "src": "568:122:1"
                },
                {
                  "body": {
                    "nativeSrc": "759:80:1",
                    "nodeType": "YulBlock",
                    "src": "759:80:1",
                    "statements": [
                      {
                        "nativeSrc": "769:22:1",
                        "nodeType": "YulAssignment",
                        "src": "769:22:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nativeSrc": "784:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "784:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "778:5:1",
                            "nodeType": "YulIdentifier",
                            "src": "778:5:1"
                          },
                          "nativeSrc": "778:13:1",
                          "nodeType": "YulFunctionCall",
                          "src": "778:13:1"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nativeSrc": "769:5:1",
                            "nodeType": "YulIdentifier",
                            "src": "769:5:1"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "827:5:1",
                              "nodeType": "YulIdentifier",
                              "src": "827:5:1"
                            }
                          ],
                          "functionName": {
                            "name": "validator_revert_t_address",
                            "nativeSrc": "800:26:1",
                            "nodeType": "YulIdentifier",
                            "src": "800:26:1"
                          },
                          "nativeSrc": "800:33:1",
                          "nodeType": "YulFunctionCall",
                          "src": "800:33:1"
                        },
                        "nativeSrc": "800:33:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "800:33:1"
                      }
                    ]
                  },
                  "name": "abi_decode_t_address_fromMemory",
                  "nativeSrc": "696:143:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nativeSrc": "737:6:1",
                      "nodeType": "YulTypedName",
                      "src": "737:6:1",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nativeSrc": "745:3:1",
                      "nodeType": "YulTypedName",
                      "src": "745:3:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nativeSrc": "753:5:1",
                      "nodeType": "YulTypedName",
                      "src": "753:5:1",
                      "type": ""
                    }
                  ],
                  "src": "696:143:1"
                },
                {
                  "body": {
                    "nativeSrc": "956:552:1",
                    "nodeType": "YulBlock",
                    "src": "956:552:1",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "1002:83:1",
                          "nodeType": "YulBlock",
                          "src": "1002:83:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nativeSrc": "1004:77:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "1004:77:1"
                                },
                                "nativeSrc": "1004:79:1",
                                "nodeType": "YulFunctionCall",
                                "src": "1004:79:1"
                              },
                              "nativeSrc": "1004:79:1",
                              "nodeType": "YulExpressionStatement",
                              "src": "1004:79:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nativeSrc": "977:7:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "977:7:1"
                                },
                                {
                                  "name": "headStart",
                                  "nativeSrc": "986:9:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "986:9:1"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "973:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "973:3:1"
                              },
                              "nativeSrc": "973:23:1",
                              "nodeType": "YulFunctionCall",
                              "src": "973:23:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "998:2:1",
                              "nodeType": "YulLiteral",
                              "src": "998:2:1",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nativeSrc": "969:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "969:3:1"
                          },
                          "nativeSrc": "969:32:1",
                          "nodeType": "YulFunctionCall",
                          "src": "969:32:1"
                        },
                        "nativeSrc": "966:119:1",
                        "nodeType": "YulIf",
                        "src": "966:119:1"
                      },
                      {
                        "nativeSrc": "1095:128:1",
                        "nodeType": "YulBlock",
                        "src": "1095:128:1",
                        "statements": [
                          {
                            "nativeSrc": "1110:15:1",
                            "nodeType": "YulVariableDeclaration",
                            "src": "1110:15:1",
                            "value": {
                              "kind": "number",
                              "nativeSrc": "1124:1:1",
                              "nodeType": "YulLiteral",
                              "src": "1124:1:1",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nativeSrc": "1114:6:1",
                                "nodeType": "YulTypedName",
                                "src": "1114:6:1",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nativeSrc": "1139:74:1",
                            "nodeType": "YulAssignment",
                            "src": "1139:74:1",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nativeSrc": "1185:9:1",
                                      "nodeType": "YulIdentifier",
                                      "src": "1185:9:1"
                                    },
                                    {
                                      "name": "offset",
                                      "nativeSrc": "1196:6:1",
                                      "nodeType": "YulIdentifier",
                                      "src": "1196:6:1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "1181:3:1",
                                    "nodeType": "YulIdentifier",
                                    "src": "1181:3:1"
                                  },
                                  "nativeSrc": "1181:22:1",
                                  "nodeType": "YulFunctionCall",
                                  "src": "1181:22:1"
                                },
                                {
                                  "name": "dataEnd",
                                  "nativeSrc": "1205:7:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "1205:7:1"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address_fromMemory",
                                "nativeSrc": "1149:31:1",
                                "nodeType": "YulIdentifier",
                                "src": "1149:31:1"
                              },
                              "nativeSrc": "1149:64:1",
                              "nodeType": "YulFunctionCall",
                              "src": "1149:64:1"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nativeSrc": "1139:6:1",
                                "nodeType": "YulIdentifier",
                                "src": "1139:6:1"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nativeSrc": "1233:129:1",
                        "nodeType": "YulBlock",
                        "src": "1233:129:1",
                        "statements": [
                          {
                            "nativeSrc": "1248:16:1",
                            "nodeType": "YulVariableDeclaration",
                            "src": "1248:16:1",
                            "value": {
                              "kind": "number",
                              "nativeSrc": "1262:2:1",
                              "nodeType": "YulLiteral",
                              "src": "1262:2:1",
                              "type": "",
                              "value": "32"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nativeSrc": "1252:6:1",
                                "nodeType": "YulTypedName",
                                "src": "1252:6:1",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nativeSrc": "1278:74:1",
                            "nodeType": "YulAssignment",
                            "src": "1278:74:1",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nativeSrc": "1324:9:1",
                                      "nodeType": "YulIdentifier",
                                      "src": "1324:9:1"
                                    },
                                    {
                                      "name": "offset",
                                      "nativeSrc": "1335:6:1",
                                      "nodeType": "YulIdentifier",
                                      "src": "1335:6:1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "1320:3:1",
                                    "nodeType": "YulIdentifier",
                                    "src": "1320:3:1"
                                  },
                                  "nativeSrc": "1320:22:1",
                                  "nodeType": "YulFunctionCall",
                                  "src": "1320:22:1"
                                },
                                {
                                  "name": "dataEnd",
                                  "nativeSrc": "1344:7:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "1344:7:1"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address_fromMemory",
                                "nativeSrc": "1288:31:1",
                                "nodeType": "YulIdentifier",
                                "src": "1288:31:1"
                              },
                              "nativeSrc": "1288:64:1",
                              "nodeType": "YulFunctionCall",
                              "src": "1288:64:1"
                            },
                            "variableNames": [
                              {
                                "name": "value1",
                                "nativeSrc": "1278:6:1",
                                "nodeType": "YulIdentifier",
                                "src": "1278:6:1"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nativeSrc": "1372:129:1",
                        "nodeType": "YulBlock",
                        "src": "1372:129:1",
                        "statements": [
                          {
                            "nativeSrc": "1387:16:1",
                            "nodeType": "YulVariableDeclaration",
                            "src": "1387:16:1",
                            "value": {
                              "kind": "number",
                              "nativeSrc": "1401:2:1",
                              "nodeType": "YulLiteral",
                              "src": "1401:2:1",
                              "type": "",
                              "value": "64"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nativeSrc": "1391:6:1",
                                "nodeType": "YulTypedName",
                                "src": "1391:6:1",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nativeSrc": "1417:74:1",
                            "nodeType": "YulAssignment",
                            "src": "1417:74:1",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nativeSrc": "1463:9:1",
                                      "nodeType": "YulIdentifier",
                                      "src": "1463:9:1"
                                    },
                                    {
                                      "name": "offset",
                                      "nativeSrc": "1474:6:1",
                                      "nodeType": "YulIdentifier",
                                      "src": "1474:6:1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "1459:3:1",
                                    "nodeType": "YulIdentifier",
                                    "src": "1459:3:1"
                                  },
                                  "nativeSrc": "1459:22:1",
                                  "nodeType": "YulFunctionCall",
                                  "src": "1459:22:1"
                                },
                                {
                                  "name": "dataEnd",
                                  "nativeSrc": "1483:7:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "1483:7:1"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address_fromMemory",
                                "nativeSrc": "1427:31:1",
                                "nodeType": "YulIdentifier",
                                "src": "1427:31:1"
                              },
                              "nativeSrc": "1427:64:1",
                              "nodeType": "YulFunctionCall",
                              "src": "1427:64:1"
                            },
                            "variableNames": [
                              {
                                "name": "value2",
                                "nativeSrc": "1417:6:1",
                                "nodeType": "YulIdentifier",
                                "src": "1417:6:1"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_addresst_addresst_address_fromMemory",
                  "nativeSrc": "845:663:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "910:9:1",
                      "nodeType": "YulTypedName",
                      "src": "910:9:1",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nativeSrc": "921:7:1",
                      "nodeType": "YulTypedName",
                      "src": "921:7:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nativeSrc": "933:6:1",
                      "nodeType": "YulTypedName",
                      "src": "933:6:1",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nativeSrc": "941:6:1",
                      "nodeType": "YulTypedName",
                      "src": "941:6:1",
                      "type": ""
                    },
                    {
                      "name": "value2",
                      "nativeSrc": "949:6:1",
                      "nodeType": "YulTypedName",
                      "src": "949:6:1",
                      "type": ""
                    }
                  ],
                  "src": "845:663:1"
                }
              ]
            },
            "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_address_fromMemory(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_address_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n}\n",
            "id": 1,
            "language": "Yul",
            "name": "#utility.yul"
          }
        ],
        "deployedGeneratedSources": [
          {
            "ast": {
              "nativeSrc": "0:7333:1",
              "nodeType": "YulBlock",
              "src": "0:7333:1",
              "statements": [
                {
                  "body": {
                    "nativeSrc": "47:35:1",
                    "nodeType": "YulBlock",
                    "src": "47:35:1",
                    "statements": [
                      {
                        "nativeSrc": "57:19:1",
                        "nodeType": "YulAssignment",
                        "src": "57:19:1",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "73:2:1",
                              "nodeType": "YulLiteral",
                              "src": "73:2:1",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "67:5:1",
                            "nodeType": "YulIdentifier",
                            "src": "67:5:1"
                          },
                          "nativeSrc": "67:9:1",
                          "nodeType": "YulFunctionCall",
                          "src": "67:9:1"
                        },
                        "variableNames": [
                          {
                            "name": "memPtr",
                            "nativeSrc": "57:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "57:6:1"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "allocate_unbounded",
                  "nativeSrc": "7:75:1",
                  "nodeType": "YulFunctionDefinition",
                  "returnVariables": [
                    {
                      "name": "memPtr",
                      "nativeSrc": "40:6:1",
                      "nodeType": "YulTypedName",
                      "src": "40:6:1",
                      "type": ""
                    }
                  ],
                  "src": "7:75:1"
                },
                {
                  "body": {
                    "nativeSrc": "177:28:1",
                    "nodeType": "YulBlock",
                    "src": "177:28:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "194:1:1",
                              "nodeType": "YulLiteral",
                              "src": "194:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "197:1:1",
                              "nodeType": "YulLiteral",
                              "src": "197:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nativeSrc": "187:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "187:6:1"
                          },
                          "nativeSrc": "187:12:1",
                          "nodeType": "YulFunctionCall",
                          "src": "187:12:1"
                        },
                        "nativeSrc": "187:12:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "187:12:1"
                      }
                    ]
                  },
                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                  "nativeSrc": "88:117:1",
                  "nodeType": "YulFunctionDefinition",
                  "src": "88:117:1"
                },
                {
                  "body": {
                    "nativeSrc": "300:28:1",
                    "nodeType": "YulBlock",
                    "src": "300:28:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "317:1:1",
                              "nodeType": "YulLiteral",
                              "src": "317:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "320:1:1",
                              "nodeType": "YulLiteral",
                              "src": "320:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nativeSrc": "310:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "310:6:1"
                          },
                          "nativeSrc": "310:12:1",
                          "nodeType": "YulFunctionCall",
                          "src": "310:12:1"
                        },
                        "nativeSrc": "310:12:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "310:12:1"
                      }
                    ]
                  },
                  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                  "nativeSrc": "211:117:1",
                  "nodeType": "YulFunctionDefinition",
                  "src": "211:117:1"
                },
                {
                  "body": {
                    "nativeSrc": "379:32:1",
                    "nodeType": "YulBlock",
                    "src": "379:32:1",
                    "statements": [
                      {
                        "nativeSrc": "389:16:1",
                        "nodeType": "YulAssignment",
                        "src": "389:16:1",
                        "value": {
                          "name": "value",
                          "nativeSrc": "400:5:1",
                          "nodeType": "YulIdentifier",
                          "src": "400:5:1"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nativeSrc": "389:7:1",
                            "nodeType": "YulIdentifier",
                            "src": "389:7:1"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "cleanup_t_uint256",
                  "nativeSrc": "334:77:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "361:5:1",
                      "nodeType": "YulTypedName",
                      "src": "361:5:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nativeSrc": "371:7:1",
                      "nodeType": "YulTypedName",
                      "src": "371:7:1",
                      "type": ""
                    }
                  ],
                  "src": "334:77:1"
                },
                {
                  "body": {
                    "nativeSrc": "460:79:1",
                    "nodeType": "YulBlock",
                    "src": "460:79:1",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "517:16:1",
                          "nodeType": "YulBlock",
                          "src": "517:16:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "526:1:1",
                                    "nodeType": "YulLiteral",
                                    "src": "526:1:1",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "529:1:1",
                                    "nodeType": "YulLiteral",
                                    "src": "529:1:1",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "519:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "519:6:1"
                                },
                                "nativeSrc": "519:12:1",
                                "nodeType": "YulFunctionCall",
                                "src": "519:12:1"
                              },
                              "nativeSrc": "519:12:1",
                              "nodeType": "YulExpressionStatement",
                              "src": "519:12:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nativeSrc": "483:5:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "483:5:1"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nativeSrc": "508:5:1",
                                      "nodeType": "YulIdentifier",
                                      "src": "508:5:1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "cleanup_t_uint256",
                                    "nativeSrc": "490:17:1",
                                    "nodeType": "YulIdentifier",
                                    "src": "490:17:1"
                                  },
                                  "nativeSrc": "490:24:1",
                                  "nodeType": "YulFunctionCall",
                                  "src": "490:24:1"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nativeSrc": "480:2:1",
                                "nodeType": "YulIdentifier",
                                "src": "480:2:1"
                              },
                              "nativeSrc": "480:35:1",
                              "nodeType": "YulFunctionCall",
                              "src": "480:35:1"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "473:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "473:6:1"
                          },
                          "nativeSrc": "473:43:1",
                          "nodeType": "YulFunctionCall",
                          "src": "473:43:1"
                        },
                        "nativeSrc": "470:63:1",
                        "nodeType": "YulIf",
                        "src": "470:63:1"
                      }
                    ]
                  },
                  "name": "validator_revert_t_uint256",
                  "nativeSrc": "417:122:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "453:5:1",
                      "nodeType": "YulTypedName",
                      "src": "453:5:1",
                      "type": ""
                    }
                  ],
                  "src": "417:122:1"
                },
                {
                  "body": {
                    "nativeSrc": "597:87:1",
                    "nodeType": "YulBlock",
                    "src": "597:87:1",
                    "statements": [
                      {
                        "nativeSrc": "607:29:1",
                        "nodeType": "YulAssignment",
                        "src": "607:29:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nativeSrc": "629:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "629:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nativeSrc": "616:12:1",
                            "nodeType": "YulIdentifier",
                            "src": "616:12:1"
                          },
                          "nativeSrc": "616:20:1",
                          "nodeType": "YulFunctionCall",
                          "src": "616:20:1"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nativeSrc": "607:5:1",
                            "nodeType": "YulIdentifier",
                            "src": "607:5:1"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "672:5:1",
                              "nodeType": "YulIdentifier",
                              "src": "672:5:1"
                            }
                          ],
                          "functionName": {
                            "name": "validator_revert_t_uint256",
                            "nativeSrc": "645:26:1",
                            "nodeType": "YulIdentifier",
                            "src": "645:26:1"
                          },
                          "nativeSrc": "645:33:1",
                          "nodeType": "YulFunctionCall",
                          "src": "645:33:1"
                        },
                        "nativeSrc": "645:33:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "645:33:1"
                      }
                    ]
                  },
                  "name": "abi_decode_t_uint256",
                  "nativeSrc": "545:139:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nativeSrc": "575:6:1",
                      "nodeType": "YulTypedName",
                      "src": "575:6:1",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nativeSrc": "583:3:1",
                      "nodeType": "YulTypedName",
                      "src": "583:3:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nativeSrc": "591:5:1",
                      "nodeType": "YulTypedName",
                      "src": "591:5:1",
                      "type": ""
                    }
                  ],
                  "src": "545:139:1"
                },
                {
                  "body": {
                    "nativeSrc": "756:263:1",
                    "nodeType": "YulBlock",
                    "src": "756:263:1",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "802:83:1",
                          "nodeType": "YulBlock",
                          "src": "802:83:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nativeSrc": "804:77:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "804:77:1"
                                },
                                "nativeSrc": "804:79:1",
                                "nodeType": "YulFunctionCall",
                                "src": "804:79:1"
                              },
                              "nativeSrc": "804:79:1",
                              "nodeType": "YulExpressionStatement",
                              "src": "804:79:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nativeSrc": "777:7:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "777:7:1"
                                },
                                {
                                  "name": "headStart",
                                  "nativeSrc": "786:9:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "786:9:1"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "773:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "773:3:1"
                              },
                              "nativeSrc": "773:23:1",
                              "nodeType": "YulFunctionCall",
                              "src": "773:23:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "798:2:1",
                              "nodeType": "YulLiteral",
                              "src": "798:2:1",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nativeSrc": "769:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "769:3:1"
                          },
                          "nativeSrc": "769:32:1",
                          "nodeType": "YulFunctionCall",
                          "src": "769:32:1"
                        },
                        "nativeSrc": "766:119:1",
                        "nodeType": "YulIf",
                        "src": "766:119:1"
                      },
                      {
                        "nativeSrc": "895:117:1",
                        "nodeType": "YulBlock",
                        "src": "895:117:1",
                        "statements": [
                          {
                            "nativeSrc": "910:15:1",
                            "nodeType": "YulVariableDeclaration",
                            "src": "910:15:1",
                            "value": {
                              "kind": "number",
                              "nativeSrc": "924:1:1",
                              "nodeType": "YulLiteral",
                              "src": "924:1:1",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nativeSrc": "914:6:1",
                                "nodeType": "YulTypedName",
                                "src": "914:6:1",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nativeSrc": "939:63:1",
                            "nodeType": "YulAssignment",
                            "src": "939:63:1",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nativeSrc": "974:9:1",
                                      "nodeType": "YulIdentifier",
                                      "src": "974:9:1"
                                    },
                                    {
                                      "name": "offset",
                                      "nativeSrc": "985:6:1",
                                      "nodeType": "YulIdentifier",
                                      "src": "985:6:1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "970:3:1",
                                    "nodeType": "YulIdentifier",
                                    "src": "970:3:1"
                                  },
                                  "nativeSrc": "970:22:1",
                                  "nodeType": "YulFunctionCall",
                                  "src": "970:22:1"
                                },
                                {
                                  "name": "dataEnd",
                                  "nativeSrc": "994:7:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "994:7:1"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_uint256",
                                "nativeSrc": "949:20:1",
                                "nodeType": "YulIdentifier",
                                "src": "949:20:1"
                              },
                              "nativeSrc": "949:53:1",
                              "nodeType": "YulFunctionCall",
                              "src": "949:53:1"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nativeSrc": "939:6:1",
                                "nodeType": "YulIdentifier",
                                "src": "939:6:1"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_uint256",
                  "nativeSrc": "690:329:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "726:9:1",
                      "nodeType": "YulTypedName",
                      "src": "726:9:1",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nativeSrc": "737:7:1",
                      "nodeType": "YulTypedName",
                      "src": "737:7:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nativeSrc": "749:6:1",
                      "nodeType": "YulTypedName",
                      "src": "749:6:1",
                      "type": ""
                    }
                  ],
                  "src": "690:329:1"
                },
                {
                  "body": {
                    "nativeSrc": "1114:28:1",
                    "nodeType": "YulBlock",
                    "src": "1114:28:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "1131:1:1",
                              "nodeType": "YulLiteral",
                              "src": "1131:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "1134:1:1",
                              "nodeType": "YulLiteral",
                              "src": "1134:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nativeSrc": "1124:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "1124:6:1"
                          },
                          "nativeSrc": "1124:12:1",
                          "nodeType": "YulFunctionCall",
                          "src": "1124:12:1"
                        },
                        "nativeSrc": "1124:12:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "1124:12:1"
                      }
                    ]
                  },
                  "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                  "nativeSrc": "1025:117:1",
                  "nodeType": "YulFunctionDefinition",
                  "src": "1025:117:1"
                },
                {
                  "body": {
                    "nativeSrc": "1237:28:1",
                    "nodeType": "YulBlock",
                    "src": "1237:28:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "1254:1:1",
                              "nodeType": "YulLiteral",
                              "src": "1254:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "1257:1:1",
                              "nodeType": "YulLiteral",
                              "src": "1257:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nativeSrc": "1247:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "1247:6:1"
                          },
                          "nativeSrc": "1247:12:1",
                          "nodeType": "YulFunctionCall",
                          "src": "1247:12:1"
                        },
                        "nativeSrc": "1247:12:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "1247:12:1"
                      }
                    ]
                  },
                  "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                  "nativeSrc": "1148:117:1",
                  "nodeType": "YulFunctionDefinition",
                  "src": "1148:117:1"
                },
                {
                  "body": {
                    "nativeSrc": "1319:54:1",
                    "nodeType": "YulBlock",
                    "src": "1319:54:1",
                    "statements": [
                      {
                        "nativeSrc": "1329:38:1",
                        "nodeType": "YulAssignment",
                        "src": "1329:38:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nativeSrc": "1347:5:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "1347:5:1"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1354:2:1",
                                  "nodeType": "YulLiteral",
                                  "src": "1354:2:1",
                                  "type": "",
                                  "value": "31"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "1343:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "1343:3:1"
                              },
                              "nativeSrc": "1343:14:1",
                              "nodeType": "YulFunctionCall",
                              "src": "1343:14:1"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1363:2:1",
                                  "nodeType": "YulLiteral",
                                  "src": "1363:2:1",
                                  "type": "",
                                  "value": "31"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nativeSrc": "1359:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "1359:3:1"
                              },
                              "nativeSrc": "1359:7:1",
                              "nodeType": "YulFunctionCall",
                              "src": "1359:7:1"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nativeSrc": "1339:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "1339:3:1"
                          },
                          "nativeSrc": "1339:28:1",
                          "nodeType": "YulFunctionCall",
                          "src": "1339:28:1"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "1329:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "1329:6:1"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "round_up_to_mul_of_32",
                  "nativeSrc": "1271:102:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "1302:5:1",
                      "nodeType": "YulTypedName",
                      "src": "1302:5:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "result",
                      "nativeSrc": "1312:6:1",
                      "nodeType": "YulTypedName",
                      "src": "1312:6:1",
                      "type": ""
                    }
                  ],
                  "src": "1271:102:1"
                },
                {
                  "body": {
                    "nativeSrc": "1407:152:1",
                    "nodeType": "YulBlock",
                    "src": "1407:152:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "1424:1:1",
                              "nodeType": "YulLiteral",
                              "src": "1424:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "1427:77:1",
                              "nodeType": "YulLiteral",
                              "src": "1427:77:1",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "1417:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "1417:6:1"
                          },
                          "nativeSrc": "1417:88:1",
                          "nodeType": "YulFunctionCall",
                          "src": "1417:88:1"
                        },
                        "nativeSrc": "1417:88:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "1417:88:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "1521:1:1",
                              "nodeType": "YulLiteral",
                              "src": "1521:1:1",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "1524:4:1",
                              "nodeType": "YulLiteral",
                              "src": "1524:4:1",
                              "type": "",
                              "value": "0x41"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "1514:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "1514:6:1"
                          },
                          "nativeSrc": "1514:15:1",
                          "nodeType": "YulFunctionCall",
                          "src": "1514:15:1"
                        },
                        "nativeSrc": "1514:15:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "1514:15:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "1545:1:1",
                              "nodeType": "YulLiteral",
                              "src": "1545:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "1548:4:1",
                              "nodeType": "YulLiteral",
                              "src": "1548:4:1",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nativeSrc": "1538:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "1538:6:1"
                          },
                          "nativeSrc": "1538:15:1",
                          "nodeType": "YulFunctionCall",
                          "src": "1538:15:1"
                        },
                        "nativeSrc": "1538:15:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "1538:15:1"
                      }
                    ]
                  },
                  "name": "panic_error_0x41",
                  "nativeSrc": "1379:180:1",
                  "nodeType": "YulFunctionDefinition",
                  "src": "1379:180:1"
                },
                {
                  "body": {
                    "nativeSrc": "1608:238:1",
                    "nodeType": "YulBlock",
                    "src": "1608:238:1",
                    "statements": [
                      {
                        "nativeSrc": "1618:58:1",
                        "nodeType": "YulVariableDeclaration",
                        "src": "1618:58:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nativeSrc": "1640:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "1640:6:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "size",
                                  "nativeSrc": "1670:4:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "1670:4:1"
                                }
                              ],
                              "functionName": {
                                "name": "round_up_to_mul_of_32",
                                "nativeSrc": "1648:21:1",
                                "nodeType": "YulIdentifier",
                                "src": "1648:21:1"
                              },
                              "nativeSrc": "1648:27:1",
                              "nodeType": "YulFunctionCall",
                              "src": "1648:27:1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "1636:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "1636:3:1"
                          },
                          "nativeSrc": "1636:40:1",
                          "nodeType": "YulFunctionCall",
                          "src": "1636:40:1"
                        },
                        "variables": [
                          {
                            "name": "newFreePtr",
                            "nativeSrc": "1622:10:1",
                            "nodeType": "YulTypedName",
                            "src": "1622:10:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "1787:22:1",
                          "nodeType": "YulBlock",
                          "src": "1787:22:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x41",
                                  "nativeSrc": "1789:16:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "1789:16:1"
                                },
                                "nativeSrc": "1789:18:1",
                                "nodeType": "YulFunctionCall",
                                "src": "1789:18:1"
                              },
                              "nativeSrc": "1789:18:1",
                              "nodeType": "YulExpressionStatement",
                              "src": "1789:18:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "newFreePtr",
                                  "nativeSrc": "1730:10:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "1730:10:1"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1742:18:1",
                                  "nodeType": "YulLiteral",
                                  "src": "1742:18:1",
                                  "type": "",
                                  "value": "0xffffffffffffffff"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nativeSrc": "1727:2:1",
                                "nodeType": "YulIdentifier",
                                "src": "1727:2:1"
                              },
                              "nativeSrc": "1727:34:1",
                              "nodeType": "YulFunctionCall",
                              "src": "1727:34:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "newFreePtr",
                                  "nativeSrc": "1766:10:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "1766:10:1"
                                },
                                {
                                  "name": "memPtr",
                                  "nativeSrc": "1778:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "1778:6:1"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nativeSrc": "1763:2:1",
                                "nodeType": "YulIdentifier",
                                "src": "1763:2:1"
                              },
                              "nativeSrc": "1763:22:1",
                              "nodeType": "YulFunctionCall",
                              "src": "1763:22:1"
                            }
                          ],
                          "functionName": {
                            "name": "or",
                            "nativeSrc": "1724:2:1",
                            "nodeType": "YulIdentifier",
                            "src": "1724:2:1"
                          },
                          "nativeSrc": "1724:62:1",
                          "nodeType": "YulFunctionCall",
                          "src": "1724:62:1"
                        },
                        "nativeSrc": "1721:88:1",
                        "nodeType": "YulIf",
                        "src": "1721:88:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "1825:2:1",
                              "nodeType": "YulLiteral",
                              "src": "1825:2:1",
                              "type": "",
                              "value": "64"
                            },
                            {
                              "name": "newFreePtr",
                              "nativeSrc": "1829:10:1",
                              "nodeType": "YulIdentifier",
                              "src": "1829:10:1"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "1818:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "1818:6:1"
                          },
                          "nativeSrc": "1818:22:1",
                          "nodeType": "YulFunctionCall",
                          "src": "1818:22:1"
                        },
                        "nativeSrc": "1818:22:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "1818:22:1"
                      }
                    ]
                  },
                  "name": "finalize_allocation",
                  "nativeSrc": "1565:281:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nativeSrc": "1594:6:1",
                      "nodeType": "YulTypedName",
                      "src": "1594:6:1",
                      "type": ""
                    },
                    {
                      "name": "size",
                      "nativeSrc": "1602:4:1",
                      "nodeType": "YulTypedName",
                      "src": "1602:4:1",
                      "type": ""
                    }
                  ],
                  "src": "1565:281:1"
                },
                {
                  "body": {
                    "nativeSrc": "1893:88:1",
                    "nodeType": "YulBlock",
                    "src": "1893:88:1",
                    "statements": [
                      {
                        "nativeSrc": "1903:30:1",
                        "nodeType": "YulAssignment",
                        "src": "1903:30:1",
                        "value": {
                          "arguments": [],
                          "functionName": {
                            "name": "allocate_unbounded",
                            "nativeSrc": "1913:18:1",
                            "nodeType": "YulIdentifier",
                            "src": "1913:18:1"
                          },
                          "nativeSrc": "1913:20:1",
                          "nodeType": "YulFunctionCall",
                          "src": "1913:20:1"
                        },
                        "variableNames": [
                          {
                            "name": "memPtr",
                            "nativeSrc": "1903:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "1903:6:1"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nativeSrc": "1962:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "1962:6:1"
                            },
                            {
                              "name": "size",
                              "nativeSrc": "1970:4:1",
                              "nodeType": "YulIdentifier",
                              "src": "1970:4:1"
                            }
                          ],
                          "functionName": {
                            "name": "finalize_allocation",
                            "nativeSrc": "1942:19:1",
                            "nodeType": "YulIdentifier",
                            "src": "1942:19:1"
                          },
                          "nativeSrc": "1942:33:1",
                          "nodeType": "YulFunctionCall",
                          "src": "1942:33:1"
                        },
                        "nativeSrc": "1942:33:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "1942:33:1"
                      }
                    ]
                  },
                  "name": "allocate_memory",
                  "nativeSrc": "1852:129:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "size",
                      "nativeSrc": "1877:4:1",
                      "nodeType": "YulTypedName",
                      "src": "1877:4:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "memPtr",
                      "nativeSrc": "1886:6:1",
                      "nodeType": "YulTypedName",
                      "src": "1886:6:1",
                      "type": ""
                    }
                  ],
                  "src": "1852:129:1"
                },
                {
                  "body": {
                    "nativeSrc": "2054:241:1",
                    "nodeType": "YulBlock",
                    "src": "2054:241:1",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "2159:22:1",
                          "nodeType": "YulBlock",
                          "src": "2159:22:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x41",
                                  "nativeSrc": "2161:16:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "2161:16:1"
                                },
                                "nativeSrc": "2161:18:1",
                                "nodeType": "YulFunctionCall",
                                "src": "2161:18:1"
                              },
                              "nativeSrc": "2161:18:1",
                              "nodeType": "YulExpressionStatement",
                              "src": "2161:18:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "length",
                              "nativeSrc": "2131:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "2131:6:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "2139:18:1",
                              "nodeType": "YulLiteral",
                              "src": "2139:18:1",
                              "type": "",
                              "value": "0xffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nativeSrc": "2128:2:1",
                            "nodeType": "YulIdentifier",
                            "src": "2128:2:1"
                          },
                          "nativeSrc": "2128:30:1",
                          "nodeType": "YulFunctionCall",
                          "src": "2128:30:1"
                        },
                        "nativeSrc": "2125:56:1",
                        "nodeType": "YulIf",
                        "src": "2125:56:1"
                      },
                      {
                        "nativeSrc": "2191:37:1",
                        "nodeType": "YulAssignment",
                        "src": "2191:37:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nativeSrc": "2221:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "2221:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "round_up_to_mul_of_32",
                            "nativeSrc": "2199:21:1",
                            "nodeType": "YulIdentifier",
                            "src": "2199:21:1"
                          },
                          "nativeSrc": "2199:29:1",
                          "nodeType": "YulFunctionCall",
                          "src": "2199:29:1"
                        },
                        "variableNames": [
                          {
                            "name": "size",
                            "nativeSrc": "2191:4:1",
                            "nodeType": "YulIdentifier",
                            "src": "2191:4:1"
                          }
                        ]
                      },
                      {
                        "nativeSrc": "2265:23:1",
                        "nodeType": "YulAssignment",
                        "src": "2265:23:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "size",
                              "nativeSrc": "2277:4:1",
                              "nodeType": "YulIdentifier",
                              "src": "2277:4:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "2283:4:1",
                              "nodeType": "YulLiteral",
                              "src": "2283:4:1",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "2273:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "2273:3:1"
                          },
                          "nativeSrc": "2273:15:1",
                          "nodeType": "YulFunctionCall",
                          "src": "2273:15:1"
                        },
                        "variableNames": [
                          {
                            "name": "size",
                            "nativeSrc": "2265:4:1",
                            "nodeType": "YulIdentifier",
                            "src": "2265:4:1"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "array_allocation_size_t_string_memory_ptr",
                  "nativeSrc": "1987:308:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "length",
                      "nativeSrc": "2038:6:1",
                      "nodeType": "YulTypedName",
                      "src": "2038:6:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "size",
                      "nativeSrc": "2049:4:1",
                      "nodeType": "YulTypedName",
                      "src": "2049:4:1",
                      "type": ""
                    }
                  ],
                  "src": "1987:308:1"
                },
                {
                  "body": {
                    "nativeSrc": "2365:82:1",
                    "nodeType": "YulBlock",
                    "src": "2365:82:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "dst",
                              "nativeSrc": "2388:3:1",
                              "nodeType": "YulIdentifier",
                              "src": "2388:3:1"
                            },
                            {
                              "name": "src",
                              "nativeSrc": "2393:3:1",
                              "nodeType": "YulIdentifier",
                              "src": "2393:3:1"
                            },
                            {
                              "name": "length",
                              "nativeSrc": "2398:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "2398:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "calldatacopy",
                            "nativeSrc": "2375:12:1",
                            "nodeType": "YulIdentifier",
                            "src": "2375:12:1"
                          },
                          "nativeSrc": "2375:30:1",
                          "nodeType": "YulFunctionCall",
                          "src": "2375:30:1"
                        },
                        "nativeSrc": "2375:30:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "2375:30:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nativeSrc": "2425:3:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "2425:3:1"
                                },
                                {
                                  "name": "length",
                                  "nativeSrc": "2430:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "2430:6:1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "2421:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "2421:3:1"
                              },
                              "nativeSrc": "2421:16:1",
                              "nodeType": "YulFunctionCall",
                              "src": "2421:16:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "2439:1:1",
                              "nodeType": "YulLiteral",
                              "src": "2439:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "2414:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "2414:6:1"
                          },
                          "nativeSrc": "2414:27:1",
                          "nodeType": "YulFunctionCall",
                          "src": "2414:27:1"
                        },
                        "nativeSrc": "2414:27:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "2414:27:1"
                      }
                    ]
                  },
                  "name": "copy_calldata_to_memory_with_cleanup",
                  "nativeSrc": "2301:146:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "src",
                      "nativeSrc": "2347:3:1",
                      "nodeType": "YulTypedName",
                      "src": "2347:3:1",
                      "type": ""
                    },
                    {
                      "name": "dst",
                      "nativeSrc": "2352:3:1",
                      "nodeType": "YulTypedName",
                      "src": "2352:3:1",
                      "type": ""
                    },
                    {
                      "name": "length",
                      "nativeSrc": "2357:6:1",
                      "nodeType": "YulTypedName",
                      "src": "2357:6:1",
                      "type": ""
                    }
                  ],
                  "src": "2301:146:1"
                },
                {
                  "body": {
                    "nativeSrc": "2537:341:1",
                    "nodeType": "YulBlock",
                    "src": "2537:341:1",
                    "statements": [
                      {
                        "nativeSrc": "2547:75:1",
                        "nodeType": "YulAssignment",
                        "src": "2547:75:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nativeSrc": "2614:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "2614:6:1"
                                }
                              ],
                              "functionName": {
                                "name": "array_allocation_size_t_string_memory_ptr",
                                "nativeSrc": "2572:41:1",
                                "nodeType": "YulIdentifier",
                                "src": "2572:41:1"
                              },
                              "nativeSrc": "2572:49:1",
                              "nodeType": "YulFunctionCall",
                              "src": "2572:49:1"
                            }
                          ],
                          "functionName": {
                            "name": "allocate_memory",
                            "nativeSrc": "2556:15:1",
                            "nodeType": "YulIdentifier",
                            "src": "2556:15:1"
                          },
                          "nativeSrc": "2556:66:1",
                          "nodeType": "YulFunctionCall",
                          "src": "2556:66:1"
                        },
                        "variableNames": [
                          {
                            "name": "array",
                            "nativeSrc": "2547:5:1",
                            "nodeType": "YulIdentifier",
                            "src": "2547:5:1"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "array",
                              "nativeSrc": "2638:5:1",
                              "nodeType": "YulIdentifier",
                              "src": "2638:5:1"
                            },
                            {
                              "name": "length",
                              "nativeSrc": "2645:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "2645:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "2631:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "2631:6:1"
                          },
                          "nativeSrc": "2631:21:1",
                          "nodeType": "YulFunctionCall",
                          "src": "2631:21:1"
                        },
                        "nativeSrc": "2631:21:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "2631:21:1"
                      },
                      {
                        "nativeSrc": "2661:27:1",
                        "nodeType": "YulVariableDeclaration",
                        "src": "2661:27:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "array",
                              "nativeSrc": "2676:5:1",
                              "nodeType": "YulIdentifier",
                              "src": "2676:5:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "2683:4:1",
                              "nodeType": "YulLiteral",
                              "src": "2683:4:1",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "2672:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "2672:3:1"
                          },
                          "nativeSrc": "2672:16:1",
                          "nodeType": "YulFunctionCall",
                          "src": "2672:16:1"
                        },
                        "variables": [
                          {
                            "name": "dst",
                            "nativeSrc": "2665:3:1",
                            "nodeType": "YulTypedName",
                            "src": "2665:3:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "2726:83:1",
                          "nodeType": "YulBlock",
                          "src": "2726:83:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                                  "nativeSrc": "2728:77:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "2728:77:1"
                                },
                                "nativeSrc": "2728:79:1",
                                "nodeType": "YulFunctionCall",
                                "src": "2728:79:1"
                              },
                              "nativeSrc": "2728:79:1",
                              "nodeType": "YulExpressionStatement",
                              "src": "2728:79:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "src",
                                  "nativeSrc": "2707:3:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "2707:3:1"
                                },
                                {
                                  "name": "length",
                                  "nativeSrc": "2712:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "2712:6:1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "2703:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "2703:3:1"
                              },
                              "nativeSrc": "2703:16:1",
                              "nodeType": "YulFunctionCall",
                              "src": "2703:16:1"
                            },
                            {
                              "name": "end",
                              "nativeSrc": "2721:3:1",
                              "nodeType": "YulIdentifier",
                              "src": "2721:3:1"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nativeSrc": "2700:2:1",
                            "nodeType": "YulIdentifier",
                            "src": "2700:2:1"
                          },
                          "nativeSrc": "2700:25:1",
                          "nodeType": "YulFunctionCall",
                          "src": "2700:25:1"
                        },
                        "nativeSrc": "2697:112:1",
                        "nodeType": "YulIf",
                        "src": "2697:112:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "src",
                              "nativeSrc": "2855:3:1",
                              "nodeType": "YulIdentifier",
                              "src": "2855:3:1"
                            },
                            {
                              "name": "dst",
                              "nativeSrc": "2860:3:1",
                              "nodeType": "YulIdentifier",
                              "src": "2860:3:1"
                            },
                            {
                              "name": "length",
                              "nativeSrc": "2865:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "2865:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "copy_calldata_to_memory_with_cleanup",
                            "nativeSrc": "2818:36:1",
                            "nodeType": "YulIdentifier",
                            "src": "2818:36:1"
                          },
                          "nativeSrc": "2818:54:1",
                          "nodeType": "YulFunctionCall",
                          "src": "2818:54:1"
                        },
                        "nativeSrc": "2818:54:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "2818:54:1"
                      }
                    ]
                  },
                  "name": "abi_decode_available_length_t_string_memory_ptr",
                  "nativeSrc": "2453:425:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "src",
                      "nativeSrc": "2510:3:1",
                      "nodeType": "YulTypedName",
                      "src": "2510:3:1",
                      "type": ""
                    },
                    {
                      "name": "length",
                      "nativeSrc": "2515:6:1",
                      "nodeType": "YulTypedName",
                      "src": "2515:6:1",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nativeSrc": "2523:3:1",
                      "nodeType": "YulTypedName",
                      "src": "2523:3:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "array",
                      "nativeSrc": "2531:5:1",
                      "nodeType": "YulTypedName",
                      "src": "2531:5:1",
                      "type": ""
                    }
                  ],
                  "src": "2453:425:1"
                },
                {
                  "body": {
                    "nativeSrc": "2960:278:1",
                    "nodeType": "YulBlock",
                    "src": "2960:278:1",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "3009:83:1",
                          "nodeType": "YulBlock",
                          "src": "3009:83:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                                  "nativeSrc": "3011:77:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "3011:77:1"
                                },
                                "nativeSrc": "3011:79:1",
                                "nodeType": "YulFunctionCall",
                                "src": "3011:79:1"
                              },
                              "nativeSrc": "3011:79:1",
                              "nodeType": "YulExpressionStatement",
                              "src": "3011:79:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "offset",
                                      "nativeSrc": "2988:6:1",
                                      "nodeType": "YulIdentifier",
                                      "src": "2988:6:1"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "2996:4:1",
                                      "nodeType": "YulLiteral",
                                      "src": "2996:4:1",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "2984:3:1",
                                    "nodeType": "YulIdentifier",
                                    "src": "2984:3:1"
                                  },
                                  "nativeSrc": "2984:17:1",
                                  "nodeType": "YulFunctionCall",
                                  "src": "2984:17:1"
                                },
                                {
                                  "name": "end",
                                  "nativeSrc": "3003:3:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "3003:3:1"
                                }
                              ],
                              "functionName": {
                                "name": "slt",
                                "nativeSrc": "2980:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "2980:3:1"
                              },
                              "nativeSrc": "2980:27:1",
                              "nodeType": "YulFunctionCall",
                              "src": "2980:27:1"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "2973:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "2973:6:1"
                          },
                          "nativeSrc": "2973:35:1",
                          "nodeType": "YulFunctionCall",
                          "src": "2973:35:1"
                        },
                        "nativeSrc": "2970:122:1",
                        "nodeType": "YulIf",
                        "src": "2970:122:1"
                      },
                      {
                        "nativeSrc": "3101:34:1",
                        "nodeType": "YulVariableDeclaration",
                        "src": "3101:34:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nativeSrc": "3128:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "3128:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nativeSrc": "3115:12:1",
                            "nodeType": "YulIdentifier",
                            "src": "3115:12:1"
                          },
                          "nativeSrc": "3115:20:1",
                          "nodeType": "YulFunctionCall",
                          "src": "3115:20:1"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nativeSrc": "3105:6:1",
                            "nodeType": "YulTypedName",
                            "src": "3105:6:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "3144:88:1",
                        "nodeType": "YulAssignment",
                        "src": "3144:88:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "offset",
                                  "nativeSrc": "3205:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "3205:6:1"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "3213:4:1",
                                  "nodeType": "YulLiteral",
                                  "src": "3213:4:1",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "3201:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "3201:3:1"
                              },
                              "nativeSrc": "3201:17:1",
                              "nodeType": "YulFunctionCall",
                              "src": "3201:17:1"
                            },
                            {
                              "name": "length",
                              "nativeSrc": "3220:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "3220:6:1"
                            },
                            {
                              "name": "end",
                              "nativeSrc": "3228:3:1",
                              "nodeType": "YulIdentifier",
                              "src": "3228:3:1"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_available_length_t_string_memory_ptr",
                            "nativeSrc": "3153:47:1",
                            "nodeType": "YulIdentifier",
                            "src": "3153:47:1"
                          },
                          "nativeSrc": "3153:79:1",
                          "nodeType": "YulFunctionCall",
                          "src": "3153:79:1"
                        },
                        "variableNames": [
                          {
                            "name": "array",
                            "nativeSrc": "3144:5:1",
                            "nodeType": "YulIdentifier",
                            "src": "3144:5:1"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_t_string_memory_ptr",
                  "nativeSrc": "2898:340:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nativeSrc": "2938:6:1",
                      "nodeType": "YulTypedName",
                      "src": "2938:6:1",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nativeSrc": "2946:3:1",
                      "nodeType": "YulTypedName",
                      "src": "2946:3:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "array",
                      "nativeSrc": "2954:5:1",
                      "nodeType": "YulTypedName",
                      "src": "2954:5:1",
                      "type": ""
                    }
                  ],
                  "src": "2898:340:1"
                },
                {
                  "body": {
                    "nativeSrc": "3347:731:1",
                    "nodeType": "YulBlock",
                    "src": "3347:731:1",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "3393:83:1",
                          "nodeType": "YulBlock",
                          "src": "3393:83:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nativeSrc": "3395:77:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "3395:77:1"
                                },
                                "nativeSrc": "3395:79:1",
                                "nodeType": "YulFunctionCall",
                                "src": "3395:79:1"
                              },
                              "nativeSrc": "3395:79:1",
                              "nodeType": "YulExpressionStatement",
                              "src": "3395:79:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nativeSrc": "3368:7:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "3368:7:1"
                                },
                                {
                                  "name": "headStart",
                                  "nativeSrc": "3377:9:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "3377:9:1"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "3364:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "3364:3:1"
                              },
                              "nativeSrc": "3364:23:1",
                              "nodeType": "YulFunctionCall",
                              "src": "3364:23:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "3389:2:1",
                              "nodeType": "YulLiteral",
                              "src": "3389:2:1",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nativeSrc": "3360:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "3360:3:1"
                          },
                          "nativeSrc": "3360:32:1",
                          "nodeType": "YulFunctionCall",
                          "src": "3360:32:1"
                        },
                        "nativeSrc": "3357:119:1",
                        "nodeType": "YulIf",
                        "src": "3357:119:1"
                      },
                      {
                        "nativeSrc": "3486:287:1",
                        "nodeType": "YulBlock",
                        "src": "3486:287:1",
                        "statements": [
                          {
                            "nativeSrc": "3501:45:1",
                            "nodeType": "YulVariableDeclaration",
                            "src": "3501:45:1",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nativeSrc": "3532:9:1",
                                      "nodeType": "YulIdentifier",
                                      "src": "3532:9:1"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "3543:1:1",
                                      "nodeType": "YulLiteral",
                                      "src": "3543:1:1",
                                      "type": "",
                                      "value": "0"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "3528:3:1",
                                    "nodeType": "YulIdentifier",
                                    "src": "3528:3:1"
                                  },
                                  "nativeSrc": "3528:17:1",
                                  "nodeType": "YulFunctionCall",
                                  "src": "3528:17:1"
                                }
                              ],
                              "functionName": {
                                "name": "calldataload",
                                "nativeSrc": "3515:12:1",
                                "nodeType": "YulIdentifier",
                                "src": "3515:12:1"
                              },
                              "nativeSrc": "3515:31:1",
                              "nodeType": "YulFunctionCall",
                              "src": "3515:31:1"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nativeSrc": "3505:6:1",
                                "nodeType": "YulTypedName",
                                "src": "3505:6:1",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nativeSrc": "3593:83:1",
                              "nodeType": "YulBlock",
                              "src": "3593:83:1",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [],
                                    "functionName": {
                                      "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                      "nativeSrc": "3595:77:1",
                                      "nodeType": "YulIdentifier",
                                      "src": "3595:77:1"
                                    },
                                    "nativeSrc": "3595:79:1",
                                    "nodeType": "YulFunctionCall",
                                    "src": "3595:79:1"
                                  },
                                  "nativeSrc": "3595:79:1",
                                  "nodeType": "YulExpressionStatement",
                                  "src": "3595:79:1"
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "offset",
                                  "nativeSrc": "3565:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "3565:6:1"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "3573:18:1",
                                  "nodeType": "YulLiteral",
                                  "src": "3573:18:1",
                                  "type": "",
                                  "value": "0xffffffffffffffff"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nativeSrc": "3562:2:1",
                                "nodeType": "YulIdentifier",
                                "src": "3562:2:1"
                              },
                              "nativeSrc": "3562:30:1",
                              "nodeType": "YulFunctionCall",
                              "src": "3562:30:1"
                            },
                            "nativeSrc": "3559:117:1",
                            "nodeType": "YulIf",
                            "src": "3559:117:1"
                          },
                          {
                            "nativeSrc": "3690:73:1",
                            "nodeType": "YulAssignment",
                            "src": "3690:73:1",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nativeSrc": "3735:9:1",
                                      "nodeType": "YulIdentifier",
                                      "src": "3735:9:1"
                                    },
                                    {
                                      "name": "offset",
                                      "nativeSrc": "3746:6:1",
                                      "nodeType": "YulIdentifier",
                                      "src": "3746:6:1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "3731:3:1",
                                    "nodeType": "YulIdentifier",
                                    "src": "3731:3:1"
                                  },
                                  "nativeSrc": "3731:22:1",
                                  "nodeType": "YulFunctionCall",
                                  "src": "3731:22:1"
                                },
                                {
                                  "name": "dataEnd",
                                  "nativeSrc": "3755:7:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "3755:7:1"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_string_memory_ptr",
                                "nativeSrc": "3700:30:1",
                                "nodeType": "YulIdentifier",
                                "src": "3700:30:1"
                              },
                              "nativeSrc": "3700:63:1",
                              "nodeType": "YulFunctionCall",
                              "src": "3700:63:1"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nativeSrc": "3690:6:1",
                                "nodeType": "YulIdentifier",
                                "src": "3690:6:1"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nativeSrc": "3783:288:1",
                        "nodeType": "YulBlock",
                        "src": "3783:288:1",
                        "statements": [
                          {
                            "nativeSrc": "3798:46:1",
                            "nodeType": "YulVariableDeclaration",
                            "src": "3798:46:1",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nativeSrc": "3829:9:1",
                                      "nodeType": "YulIdentifier",
                                      "src": "3829:9:1"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "3840:2:1",
                                      "nodeType": "YulLiteral",
                                      "src": "3840:2:1",
                                      "type": "",
                                      "value": "32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "3825:3:1",
                                    "nodeType": "YulIdentifier",
                                    "src": "3825:3:1"
                                  },
                                  "nativeSrc": "3825:18:1",
                                  "nodeType": "YulFunctionCall",
                                  "src": "3825:18:1"
                                }
                              ],
                              "functionName": {
                                "name": "calldataload",
                                "nativeSrc": "3812:12:1",
                                "nodeType": "YulIdentifier",
                                "src": "3812:12:1"
                              },
                              "nativeSrc": "3812:32:1",
                              "nodeType": "YulFunctionCall",
                              "src": "3812:32:1"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nativeSrc": "3802:6:1",
                                "nodeType": "YulTypedName",
                                "src": "3802:6:1",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nativeSrc": "3891:83:1",
                              "nodeType": "YulBlock",
                              "src": "3891:83:1",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [],
                                    "functionName": {
                                      "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                      "nativeSrc": "3893:77:1",
                                      "nodeType": "YulIdentifier",
                                      "src": "3893:77:1"
                                    },
                                    "nativeSrc": "3893:79:1",
                                    "nodeType": "YulFunctionCall",
                                    "src": "3893:79:1"
                                  },
                                  "nativeSrc": "3893:79:1",
                                  "nodeType": "YulExpressionStatement",
                                  "src": "3893:79:1"
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "offset",
                                  "nativeSrc": "3863:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "3863:6:1"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "3871:18:1",
                                  "nodeType": "YulLiteral",
                                  "src": "3871:18:1",
                                  "type": "",
                                  "value": "0xffffffffffffffff"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nativeSrc": "3860:2:1",
                                "nodeType": "YulIdentifier",
                                "src": "3860:2:1"
                              },
                              "nativeSrc": "3860:30:1",
                              "nodeType": "YulFunctionCall",
                              "src": "3860:30:1"
                            },
                            "nativeSrc": "3857:117:1",
                            "nodeType": "YulIf",
                            "src": "3857:117:1"
                          },
                          {
                            "nativeSrc": "3988:73:1",
                            "nodeType": "YulAssignment",
                            "src": "3988:73:1",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nativeSrc": "4033:9:1",
                                      "nodeType": "YulIdentifier",
                                      "src": "4033:9:1"
                                    },
                                    {
                                      "name": "offset",
                                      "nativeSrc": "4044:6:1",
                                      "nodeType": "YulIdentifier",
                                      "src": "4044:6:1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "4029:3:1",
                                    "nodeType": "YulIdentifier",
                                    "src": "4029:3:1"
                                  },
                                  "nativeSrc": "4029:22:1",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4029:22:1"
                                },
                                {
                                  "name": "dataEnd",
                                  "nativeSrc": "4053:7:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "4053:7:1"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_string_memory_ptr",
                                "nativeSrc": "3998:30:1",
                                "nodeType": "YulIdentifier",
                                "src": "3998:30:1"
                              },
                              "nativeSrc": "3998:63:1",
                              "nodeType": "YulFunctionCall",
                              "src": "3998:63:1"
                            },
                            "variableNames": [
                              {
                                "name": "value1",
                                "nativeSrc": "3988:6:1",
                                "nodeType": "YulIdentifier",
                                "src": "3988:6:1"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_string_memory_ptrt_string_memory_ptr",
                  "nativeSrc": "3244:834:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "3309:9:1",
                      "nodeType": "YulTypedName",
                      "src": "3309:9:1",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nativeSrc": "3320:7:1",
                      "nodeType": "YulTypedName",
                      "src": "3320:7:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nativeSrc": "3332:6:1",
                      "nodeType": "YulTypedName",
                      "src": "3332:6:1",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nativeSrc": "3340:6:1",
                      "nodeType": "YulTypedName",
                      "src": "3340:6:1",
                      "type": ""
                    }
                  ],
                  "src": "3244:834:1"
                },
                {
                  "body": {
                    "nativeSrc": "4180:73:1",
                    "nodeType": "YulBlock",
                    "src": "4180:73:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "4197:3:1",
                              "nodeType": "YulIdentifier",
                              "src": "4197:3:1"
                            },
                            {
                              "name": "length",
                              "nativeSrc": "4202:6:1",
                              "nodeType": "YulIdentifier",
                              "src": "4202:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "4190:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "4190:6:1"
                          },
                          "nativeSrc": "4190:19:1",
                          "nodeType": "YulFunctionCall",
                          "src": "4190:19:1"
                        },
                        "nativeSrc": "4190:19:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "4190:19:1"
                      },
                      {
                        "nativeSrc": "4218:29:1",
                        "nodeType": "YulAssignment",
                        "src": "4218:29:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "4237:3:1",
                              "nodeType": "YulIdentifier",
                              "src": "4237:3:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "4242:4:1",
                              "nodeType": "YulLiteral",
                              "src": "4242:4:1",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "4233:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "4233:3:1"
                          },
                          "nativeSrc": "4233:14:1",
                          "nodeType": "YulFunctionCall",
                          "src": "4233:14:1"
                        },
                        "variableNames": [
                          {
                            "name": "updated_pos",
                            "nativeSrc": "4218:11:1",
                            "nodeType": "YulIdentifier",
                            "src": "4218:11:1"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                  "nativeSrc": "4084:169:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nativeSrc": "4152:3:1",
                      "nodeType": "YulTypedName",
                      "src": "4152:3:1",
                      "type": ""
                    },
                    {
                      "name": "length",
                      "nativeSrc": "4157:6:1",
                      "nodeType": "YulTypedName",
                      "src": "4157:6:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "updated_pos",
                      "nativeSrc": "4168:11:1",
                      "nodeType": "YulTypedName",
                      "src": "4168:11:1",
                      "type": ""
                    }
                  ],
                  "src": "4084:169:1"
                },
                {
                  "body": {
                    "nativeSrc": "4365:120:1",
                    "nodeType": "YulBlock",
                    "src": "4365:120:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nativeSrc": "4387:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "4387:6:1"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "4395:1:1",
                                  "nodeType": "YulLiteral",
                                  "src": "4395:1:1",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "4383:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "4383:3:1"
                              },
                              "nativeSrc": "4383:14:1",
                              "nodeType": "YulFunctionCall",
                              "src": "4383:14:1"
                            },
                            {
                              "hexValue": "596f7520646f6e277420686176652061636365737320746f207468697320646f",
                              "kind": "string",
                              "nativeSrc": "4399:34:1",
                              "nodeType": "YulLiteral",
                              "src": "4399:34:1",
                              "type": "",
                              "value": "You don't have access to this do"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "4376:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "4376:6:1"
                          },
                          "nativeSrc": "4376:58:1",
                          "nodeType": "YulFunctionCall",
                          "src": "4376:58:1"
                        },
                        "nativeSrc": "4376:58:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "4376:58:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nativeSrc": "4455:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "4455:6:1"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "4463:2:1",
                                  "nodeType": "YulLiteral",
                                  "src": "4463:2:1",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "4451:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "4451:3:1"
                              },
                              "nativeSrc": "4451:15:1",
                              "nodeType": "YulFunctionCall",
                              "src": "4451:15:1"
                            },
                            {
                              "hexValue": "63756d656e742e",
                              "kind": "string",
                              "nativeSrc": "4468:9:1",
                              "nodeType": "YulLiteral",
                              "src": "4468:9:1",
                              "type": "",
                              "value": "cument."
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "4444:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "4444:6:1"
                          },
                          "nativeSrc": "4444:34:1",
                          "nodeType": "YulFunctionCall",
                          "src": "4444:34:1"
                        },
                        "nativeSrc": "4444:34:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "4444:34:1"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_a890b16c2a18fa3d10cacf255876e837a1802c464d99c6ab36c6171472e3d562",
                  "nativeSrc": "4259:226:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nativeSrc": "4357:6:1",
                      "nodeType": "YulTypedName",
                      "src": "4357:6:1",
                      "type": ""
                    }
                  ],
                  "src": "4259:226:1"
                },
                {
                  "body": {
                    "nativeSrc": "4637:220:1",
                    "nodeType": "YulBlock",
                    "src": "4637:220:1",
                    "statements": [
                      {
                        "nativeSrc": "4647:74:1",
                        "nodeType": "YulAssignment",
                        "src": "4647:74:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "4713:3:1",
                              "nodeType": "YulIdentifier",
                              "src": "4713:3:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "4718:2:1",
                              "nodeType": "YulLiteral",
                              "src": "4718:2:1",
                              "type": "",
                              "value": "39"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nativeSrc": "4654:58:1",
                            "nodeType": "YulIdentifier",
                            "src": "4654:58:1"
                          },
                          "nativeSrc": "4654:67:1",
                          "nodeType": "YulFunctionCall",
                          "src": "4654:67:1"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nativeSrc": "4647:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "4647:3:1"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "4819:3:1",
                              "nodeType": "YulIdentifier",
                              "src": "4819:3:1"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_a890b16c2a18fa3d10cacf255876e837a1802c464d99c6ab36c6171472e3d562",
                            "nativeSrc": "4730:88:1",
                            "nodeType": "YulIdentifier",
                            "src": "4730:88:1"
                          },
                          "nativeSrc": "4730:93:1",
                          "nodeType": "YulFunctionCall",
                          "src": "4730:93:1"
                        },
                        "nativeSrc": "4730:93:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "4730:93:1"
                      },
                      {
                        "nativeSrc": "4832:19:1",
                        "nodeType": "YulAssignment",
                        "src": "4832:19:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "4843:3:1",
                              "nodeType": "YulIdentifier",
                              "src": "4843:3:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "4848:2:1",
                              "nodeType": "YulLiteral",
                              "src": "4848:2:1",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "4839:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "4839:3:1"
                          },
                          "nativeSrc": "4839:12:1",
                          "nodeType": "YulFunctionCall",
                          "src": "4839:12:1"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nativeSrc": "4832:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "4832:3:1"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_a890b16c2a18fa3d10cacf255876e837a1802c464d99c6ab36c6171472e3d562_to_t_string_memory_ptr_fromStack",
                  "nativeSrc": "4491:366:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nativeSrc": "4625:3:1",
                      "nodeType": "YulTypedName",
                      "src": "4625:3:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nativeSrc": "4633:3:1",
                      "nodeType": "YulTypedName",
                      "src": "4633:3:1",
                      "type": ""
                    }
                  ],
                  "src": "4491:366:1"
                },
                {
                  "body": {
                    "nativeSrc": "5034:248:1",
                    "nodeType": "YulBlock",
                    "src": "5034:248:1",
                    "statements": [
                      {
                        "nativeSrc": "5044:26:1",
                        "nodeType": "YulAssignment",
                        "src": "5044:26:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "5056:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "5056:9:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "5067:2:1",
                              "nodeType": "YulLiteral",
                              "src": "5067:2:1",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "5052:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "5052:3:1"
                          },
                          "nativeSrc": "5052:18:1",
                          "nodeType": "YulFunctionCall",
                          "src": "5052:18:1"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "5044:4:1",
                            "nodeType": "YulIdentifier",
                            "src": "5044:4:1"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "5091:9:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "5091:9:1"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "5102:1:1",
                                  "nodeType": "YulLiteral",
                                  "src": "5102:1:1",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "5087:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "5087:3:1"
                              },
                              "nativeSrc": "5087:17:1",
                              "nodeType": "YulFunctionCall",
                              "src": "5087:17:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nativeSrc": "5110:4:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "5110:4:1"
                                },
                                {
                                  "name": "headStart",
                                  "nativeSrc": "5116:9:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "5116:9:1"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "5106:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "5106:3:1"
                              },
                              "nativeSrc": "5106:20:1",
                              "nodeType": "YulFunctionCall",
                              "src": "5106:20:1"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "5080:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "5080:6:1"
                          },
                          "nativeSrc": "5080:47:1",
                          "nodeType": "YulFunctionCall",
                          "src": "5080:47:1"
                        },
                        "nativeSrc": "5080:47:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "5080:47:1"
                      },
                      {
                        "nativeSrc": "5136:139:1",
                        "nodeType": "YulAssignment",
                        "src": "5136:139:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "5270:4:1",
                              "nodeType": "YulIdentifier",
                              "src": "5270:4:1"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_a890b16c2a18fa3d10cacf255876e837a1802c464d99c6ab36c6171472e3d562_to_t_string_memory_ptr_fromStack",
                            "nativeSrc": "5144:124:1",
                            "nodeType": "YulIdentifier",
                            "src": "5144:124:1"
                          },
                          "nativeSrc": "5144:131:1",
                          "nodeType": "YulFunctionCall",
                          "src": "5144:131:1"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "5136:4:1",
                            "nodeType": "YulIdentifier",
                            "src": "5136:4:1"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_a890b16c2a18fa3d10cacf255876e837a1802c464d99c6ab36c6171472e3d562__to_t_string_memory_ptr__fromStack_reversed",
                  "nativeSrc": "4863:419:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "5014:9:1",
                      "nodeType": "YulTypedName",
                      "src": "5014:9:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nativeSrc": "5029:4:1",
                      "nodeType": "YulTypedName",
                      "src": "5029:4:1",
                      "type": ""
                    }
                  ],
                  "src": "4863:419:1"
                },
                {
                  "body": {
                    "nativeSrc": "5394:116:1",
                    "nodeType": "YulBlock",
                    "src": "5394:116:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nativeSrc": "5416:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "5416:6:1"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "5424:1:1",
                                  "nodeType": "YulLiteral",
                                  "src": "5424:1:1",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "5412:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "5412:3:1"
                              },
                              "nativeSrc": "5412:14:1",
                              "nodeType": "YulFunctionCall",
                              "src": "5412:14:1"
                            },
                            {
                              "hexValue": "4f6e6c7920636c69656e74732063616e20616464206e657720646f63756d656e",
                              "kind": "string",
                              "nativeSrc": "5428:34:1",
                              "nodeType": "YulLiteral",
                              "src": "5428:34:1",
                              "type": "",
                              "value": "Only clients can add new documen"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "5405:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "5405:6:1"
                          },
                          "nativeSrc": "5405:58:1",
                          "nodeType": "YulFunctionCall",
                          "src": "5405:58:1"
                        },
                        "nativeSrc": "5405:58:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "5405:58:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nativeSrc": "5484:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "5484:6:1"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "5492:2:1",
                                  "nodeType": "YulLiteral",
                                  "src": "5492:2:1",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "5480:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "5480:3:1"
                              },
                              "nativeSrc": "5480:15:1",
                              "nodeType": "YulFunctionCall",
                              "src": "5480:15:1"
                            },
                            {
                              "hexValue": "74732e",
                              "kind": "string",
                              "nativeSrc": "5497:5:1",
                              "nodeType": "YulLiteral",
                              "src": "5497:5:1",
                              "type": "",
                              "value": "ts."
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "5473:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "5473:6:1"
                          },
                          "nativeSrc": "5473:30:1",
                          "nodeType": "YulFunctionCall",
                          "src": "5473:30:1"
                        },
                        "nativeSrc": "5473:30:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "5473:30:1"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_497d88e5c7b585599088fe405b13cdfdb2967054a4beb9ffa9284bd77bfade2c",
                  "nativeSrc": "5288:222:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nativeSrc": "5386:6:1",
                      "nodeType": "YulTypedName",
                      "src": "5386:6:1",
                      "type": ""
                    }
                  ],
                  "src": "5288:222:1"
                },
                {
                  "body": {
                    "nativeSrc": "5662:220:1",
                    "nodeType": "YulBlock",
                    "src": "5662:220:1",
                    "statements": [
                      {
                        "nativeSrc": "5672:74:1",
                        "nodeType": "YulAssignment",
                        "src": "5672:74:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "5738:3:1",
                              "nodeType": "YulIdentifier",
                              "src": "5738:3:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "5743:2:1",
                              "nodeType": "YulLiteral",
                              "src": "5743:2:1",
                              "type": "",
                              "value": "35"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nativeSrc": "5679:58:1",
                            "nodeType": "YulIdentifier",
                            "src": "5679:58:1"
                          },
                          "nativeSrc": "5679:67:1",
                          "nodeType": "YulFunctionCall",
                          "src": "5679:67:1"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nativeSrc": "5672:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "5672:3:1"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "5844:3:1",
                              "nodeType": "YulIdentifier",
                              "src": "5844:3:1"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_497d88e5c7b585599088fe405b13cdfdb2967054a4beb9ffa9284bd77bfade2c",
                            "nativeSrc": "5755:88:1",
                            "nodeType": "YulIdentifier",
                            "src": "5755:88:1"
                          },
                          "nativeSrc": "5755:93:1",
                          "nodeType": "YulFunctionCall",
                          "src": "5755:93:1"
                        },
                        "nativeSrc": "5755:93:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "5755:93:1"
                      },
                      {
                        "nativeSrc": "5857:19:1",
                        "nodeType": "YulAssignment",
                        "src": "5857:19:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "5868:3:1",
                              "nodeType": "YulIdentifier",
                              "src": "5868:3:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "5873:2:1",
                              "nodeType": "YulLiteral",
                              "src": "5873:2:1",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "5864:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "5864:3:1"
                          },
                          "nativeSrc": "5864:12:1",
                          "nodeType": "YulFunctionCall",
                          "src": "5864:12:1"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nativeSrc": "5857:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "5857:3:1"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_497d88e5c7b585599088fe405b13cdfdb2967054a4beb9ffa9284bd77bfade2c_to_t_string_memory_ptr_fromStack",
                  "nativeSrc": "5516:366:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nativeSrc": "5650:3:1",
                      "nodeType": "YulTypedName",
                      "src": "5650:3:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nativeSrc": "5658:3:1",
                      "nodeType": "YulTypedName",
                      "src": "5658:3:1",
                      "type": ""
                    }
                  ],
                  "src": "5516:366:1"
                },
                {
                  "body": {
                    "nativeSrc": "6059:248:1",
                    "nodeType": "YulBlock",
                    "src": "6059:248:1",
                    "statements": [
                      {
                        "nativeSrc": "6069:26:1",
                        "nodeType": "YulAssignment",
                        "src": "6069:26:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "6081:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "6081:9:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "6092:2:1",
                              "nodeType": "YulLiteral",
                              "src": "6092:2:1",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "6077:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "6077:3:1"
                          },
                          "nativeSrc": "6077:18:1",
                          "nodeType": "YulFunctionCall",
                          "src": "6077:18:1"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "6069:4:1",
                            "nodeType": "YulIdentifier",
                            "src": "6069:4:1"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "6116:9:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "6116:9:1"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "6127:1:1",
                                  "nodeType": "YulLiteral",
                                  "src": "6127:1:1",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "6112:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "6112:3:1"
                              },
                              "nativeSrc": "6112:17:1",
                              "nodeType": "YulFunctionCall",
                              "src": "6112:17:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nativeSrc": "6135:4:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "6135:4:1"
                                },
                                {
                                  "name": "headStart",
                                  "nativeSrc": "6141:9:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "6141:9:1"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "6131:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "6131:3:1"
                              },
                              "nativeSrc": "6131:20:1",
                              "nodeType": "YulFunctionCall",
                              "src": "6131:20:1"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "6105:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "6105:6:1"
                          },
                          "nativeSrc": "6105:47:1",
                          "nodeType": "YulFunctionCall",
                          "src": "6105:47:1"
                        },
                        "nativeSrc": "6105:47:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "6105:47:1"
                      },
                      {
                        "nativeSrc": "6161:139:1",
                        "nodeType": "YulAssignment",
                        "src": "6161:139:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "6295:4:1",
                              "nodeType": "YulIdentifier",
                              "src": "6295:4:1"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_497d88e5c7b585599088fe405b13cdfdb2967054a4beb9ffa9284bd77bfade2c_to_t_string_memory_ptr_fromStack",
                            "nativeSrc": "6169:124:1",
                            "nodeType": "YulIdentifier",
                            "src": "6169:124:1"
                          },
                          "nativeSrc": "6169:131:1",
                          "nodeType": "YulFunctionCall",
                          "src": "6169:131:1"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "6161:4:1",
                            "nodeType": "YulIdentifier",
                            "src": "6161:4:1"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_497d88e5c7b585599088fe405b13cdfdb2967054a4beb9ffa9284bd77bfade2c__to_t_string_memory_ptr__fromStack_reversed",
                  "nativeSrc": "5888:419:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "6039:9:1",
                      "nodeType": "YulTypedName",
                      "src": "6039:9:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nativeSrc": "6054:4:1",
                      "nodeType": "YulTypedName",
                      "src": "6054:4:1",
                      "type": ""
                    }
                  ],
                  "src": "5888:419:1"
                },
                {
                  "body": {
                    "nativeSrc": "6419:114:1",
                    "nodeType": "YulBlock",
                    "src": "6419:114:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nativeSrc": "6441:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "6441:6:1"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "6449:1:1",
                                  "nodeType": "YulLiteral",
                                  "src": "6449:1:1",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "6437:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "6437:3:1"
                              },
                              "nativeSrc": "6437:14:1",
                              "nodeType": "YulFunctionCall",
                              "src": "6437:14:1"
                            },
                            {
                              "hexValue": "4f6e6c79206c6177796572732063616e20736861726520646f63756d656e7473",
                              "kind": "string",
                              "nativeSrc": "6453:34:1",
                              "nodeType": "YulLiteral",
                              "src": "6453:34:1",
                              "type": "",
                              "value": "Only lawyers can share documents"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "6430:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "6430:6:1"
                          },
                          "nativeSrc": "6430:58:1",
                          "nodeType": "YulFunctionCall",
                          "src": "6430:58:1"
                        },
                        "nativeSrc": "6430:58:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "6430:58:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nativeSrc": "6509:6:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "6509:6:1"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "6517:2:1",
                                  "nodeType": "YulLiteral",
                                  "src": "6517:2:1",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "6505:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "6505:3:1"
                              },
                              "nativeSrc": "6505:15:1",
                              "nodeType": "YulFunctionCall",
                              "src": "6505:15:1"
                            },
                            {
                              "hexValue": "2e",
                              "kind": "string",
                              "nativeSrc": "6522:3:1",
                              "nodeType": "YulLiteral",
                              "src": "6522:3:1",
                              "type": "",
                              "value": "."
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "6498:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "6498:6:1"
                          },
                          "nativeSrc": "6498:28:1",
                          "nodeType": "YulFunctionCall",
                          "src": "6498:28:1"
                        },
                        "nativeSrc": "6498:28:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "6498:28:1"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_45a69780e7461f8bc7b85a2b7c8e3d7754a80c967228ae81102a42628cb855d0",
                  "nativeSrc": "6313:220:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nativeSrc": "6411:6:1",
                      "nodeType": "YulTypedName",
                      "src": "6411:6:1",
                      "type": ""
                    }
                  ],
                  "src": "6313:220:1"
                },
                {
                  "body": {
                    "nativeSrc": "6685:220:1",
                    "nodeType": "YulBlock",
                    "src": "6685:220:1",
                    "statements": [
                      {
                        "nativeSrc": "6695:74:1",
                        "nodeType": "YulAssignment",
                        "src": "6695:74:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "6761:3:1",
                              "nodeType": "YulIdentifier",
                              "src": "6761:3:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "6766:2:1",
                              "nodeType": "YulLiteral",
                              "src": "6766:2:1",
                              "type": "",
                              "value": "33"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nativeSrc": "6702:58:1",
                            "nodeType": "YulIdentifier",
                            "src": "6702:58:1"
                          },
                          "nativeSrc": "6702:67:1",
                          "nodeType": "YulFunctionCall",
                          "src": "6702:67:1"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nativeSrc": "6695:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "6695:3:1"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "6867:3:1",
                              "nodeType": "YulIdentifier",
                              "src": "6867:3:1"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_45a69780e7461f8bc7b85a2b7c8e3d7754a80c967228ae81102a42628cb855d0",
                            "nativeSrc": "6778:88:1",
                            "nodeType": "YulIdentifier",
                            "src": "6778:88:1"
                          },
                          "nativeSrc": "6778:93:1",
                          "nodeType": "YulFunctionCall",
                          "src": "6778:93:1"
                        },
                        "nativeSrc": "6778:93:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "6778:93:1"
                      },
                      {
                        "nativeSrc": "6880:19:1",
                        "nodeType": "YulAssignment",
                        "src": "6880:19:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "6891:3:1",
                              "nodeType": "YulIdentifier",
                              "src": "6891:3:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "6896:2:1",
                              "nodeType": "YulLiteral",
                              "src": "6896:2:1",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "6887:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "6887:3:1"
                          },
                          "nativeSrc": "6887:12:1",
                          "nodeType": "YulFunctionCall",
                          "src": "6887:12:1"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nativeSrc": "6880:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "6880:3:1"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_45a69780e7461f8bc7b85a2b7c8e3d7754a80c967228ae81102a42628cb855d0_to_t_string_memory_ptr_fromStack",
                  "nativeSrc": "6539:366:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nativeSrc": "6673:3:1",
                      "nodeType": "YulTypedName",
                      "src": "6673:3:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nativeSrc": "6681:3:1",
                      "nodeType": "YulTypedName",
                      "src": "6681:3:1",
                      "type": ""
                    }
                  ],
                  "src": "6539:366:1"
                },
                {
                  "body": {
                    "nativeSrc": "7082:248:1",
                    "nodeType": "YulBlock",
                    "src": "7082:248:1",
                    "statements": [
                      {
                        "nativeSrc": "7092:26:1",
                        "nodeType": "YulAssignment",
                        "src": "7092:26:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "7104:9:1",
                              "nodeType": "YulIdentifier",
                              "src": "7104:9:1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "7115:2:1",
                              "nodeType": "YulLiteral",
                              "src": "7115:2:1",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "7100:3:1",
                            "nodeType": "YulIdentifier",
                            "src": "7100:3:1"
                          },
                          "nativeSrc": "7100:18:1",
                          "nodeType": "YulFunctionCall",
                          "src": "7100:18:1"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "7092:4:1",
                            "nodeType": "YulIdentifier",
                            "src": "7092:4:1"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "7139:9:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "7139:9:1"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "7150:1:1",
                                  "nodeType": "YulLiteral",
                                  "src": "7150:1:1",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "7135:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "7135:3:1"
                              },
                              "nativeSrc": "7135:17:1",
                              "nodeType": "YulFunctionCall",
                              "src": "7135:17:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nativeSrc": "7158:4:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "7158:4:1"
                                },
                                {
                                  "name": "headStart",
                                  "nativeSrc": "7164:9:1",
                                  "nodeType": "YulIdentifier",
                                  "src": "7164:9:1"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "7154:3:1",
                                "nodeType": "YulIdentifier",
                                "src": "7154:3:1"
                              },
                              "nativeSrc": "7154:20:1",
                              "nodeType": "YulFunctionCall",
                              "src": "7154:20:1"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "7128:6:1",
                            "nodeType": "YulIdentifier",
                            "src": "7128:6:1"
                          },
                          "nativeSrc": "7128:47:1",
                          "nodeType": "YulFunctionCall",
                          "src": "7128:47:1"
                        },
                        "nativeSrc": "7128:47:1",
                        "nodeType": "YulExpressionStatement",
                        "src": "7128:47:1"
                      },
                      {
                        "nativeSrc": "7184:139:1",
                        "nodeType": "YulAssignment",
                        "src": "7184:139:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "7318:4:1",
                              "nodeType": "YulIdentifier",
                              "src": "7318:4:1"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_45a69780e7461f8bc7b85a2b7c8e3d7754a80c967228ae81102a42628cb855d0_to_t_string_memory_ptr_fromStack",
                            "nativeSrc": "7192:124:1",
                            "nodeType": "YulIdentifier",
                            "src": "7192:124:1"
                          },
                          "nativeSrc": "7192:131:1",
                          "nodeType": "YulFunctionCall",
                          "src": "7192:131:1"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "7184:4:1",
                            "nodeType": "YulIdentifier",
                            "src": "7184:4:1"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_45a69780e7461f8bc7b85a2b7c8e3d7754a80c967228ae81102a42628cb855d0__to_t_string_memory_ptr__fromStack_reversed",
                  "nativeSrc": "6911:419:1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "7062:9:1",
                      "nodeType": "YulTypedName",
                      "src": "7062:9:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nativeSrc": "7077:4:1",
                      "nodeType": "YulTypedName",
                      "src": "7077:4:1",
                      "type": ""
                    }
                  ],
                  "src": "6911:419:1"
                }
              ]
            },
            "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_calldata_to_memory_with_cleanup(src, dst, length) {\n        calldatacopy(dst, src, length)\n        mstore(add(dst, length), 0)\n    }\n\n    function abi_decode_available_length_t_string_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory_with_cleanup(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_string_memory_ptrt_string_memory_ptr(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := calldataload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value0 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value1 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_a890b16c2a18fa3d10cacf255876e837a1802c464d99c6ab36c6171472e3d562(memPtr) {\n\n        mstore(add(memPtr, 0), \"You don't have access to this do\")\n\n        mstore(add(memPtr, 32), \"cument.\")\n\n    }\n\n    function abi_encode_t_stringliteral_a890b16c2a18fa3d10cacf255876e837a1802c464d99c6ab36c6171472e3d562_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 39)\n        store_literal_in_memory_a890b16c2a18fa3d10cacf255876e837a1802c464d99c6ab36c6171472e3d562(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_a890b16c2a18fa3d10cacf255876e837a1802c464d99c6ab36c6171472e3d562__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_a890b16c2a18fa3d10cacf255876e837a1802c464d99c6ab36c6171472e3d562_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_497d88e5c7b585599088fe405b13cdfdb2967054a4beb9ffa9284bd77bfade2c(memPtr) {\n\n        mstore(add(memPtr, 0), \"Only clients can add new documen\")\n\n        mstore(add(memPtr, 32), \"ts.\")\n\n    }\n\n    function abi_encode_t_stringliteral_497d88e5c7b585599088fe405b13cdfdb2967054a4beb9ffa9284bd77bfade2c_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 35)\n        store_literal_in_memory_497d88e5c7b585599088fe405b13cdfdb2967054a4beb9ffa9284bd77bfade2c(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_497d88e5c7b585599088fe405b13cdfdb2967054a4beb9ffa9284bd77bfade2c__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_497d88e5c7b585599088fe405b13cdfdb2967054a4beb9ffa9284bd77bfade2c_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_45a69780e7461f8bc7b85a2b7c8e3d7754a80c967228ae81102a42628cb855d0(memPtr) {\n\n        mstore(add(memPtr, 0), \"Only lawyers can share documents\")\n\n        mstore(add(memPtr, 32), \".\")\n\n    }\n\n    function abi_encode_t_stringliteral_45a69780e7461f8bc7b85a2b7c8e3d7754a80c967228ae81102a42628cb855d0_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 33)\n        store_literal_in_memory_45a69780e7461f8bc7b85a2b7c8e3d7754a80c967228ae81102a42628cb855d0(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_45a69780e7461f8bc7b85a2b7c8e3d7754a80c967228ae81102a42628cb855d0__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_45a69780e7461f8bc7b85a2b7c8e3d7754a80c967228ae81102a42628cb855d0_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n}\n",
            "id": 1,
            "language": "Yul",
            "name": "#utility.yul"
          }
        ],
        "sourceMap": "60:1301:0:-:0;;;400:215;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;519:4;494:7;:22;502:13;494:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;561:4;534:8;:24;543:14;534:24;;;;;;;;;;;;;;;;:31;;;;;;;;;;;;;;;;;;603:4;576:8;:24;585:14;576:24;;;;;;;;;;;;;;;;:31;;;;;;;;;;;;;;;;;;400:215;;;60:1301;;88:117:1;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:122::-;641:24;659:5;641:24;:::i;:::-;634:5;631:35;621:63;;680:1;677;670:12;621:63;568:122;:::o;696:143::-;753:5;784:6;778:13;769:22;;800:33;827:5;800:33;:::i;:::-;696:143;;;;:::o;845:663::-;933:6;941;949;998:2;986:9;977:7;973:23;969:32;966:119;;;1004:79;;:::i;:::-;966:119;1124:1;1149:64;1205:7;1196:6;1185:9;1181:22;1149:64;:::i;:::-;1139:74;;1095:128;1262:2;1288:64;1344:7;1335:6;1324:9;1320:22;1288:64;:::i;:::-;1278:74;;1233:129;1401:2;1427:64;1483:7;1474:6;1463:9;1459:22;1427:64;:::i;:::-;1417:74;;1372:129;845:663;;;;;:::o;60:1301:0:-;;;;;;;",
        "deployedSourceMap": "60:1301:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;847:240;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;623:216;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1095:183;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;847:240;918:8;:20;927:10;918:20;;;;;;;;;;;;;;;;;;;;;;;;;:43;;;;942:7;:19;950:10;942:19;;;;;;;;;;;;;;;;;;;;;;;;;918:43;:67;;;;965:8;:20;974:10;965:20;;;;;;;;;;;;;;;;;;;;;;;;;918:67;910:119;;;;;;;;;;;;:::i;:::-;;;;;;;;;847:240;:::o;623:216::-;719:8;:20;728:10;719:20;;;;;;;;;;;;;;;;;;;;;;;;;711:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;623:216;;:::o;1095:183::-;1162:8;:20;1171:10;1162:20;;;;;;;;;;;;;;;;;;;;;;;;;1154:66;;;;;;;;;;;;:::i;:::-;;;;;;;;;1095:183;:::o;7:75:1:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:77;371:7;400:5;389:16;;334:77;;;:::o;417:122::-;490:24;508:5;490:24;:::i;:::-;483:5;480:35;470:63;;529:1;526;519:12;470:63;417:122;:::o;545:139::-;591:5;629:6;616:20;607:29;;645:33;672:5;645:33;:::i;:::-;545:139;;;;:::o;690:329::-;749:6;798:2;786:9;777:7;773:23;769:32;766:119;;;804:79;;:::i;:::-;766:119;924:1;949:53;994:7;985:6;974:9;970:22;949:53;:::i;:::-;939:63;;895:117;690:329;;;;:::o;1025:117::-;1134:1;1131;1124:12;1148:117;1257:1;1254;1247:12;1271:102;1312:6;1363:2;1359:7;1354:2;1347:5;1343:14;1339:28;1329:38;;1271:102;;;:::o;1379:180::-;1427:77;1424:1;1417:88;1524:4;1521:1;1514:15;1548:4;1545:1;1538:15;1565:281;1648:27;1670:4;1648:27;:::i;:::-;1640:6;1636:40;1778:6;1766:10;1763:22;1742:18;1730:10;1727:34;1724:62;1721:88;;;1789:18;;:::i;:::-;1721:88;1829:10;1825:2;1818:22;1608:238;1565:281;;:::o;1852:129::-;1886:6;1913:20;;:::i;:::-;1903:30;;1942:33;1970:4;1962:6;1942:33;:::i;:::-;1852:129;;;:::o;1987:308::-;2049:4;2139:18;2131:6;2128:30;2125:56;;;2161:18;;:::i;:::-;2125:56;2199:29;2221:6;2199:29;:::i;:::-;2191:37;;2283:4;2277;2273:15;2265:23;;1987:308;;;:::o;2301:146::-;2398:6;2393:3;2388;2375:30;2439:1;2430:6;2425:3;2421:16;2414:27;2301:146;;;:::o;2453:425::-;2531:5;2556:66;2572:49;2614:6;2572:49;:::i;:::-;2556:66;:::i;:::-;2547:75;;2645:6;2638:5;2631:21;2683:4;2676:5;2672:16;2721:3;2712:6;2707:3;2703:16;2700:25;2697:112;;;2728:79;;:::i;:::-;2697:112;2818:54;2865:6;2860:3;2855;2818:54;:::i;:::-;2537:341;2453:425;;;;;:::o;2898:340::-;2954:5;3003:3;2996:4;2988:6;2984:17;2980:27;2970:122;;3011:79;;:::i;:::-;2970:122;3128:6;3115:20;3153:79;3228:3;3220:6;3213:4;3205:6;3201:17;3153:79;:::i;:::-;3144:88;;2960:278;2898:340;;;;:::o;3244:834::-;3332:6;3340;3389:2;3377:9;3368:7;3364:23;3360:32;3357:119;;;3395:79;;:::i;:::-;3357:119;3543:1;3532:9;3528:17;3515:31;3573:18;3565:6;3562:30;3559:117;;;3595:79;;:::i;:::-;3559:117;3700:63;3755:7;3746:6;3735:9;3731:22;3700:63;:::i;:::-;3690:73;;3486:287;3840:2;3829:9;3825:18;3812:32;3871:18;3863:6;3860:30;3857:117;;;3893:79;;:::i;:::-;3857:117;3998:63;4053:7;4044:6;4033:9;4029:22;3998:63;:::i;:::-;3988:73;;3783:288;3244:834;;;;;:::o;4084:169::-;4168:11;4202:6;4197:3;4190:19;4242:4;4237:3;4233:14;4218:29;;4084:169;;;;:::o;4259:226::-;4399:34;4395:1;4387:6;4383:14;4376:58;4468:9;4463:2;4455:6;4451:15;4444:34;4259:226;:::o;4491:366::-;4633:3;4654:67;4718:2;4713:3;4654:67;:::i;:::-;4647:74;;4730:93;4819:3;4730:93;:::i;:::-;4848:2;4843:3;4839:12;4832:19;;4491:366;;;:::o;4863:419::-;5029:4;5067:2;5056:9;5052:18;5044:26;;5116:9;5110:4;5106:20;5102:1;5091:9;5087:17;5080:47;5144:131;5270:4;5144:131;:::i;:::-;5136:139;;4863:419;;;:::o;5288:222::-;5428:34;5424:1;5416:6;5412:14;5405:58;5497:5;5492:2;5484:6;5480:15;5473:30;5288:222;:::o;5516:366::-;5658:3;5679:67;5743:2;5738:3;5679:67;:::i;:::-;5672:74;;5755:93;5844:3;5755:93;:::i;:::-;5873:2;5868:3;5864:12;5857:19;;5516:366;;;:::o;5888:419::-;6054:4;6092:2;6081:9;6077:18;6069:26;;6141:9;6135:4;6131:20;6127:1;6116:9;6112:17;6105:47;6169:131;6295:4;6169:131;:::i;:::-;6161:139;;5888:419;;;:::o;6313:220::-;6453:34;6449:1;6441:6;6437:14;6430:58;6522:3;6517:2;6509:6;6505:15;6498:28;6313:220;:::o;6539:366::-;6681:3;6702:67;6766:2;6761:3;6702:67;:::i;:::-;6695:74;;6778:93;6867:3;6778:93;:::i;:::-;6896:2;6891:3;6887:12;6880:19;;6539:366;;;:::o;6911:419::-;7077:4;7115:2;7104:9;7100:18;7092:26;;7164:9;7158:4;7154:20;7150:1;7139:9;7135:17;7128:47;7192:131;7318:4;7192:131;:::i;:::-;7184:139;;6911:419;;;:::o",
        "source": "// SPDX-License-Identifier: MIT\r\npragma solidity ^0.8.0;\r\n\r\ncontract LegalRecords {\r\n    struct Document {\r\n        string content;\r\n        string ipfsHash;\r\n        bool isShared;\r\n    }\r\n\r\n    mapping(address => Document[]) private userDocuments;\r\n    mapping(address => bool) private isJudge;\r\n    mapping(address => bool) private isLawyer;\r\n    mapping(address => bool) private isClient;\r\n\r\n    constructor(address _judgeAddress, address _lawyerAddress, address _clientAddress) {\r\n        isJudge[_judgeAddress] = true;\r\n        isLawyer[_lawyerAddress] = true;\r\n        isClient[_clientAddress] = true;\r\n    }\r\n\r\n    function addDocument(string memory _content, string memory _ipfsHash) public {\r\n        require(isClient[msg.sender], \"Only clients can add new documents.\");\r\n        // Add your logic for adding new documents\r\n    }\r\n\r\n    function viewDocument(uint _documentId) public view {\r\n        require(isClient[msg.sender] || isJudge[msg.sender] || isLawyer[msg.sender], \"You don't have access to this document.\");\r\n        // Add your logic for viewing a document\r\n    }\r\n\r\n    function shareDocument(uint _documentId) public {\r\n        require(isLawyer[msg.sender], \"Only lawyers can share documents.\");\r\n        // Add your logic for sharing a document\r\n    }\r\n\r\n    // Add more functions for uploading, updating, and other functionalities\r\n}\r\n",
        "sourcePath": "C:\\Users\\Harshini\\OneDrive\\Desktop\\E-vault\\project\\e-vault\\contracts\\LegalRecords.sol",
        "ast": {
          "absolutePath": "project:/contracts/LegalRecords.sol",
          "exportedSymbols": {
            "LegalRecords": [
              109
            ]
          },
          "id": 110,
          "license": "MIT",
          "nodeType": "SourceUnit",
          "nodes": [
            {
              "id": 1,
              "literals": [
                "solidity",
                "^",
                "0.8",
                ".0"
              ],
              "nodeType": "PragmaDirective",
              "src": "33:23:0"
            },
            {
              "abstract": false,
              "baseContracts": [],
              "canonicalName": "LegalRecords",
              "contractDependencies": [],
              "contractKind": "contract",
              "fullyImplemented": true,
              "id": 109,
              "linearizedBaseContracts": [
                109
              ],
              "name": "LegalRecords",
              "nameLocation": "69:12:0",
              "nodeType": "ContractDefinition",
              "nodes": [
                {
                  "canonicalName": "LegalRecords.Document",
                  "id": 8,
                  "members": [
                    {
                      "constant": false,
                      "id": 3,
                      "mutability": "mutable",
                      "name": "content",
                      "nameLocation": "123:7:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 8,
                      "src": "116:14:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 2,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "116:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 5,
                      "mutability": "mutable",
                      "name": "ipfsHash",
                      "nameLocation": "148:8:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 8,
                      "src": "141:15:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 4,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "141:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 7,
                      "mutability": "mutable",
                      "name": "isShared",
                      "nameLocation": "172:8:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 8,
                      "src": "167:13:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 6,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "167:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "name": "Document",
                  "nameLocation": "96:8:0",
                  "nodeType": "StructDefinition",
                  "scope": 109,
                  "src": "89:99:0",
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "id": 14,
                  "mutability": "mutable",
                  "name": "userDocuments",
                  "nameLocation": "235:13:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 109,
                  "src": "196:52:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Document_$8_storage_$dyn_storage_$",
                    "typeString": "mapping(address => struct LegalRecords.Document[])"
                  },
                  "typeName": {
                    "id": 13,
                    "keyName": "",
                    "keyNameLocation": "-1:-1:-1",
                    "keyType": {
                      "id": 9,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "204:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "196:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Document_$8_storage_$dyn_storage_$",
                      "typeString": "mapping(address => struct LegalRecords.Document[])"
                    },
                    "valueName": "",
                    "valueNameLocation": "-1:-1:-1",
                    "valueType": {
                      "baseType": {
                        "id": 11,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 10,
                          "name": "Document",
                          "nameLocations": [
                            "215:8:0"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 8,
                          "src": "215:8:0"
                        },
                        "referencedDeclaration": 8,
                        "src": "215:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Document_$8_storage_ptr",
                          "typeString": "struct LegalRecords.Document"
                        }
                      },
                      "id": 12,
                      "nodeType": "ArrayTypeName",
                      "src": "215:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_Document_$8_storage_$dyn_storage_ptr",
                        "typeString": "struct LegalRecords.Document[]"
                      }
                    }
                  },
                  "visibility": "private"
                },
                {
                  "constant": false,
                  "id": 18,
                  "mutability": "mutable",
                  "name": "isJudge",
                  "nameLocation": "288:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 109,
                  "src": "255:40:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                    "typeString": "mapping(address => bool)"
                  },
                  "typeName": {
                    "id": 17,
                    "keyName": "",
                    "keyNameLocation": "-1:-1:-1",
                    "keyType": {
                      "id": 15,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "263:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "255:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                      "typeString": "mapping(address => bool)"
                    },
                    "valueName": "",
                    "valueNameLocation": "-1:-1:-1",
                    "valueType": {
                      "id": 16,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "274:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    }
                  },
                  "visibility": "private"
                },
                {
                  "constant": false,
                  "id": 22,
                  "mutability": "mutable",
                  "name": "isLawyer",
                  "nameLocation": "335:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 109,
                  "src": "302:41:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                    "typeString": "mapping(address => bool)"
                  },
                  "typeName": {
                    "id": 21,
                    "keyName": "",
                    "keyNameLocation": "-1:-1:-1",
                    "keyType": {
                      "id": 19,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "310:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "302:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                      "typeString": "mapping(address => bool)"
                    },
                    "valueName": "",
                    "valueNameLocation": "-1:-1:-1",
                    "valueType": {
                      "id": 20,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "321:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    }
                  },
                  "visibility": "private"
                },
                {
                  "constant": false,
                  "id": 26,
                  "mutability": "mutable",
                  "name": "isClient",
                  "nameLocation": "383:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 109,
                  "src": "350:41:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                    "typeString": "mapping(address => bool)"
                  },
                  "typeName": {
                    "id": 25,
                    "keyName": "",
                    "keyNameLocation": "-1:-1:-1",
                    "keyType": {
                      "id": 23,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "358:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "350:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                      "typeString": "mapping(address => bool)"
                    },
                    "valueName": "",
                    "valueNameLocation": "-1:-1:-1",
                    "valueType": {
                      "id": 24,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "369:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    }
                  },
                  "visibility": "private"
                },
                {
                  "body": {
                    "id": 53,
                    "nodeType": "Block",
                    "src": "483:132:0",
                    "statements": [
                      {
                        "expression": {
                          "id": 39,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 35,
                              "name": "isJudge",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18,
                              "src": "494:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 37,
                            "indexExpression": {
                              "id": 36,
                              "name": "_judgeAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28,
                              "src": "502:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "494:22:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "74727565",
                            "id": 38,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "519:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "494:29:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 40,
                        "nodeType": "ExpressionStatement",
                        "src": "494:29:0"
                      },
                      {
                        "expression": {
                          "id": 45,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 41,
                              "name": "isLawyer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22,
                              "src": "534:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 43,
                            "indexExpression": {
                              "id": 42,
                              "name": "_lawyerAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 30,
                              "src": "543:14:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "534:24:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "74727565",
                            "id": 44,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "561:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "534:31:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 46,
                        "nodeType": "ExpressionStatement",
                        "src": "534:31:0"
                      },
                      {
                        "expression": {
                          "id": 51,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 47,
                              "name": "isClient",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26,
                              "src": "576:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 49,
                            "indexExpression": {
                              "id": 48,
                              "name": "_clientAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32,
                              "src": "585:14:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "576:24:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "74727565",
                            "id": 50,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "603:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "576:31:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 52,
                        "nodeType": "ExpressionStatement",
                        "src": "576:31:0"
                      }
                    ]
                  },
                  "id": 54,
                  "implemented": true,
                  "kind": "constructor",
                  "modifiers": [],
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 33,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 28,
                        "mutability": "mutable",
                        "name": "_judgeAddress",
                        "nameLocation": "420:13:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 54,
                        "src": "412:21:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 27,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "412:7:0",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 30,
                        "mutability": "mutable",
                        "name": "_lawyerAddress",
                        "nameLocation": "443:14:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 54,
                        "src": "435:22:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 29,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "435:7:0",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 32,
                        "mutability": "mutable",
                        "name": "_clientAddress",
                        "nameLocation": "467:14:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 54,
                        "src": "459:22:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 31,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "459:7:0",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "src": "411:71:0"
                  },
                  "returnParameters": {
                    "id": 34,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "483:0:0"
                  },
                  "scope": 109,
                  "src": "400:215:0",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 69,
                    "nodeType": "Block",
                    "src": "700:139:0",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "baseExpression": {
                                "id": 62,
                                "name": "isClient",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 26,
                                "src": "719:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                  "typeString": "mapping(address => bool)"
                                }
                              },
                              "id": 65,
                              "indexExpression": {
                                "expression": {
                                  "id": 63,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967281,
                                  "src": "728:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 64,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "732:6:0",
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "src": "728:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "719:20:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "hexValue": "4f6e6c7920636c69656e74732063616e20616464206e657720646f63756d656e74732e",
                              "id": 66,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "741:37:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_497d88e5c7b585599088fe405b13cdfdb2967054a4beb9ffa9284bd77bfade2c",
                                "typeString": "literal_string \"Only clients can add new documents.\""
                              },
                              "value": "Only clients can add new documents."
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_497d88e5c7b585599088fe405b13cdfdb2967054a4beb9ffa9284bd77bfade2c",
                                "typeString": "literal_string \"Only clients can add new documents.\""
                              }
                            ],
                            "id": 61,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              4294967278,
                              4294967278
                            ],
                            "referencedDeclaration": 4294967278,
                            "src": "711:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 67,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "711:68:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 68,
                        "nodeType": "ExpressionStatement",
                        "src": "711:68:0"
                      }
                    ]
                  },
                  "functionSelector": "4d2b1978",
                  "id": 70,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "addDocument",
                  "nameLocation": "632:11:0",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 59,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 56,
                        "mutability": "mutable",
                        "name": "_content",
                        "nameLocation": "658:8:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 70,
                        "src": "644:22:0",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 55,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "644:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 58,
                        "mutability": "mutable",
                        "name": "_ipfsHash",
                        "nameLocation": "682:9:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 70,
                        "src": "668:23:0",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 57,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "668:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "src": "643:49:0"
                  },
                  "returnParameters": {
                    "id": 60,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "700:0:0"
                  },
                  "scope": 109,
                  "src": "623:216:0",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 93,
                    "nodeType": "Block",
                    "src": "899:188:0",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "id": 89,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "commonType": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "id": 84,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "baseExpression": {
                                    "id": 76,
                                    "name": "isClient",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 26,
                                    "src": "918:8:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                      "typeString": "mapping(address => bool)"
                                    }
                                  },
                                  "id": 79,
                                  "indexExpression": {
                                    "expression": {
                                      "id": 77,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4294967281,
                                      "src": "927:3:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 78,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "931:6:0",
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "src": "927:10:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "918:20:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "||",
                                "rightExpression": {
                                  "baseExpression": {
                                    "id": 80,
                                    "name": "isJudge",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 18,
                                    "src": "942:7:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                      "typeString": "mapping(address => bool)"
                                    }
                                  },
                                  "id": 83,
                                  "indexExpression": {
                                    "expression": {
                                      "id": 81,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4294967281,
                                      "src": "950:3:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 82,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "954:6:0",
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "src": "950:10:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "942:19:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "src": "918:43:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "||",
                              "rightExpression": {
                                "baseExpression": {
                                  "id": 85,
                                  "name": "isLawyer",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 22,
                                  "src": "965:8:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                    "typeString": "mapping(address => bool)"
                                  }
                                },
                                "id": 88,
                                "indexExpression": {
                                  "expression": {
                                    "id": 86,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4294967281,
                                    "src": "974:3:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 87,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "978:6:0",
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "src": "974:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "965:20:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "src": "918:67:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "hexValue": "596f7520646f6e277420686176652061636365737320746f207468697320646f63756d656e742e",
                              "id": 90,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "987:41:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_a890b16c2a18fa3d10cacf255876e837a1802c464d99c6ab36c6171472e3d562",
                                "typeString": "literal_string \"You don't have access to this document.\""
                              },
                              "value": "You don't have access to this document."
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_a890b16c2a18fa3d10cacf255876e837a1802c464d99c6ab36c6171472e3d562",
                                "typeString": "literal_string \"You don't have access to this document.\""
                              }
                            ],
                            "id": 75,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              4294967278,
                              4294967278
                            ],
                            "referencedDeclaration": 4294967278,
                            "src": "910:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 91,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "910:119:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 92,
                        "nodeType": "ExpressionStatement",
                        "src": "910:119:0"
                      }
                    ]
                  },
                  "functionSelector": "18939b5e",
                  "id": 94,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "viewDocument",
                  "nameLocation": "856:12:0",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 73,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 72,
                        "mutability": "mutable",
                        "name": "_documentId",
                        "nameLocation": "874:11:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 94,
                        "src": "869:16:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 71,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "869:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "src": "868:18:0"
                  },
                  "returnParameters": {
                    "id": 74,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "899:0:0"
                  },
                  "scope": 109,
                  "src": "847:240:0",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 107,
                    "nodeType": "Block",
                    "src": "1143:135:0",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "baseExpression": {
                                "id": 100,
                                "name": "isLawyer",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 22,
                                "src": "1162:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                  "typeString": "mapping(address => bool)"
                                }
                              },
                              "id": 103,
                              "indexExpression": {
                                "expression": {
                                  "id": 101,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967281,
                                  "src": "1171:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 102,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "1175:6:0",
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "src": "1171:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1162:20:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "hexValue": "4f6e6c79206c6177796572732063616e20736861726520646f63756d656e74732e",
                              "id": 104,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1184:35:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_45a69780e7461f8bc7b85a2b7c8e3d7754a80c967228ae81102a42628cb855d0",
                                "typeString": "literal_string \"Only lawyers can share documents.\""
                              },
                              "value": "Only lawyers can share documents."
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_45a69780e7461f8bc7b85a2b7c8e3d7754a80c967228ae81102a42628cb855d0",
                                "typeString": "literal_string \"Only lawyers can share documents.\""
                              }
                            ],
                            "id": 99,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              4294967278,
                              4294967278
                            ],
                            "referencedDeclaration": 4294967278,
                            "src": "1154:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 105,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1154:66:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 106,
                        "nodeType": "ExpressionStatement",
                        "src": "1154:66:0"
                      }
                    ]
                  },
                  "functionSelector": "8e143e41",
                  "id": 108,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "shareDocument",
                  "nameLocation": "1104:13:0",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 97,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 96,
                        "mutability": "mutable",
                        "name": "_documentId",
                        "nameLocation": "1123:11:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 108,
                        "src": "1118:16:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 95,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1118:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "src": "1117:18:0"
                  },
                  "returnParameters": {
                    "id": 98,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "1143:0:0"
                  },
                  "scope": 109,
                  "src": "1095:183:0",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                }
              ],
              "scope": 110,
              "src": "60:1301:0",
              "usedErrors": [],
              "usedEvents": []
            }
          ],
          "src": "33:1330:0"
        },
        "compiler": {
          "name": "solc",
          "version": "0.8.21+commit.d9974bed.Emscripten.clang"
        },
        "networks": {},
        "schemaVersion": "3.4.16",
        "updatedAt": "2024-04-03T08:51:49.999Z",
        "devdoc": {
          "kind": "dev",
          "methods": {},
          "version": 1
        },
        "userdoc": {
          "kind": "user",
          "methods": {},
          "version": 1
        }
      
  };
  
  export default LegalRecordsABI;
  