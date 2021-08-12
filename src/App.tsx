import { useEffect, useState } from 'react';
import Search from './components/Search'
import SearchResult from './components/SearchResult';
import { posts } from './database/db.json'


export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [filteredPosts, setFilter] = useState(posts);

  // eslint-disable-next-line
  useEffect(() => handleSearch, [categoryFilter])

  function handleSearch() {
    setFilter([...posts
      .filter((post) => post.title.match(searchValue))]
      .filter((post) => (categoryFilter !== "")?post.category.some((cat) => cat === categoryFilter):true)
      );
  }

  return (
    <div>
      <Search value={searchValue} setSearchValue={setSearchValue} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} handleSearch={handleSearch}>
        {filteredPosts.map((post) => (
          <SearchResult key={post.id} id={post.id} title={post.title} description={post.description} likes={post.likes} views={post.views} />
        ))}
      </Search>
    </div>
  );
}
