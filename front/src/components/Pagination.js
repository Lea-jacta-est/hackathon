import React from 'react'
import { Pagination } from 'semantic-ui-react'

const Paginate = ({ contentLength, activePage, onPageChange, cardPerPage }) => {
  return (
    <Pagination
      defaultActivePage={1}
      totalPages={Math.ceil(contentLength / cardPerPage)}
      activePage={activePage}
      onPageChange={onPageChange}
    />
  )
}

export default Paginate
