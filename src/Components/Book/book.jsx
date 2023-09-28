import { useState } from 'react';
export default function Book(props){
    
    // let arrAuthor = props.author[0];

    

    let authorID = props.authorID;
    let books_arr = props.book;
    let setAuthor = props.methodDeletedBooks;

    let [books, setBook] = useState(books_arr); 

    function onDeleteFormIndexBooks(indexOut = null){
        let copy = null;
        console.log(books);
        
        books.forEach((value, index)=>{
            if(index == indexOut){
                copy = books.slice(books.splice(index, 1));
            }
        })

        setBook(copy);
    }

    return(
        <>
            <h5>Книги:</h5>

            <ul className='ul-book'>  
                {
                    books.map((value, index)=>
                    {   
                        return(     
                            <>
                                <li key={index} style={{margin: '12px 0'}} >{value}</li>
                                <button onClick={()=>onDeleteFormIndexBooks(index)}>удалить</button>
                            </>
                        )
                    }

                    ) 
                }
            </ul>
        </>
    )


}


