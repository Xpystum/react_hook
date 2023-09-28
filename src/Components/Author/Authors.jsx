
import { useState } from 'react';
import Book from '../Book/book'


export default function Authors(){

    let [author, setAuthor] = useState(
        [
          {id:1, author: "Женя", book: ['book1', 'book2', 'book3', 'book4', 'book5', 'book6']},
          {id:2, author: "Ваня", book: ['book1', 'book2', 'book3', 'book4', 'book6']},
          {id:3, author: "Илья", book: ['book2', 'book4', 'book5', 'book6']},
        ]
      ); 

        function onDeleteFormIndexAuthor(indexOut = null){
        let copy = null;
        author.forEach((value, index)=>{

            if(value.id == indexOut){
                copy = author.slice(author.splice(index, 1));
            }

        });
        setAuthor(copy);
      }


      function onDeleteFormIndexBooks(indexOut = null, id = null){
        let copy = null;
       
        
        author.forEach((auth)=>{
            if(auth.id == id){
                auth.book.forEach((value, index)=>{
                    if(index == indexOut){
                       auth.book.slice(auth.book.splice(value.index, 1));
                    }
                })
            }
        })

        console.log(author);

        // setAuthor(copy);
      }


    return (
        <div>
            <h3>Авторы:</h3>
            {/* { console.log(author) } */}
            <ul className='ul-author'>  
                { 
                    author.map((value)=>
                    {
                        return (
                            <>
                                <li className='li-author' key={value.id}>
                                    <h4>{value.author}</h4>
                                </li>
                                <button onClick={()=>onDeleteFormIndexAuthor(value.id)} >удалить</button>
                                <Book book={value.book} />
                            </>
                        )
                    }) 
                }
            </ul>
        </div> 
    )
}


