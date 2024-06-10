import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
interface ItemType {
    id: number;
    name: string;
  }
  
export default function SortAble(){
    const [state, setState] = useState<ItemType[]>([
        { id: 1, name: "shrek" },
        { id: 2, name: "fiona" },
      ]);
      const [state1, setState1] = useState<ItemType[]>([
        { id: 1, name: "shrek1" },
        { id: 2, name: "fiona1" },
      ]);
      return (
        <> 
          <div className="flex">
          <ReactSortable  group={{name: "groupName", sort: false}}  list={state} setList={setState}>
            
          {state.map((item) => (
            <div style={{margin: "20px", border : '1px solid red',padding : '10px'}} key={item.id}>{item.name}</div>
          ))}
        </ReactSortable>

        <ReactSortable  group="groupName" list={state1} setList={setState1}>
          {state1.map((item) => (
            <div style={{margin: "20px", border : '1px solid red',padding : '10px'}} key={item.id}>{item.name}</div>
          ))}
        </ReactSortable>
          </div>
        
        </>
      );
}