import React from 'react';
import SearchCustomer from './components/SearchCustomer.js'
import CustomerVocHistory from './components/CustomerVocHistory.js'
import VocInformation from './components/VocInformation.js'

const VocAddPageContainer = () => {
    return (
        <div>
            <SearchCustomer/>
            <CustomerVocHistory/>
            <VocInformation/>
        </div>
    );
};

export default VocAddPageContainer;