
export default function News(props){
    return (
        <div>
            <h2>{props.el.title}</h2>
            <p>{props.el.content}</p>
            <button onClick={()=>props.onDeleteNews(props.index)}>удалить</button>
        </div>
    );
}