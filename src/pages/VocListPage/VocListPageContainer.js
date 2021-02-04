import React from 'react';
import Pagination from '../../common/components/Pagination';
import SearchVoc from './components/SearchVoc';
import VocList from './components/VocList';

const VocListPageContainer = () => {
    return (
        <div>
            <SearchVoc/>
            <VocList/>
            <Pagination/>
        </div>
    );
};

export default VocListPageContainer;