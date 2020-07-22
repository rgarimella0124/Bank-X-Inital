import React, { useEffect, useState }  from 'react'
import './routing.scss'
import { Switch, Route, useLocation } from "react-router-dom";
import Sidebar from './components/Sidebar/sidebar';
import Headers from './components/Header/header';
import AddClient from './components/Client/components/addClient'
import Login from './components/Login/login'
import Footer from './components/Footer/Footer'
import AddPocket from './components/Client/components/addPocket'
import ClientList from './components/Client/components/clientList'
import PocketList from './components/Client/components/pocketList'
import ProgramList from './components/Client/components/programList'
import AddClientRelationship from './components/ClientRelationship/addClient'
import ClientRelationshipMapping from './components/ClientRelationship/relationshipMapping'
import RelationshipList from './components/ClientRelationship/relationshipList'
import CustomerList from './components/Customer/customerList'
import KycReports from './components/Customer/kycReports'
import AddCustomer from './components/Customer/addCustomer'
import Compliance from './components/Compliance/compliance'
import CardList from './components/Card/cardList'
import AssignPhysicalCard from './components/Card/assignPhysicalCard'
import BulkCardIssuance from './components/Card/bulkCardIssance'
import BulkcardIndent from './components/Card/bulkcardIndent'
import BulkCustomerList from './components/bulkRegistration/bulkcustomerList'
import UserListService from './components/Admin/userList'
import AddRole from './components/Admin/addRole'
import ClientPrefundApproval from './components/clientPrefund/clientPrefundApproval'
import WalletFundRequest from './components/clientPrefund/walletFundRequest'
import BulkCardIssuanceIndent from './components/Card/bulkCardIssuanceIndent'


const routes = [
  {
    path: "/",
    main: <Login/>
  },
  {
    path: "/client/addclient",
    main:  <AddClient/>
  },
  {
    path: "/client",
    main: () => <AddClient/>
  },
  {
    path: "/client/addpocket",
    main: () => <AddPocket/>
  },
  {
    path: "/client/clientlist",
    main: () => <ClientList/> 
  },
  {
    path: "/client/pocketlist",
    main: () => <PocketList/>
  },
  {
    path: "/client/programlist",
    main: () => <ProgramList/>
  },
  {
    path: "/clientrelation/add",
    main: () => <AddClientRelationship/>
  },
  {
    path: "/clientrelation/relationshipmapping",
    main: () => <ClientRelationshipMapping/>
  },
  {
    path: "/clientrelation/relationshiplist",
    main: () => <RelationshipList/>
  },
  {
    path: "/customer/addCustomer",
    main: () => <AddCustomer/>
  },
  {
    path: "/customer/customerList",
    main: () => <CustomerList/>
  },
  {
    path: "/customer/kycReports",
    main: () => <KycReports/>
  },
  {
    path: "/compliance",
    main: () => <Compliance/>
  },
  {
    path: "/cards/cardList",
    main: () => <CardList/>
  },
  {
    path: "/cards/assignPhysicalCards",
    main: () => <AssignPhysicalCard/>
  },
  {
    path: "/cards/bulkcardIssuance",
    main: () => <BulkCardIssuance/>
  },
  {
    path: "/cards/bulkcardIndent",
    main: () => <BulkcardIndent/>
  },
  {
    path: "/bulkregistration/bulkcustomerList",
    main: () => <BulkCustomerList/>
  },
  {
    path: "/admin/userList",
    main: () => <UserListService/>
  },
  {
    path: "/admin/addRole",
    main: () => <AddRole/>
  },
  {
    path: "/admin/userList",
    main: () => <UserListService/>
  },
  {
    path: "/clientPrefund/approval",
    main: () => <ClientPrefundApproval/>
  },
  {
    path: "/clientPrefund/walletrequest",
    main: () => <WalletFundRequest/>
  },
  {
    path: "/cards/bulkCardIssuanceindent",
    main: () => <BulkCardIssuanceIndent/>
  }
  
];

function Routing() {
  const location = useLocation();
  const show = location.pathname !== "/";

  return (
    <>
      {show && <div className="header">
        <Headers />
      </div>}
      <div className="content">
      {show && 
      <div><Sidebar /></div>}
        <Switch>  
        {routes.map((route, index) =>
          <Route
            key={index}
            path={route.path}
            exact
            children={route.main}
        />)}
        </Switch>
      </div>
      {/* {show && <div className="foot">
        <Footer />
      </div>} */}
    </>
  );
}

export default Routing;
