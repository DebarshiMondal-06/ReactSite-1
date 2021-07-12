import React from 'react'

const SearchInputs = () => {
  return <article className='input-section'>
    <form className='form'>
      <div class="mb-4">
        <label>Check In</label>
        <input type="date" placeholder='DD-MM-YYYY' class="date form-control" />
      </div>
      <div class="mb-4">
        <label>Check Out</label>
        <input type="date" class="date form-control" />
      </div>
      <div class="mb-4">
        <label>Adults</label>
        <input type="number" placeholder='For Ex: 2' class="number form-control" />
      </div>
      <div class="mb-4">
        <label>Children</label>
        <input type="number" placeholder='For Ex: 1' class="number form-control" />
      </div>
      <div className='btn-search'>
        <button type='button'>Search here </button>
      </div>
    </form>
  </article>
}

export default SearchInputs;
