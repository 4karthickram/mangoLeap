import React from 'react';
import CommonList from './CommonList';

export default function AddItem() {
    const [item, addItem] = React.useState('');
    const [itemList, addItemList] = React.useState([]);
    const [completedList, addCompleteList] = React.useState([]);
    const completeList = true;
    function deleteItemList(list) {
        const toDoList = itemList.filter((listItems) => {
            return listItems !== list
        })
        addItemList(toDoList)
    }
    function deleteCompleteList(list) {
        const completeList = completedList.filter((listItems) => {
            return listItems !== list
        })
        addCompleteList(completeList)
    }
    return (
        <div>
            <h4>Add Item</h4>
            <input type="text" name="toDoAdd" onChange={(e) => addItem(e.target.value)}></input>
            <button type="button" onClick={() => { addItemList([...itemList, item]) }}>Add</button>
            <CommonList itemList={itemList} deleteList={deleteItemList} addCompleteList={addCompleteList} completedList={completedList} />
            <CommonList itemList={completedList} deleteList={deleteCompleteList} completeList={completeList} />
        </div>
    )
}
