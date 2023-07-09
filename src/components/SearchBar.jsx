import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// eslint-disable-next-line react/prop-types
function SearchBar({ formRef, onSubmit }) {

  return (
    <form
      ref={formRef}
      className="my-2 flex gap-2"
      onSubmit={onSubmit}
    >
      <input 
        className="flex-grow rounded-md border border-gray-300 px-4 py-2"
        name="query"  
      />
      <button className="bg-blue-400 hover:bg-blue-900 transition-colors text-white px-4 py-2 rounded-md flex gap-2 items-center">
        <FontAwesomeIcon icon="fas fa-search" />
        <span>Search</span>
      </button>
    </form>
  )
}

export default SearchBar