export let x = 10;

export function Test(props){

    let onBtn = ()=>{
        console.log('Была нажата ссылка.');
    } 

    return (
        <div>
            test
            { props.y }
            { props.children }

            <button onClick={()=>props.data(99)}>кнопка</button>
        </div>
    )
}