
import Authors from './Components/Author/Authors';

function App() {

   



  // let [news, setNews] = useState(
  //   [
  //     {title: "новость 1", content: "текст новости 1"}, 
  //     {title: "новость 2", content: "текст новости 2"},
  //     {title: "новость 3", content: "текст новости 3"}
  //   ]
  // );


  return (
    <div className="App">
        <Authors/>
    </div>

    // {id:1, author: "Женя", book: ['book1', 'book2', 'book3', 'book4', 'book5', 'book6']},
    // {id:2, author: "Ваня", book: ['book1', 'book2', 'book3', 'book4', 'book6']},
    // {id:3, author: "Илья", book: ['book2', 'book4', 'book5', 'book6']},


  );
}

export default App;
