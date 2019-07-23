import React from 'react'
import { Pagination } from 'semantic-ui-react'

const PaginationExamplePagination = ({ content, contentLength, activePage, onPageChange, cardPerPage }) => {
  return (
    <Pagination
      defaultActivePage={1}
      totalPages={Math.ceil(content.length / cardPerPage)}
      activePage={activePage}
      onPageChange={onPageChange}
    />
  )
}

export default PaginationExamplePagination
