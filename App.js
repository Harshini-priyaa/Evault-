import React, { Component } from 'react';
import Web3 from 'web3';
import UserRole from './Components/UserRole';
import LegalRecordsABI from './LegalRecordsABI';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      legalRecords: null,
      account: '',
      isJudge: false,
      isLawyer: false,
      isClient: false,
      loading: true
    };
  }

  async componentDidMount() {
    await this.loadBlockchainData();
  }

  async loadBlockchainData() {
    try {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();

      if (LegalRecordsABI.networks[networkId]) {
        const legalRecords = new web3.eth.Contract(
          LegalRecordsABI.abi,
          LegalRecordsABI.networks[networkId].address
        );

        this.setState({
          legalRecords,
          account: accounts[0],
          isJudge: await legalRecords.methods.isJudge(accounts[0]).call(),
          isLawyer: await legalRecords.methods.isLawyer(accounts[0]).call(),
          isClient: await legalRecords.methods.isClient(accounts[0]).call(),
          loading: false
        });
      } else {
        console.error('Contract not deployed on this network');
      }
    } catch (error) {
      console.error('Error loading blockchain data:', error);
    }
  }

  render() {
    const { loading, isJudge, isLawyer, isClient } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="App">
        <h1>E-Vault</h1>
        <UserRole isJudge={isJudge} isLawyer={isLawyer} isClient={isClient} />
      </div>
    );
  }
}

export default App;
