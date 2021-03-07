import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header'
import BookList from './components/body/book-list';
import useBookSearch from './useBookSearch';
import{ useState,useRef,useCallback } from 'react';
function App() {
  const [query,setQuery] = useState('');
  const [pageNumber,setPageNumber] = useState(1);
  const {loading,error,books,hasMore} = useBookSearch(query,pageNumber);
  const observer=useRef()
  const lastBookElementRef=useCallback((node)=>{
    if(loading) return
    if(observer.current) observer.current.disconnect()
    console.log(node)
    observer.current=new IntersectionObserver(entries=>{
      if(entries[0].isIntersecting && hasMore){
        setPageNumber(prev=>prev+1)
      }
    })
    if(node) observer.current.observe(node)
  },[loading,hasMore])
  return (
    <div className="App">
      <Header query={query} setQuery={setQuery} setPageNumber={setPageNumber} />
      <BookList lastBookElementRef={lastBookElementRef} books={books} loading={loading} error={error} hasMore={hasMore}/>
    </div>
  );
}

export default App;
