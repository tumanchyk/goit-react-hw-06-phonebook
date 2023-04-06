import { useSelector, useDispatch } from "react-redux";
import { Label, Input } from "./Filter.styled";
import { setValue } from "redux/filterSlice.js";

export default function Filter(){
    const filter = useSelector (state => state.filter);
    const dispatch = useDispatch();
    return (
        <Label>
            Find contacts by name
            <Input type="text" onChange={(e)=>dispatch(setValue(e.target.value))} value={filter} />
        </Label>
    )
    }
