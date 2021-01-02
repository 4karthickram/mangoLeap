export default function CommonList(props) {
    const { itemList, deleteList, addCompleteList, completedList, completeList } = props;
    return (
        <div>
            {completeList ? <h4>Completed</h4> : <h4>ToDo</h4>}
            <div>
                {itemList && <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemList.map((list) => {
                            return (
                                <tr>
                                    <td>{list}</td>
                                    {completeList ? <td><label><input type="checkbox" checked="checked" /><span>completed</span></label></td> :
                                        <td><label><input type="checkbox" onClick={() => { addCompleteList([...completedList, list]) }} /><span>complete</span></label></td>}
                                    <td><i style={{ cursor: 'pointer' }} className="small material-icons" onClick={() => deleteList(list)}>delete</i></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>}
            </div>
        </div>
    )
}

