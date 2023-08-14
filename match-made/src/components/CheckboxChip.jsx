import {
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import FormOption from "../FormOptions.json";

export default function CheckboxChip() {
  const hobbies = FormOption.hobbies;

  const [checkedState, setCheckedState] = useState(
    new Array(hobbies.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const handleHobbies = () => {
    const UserHobby = checkedState.flatMap((item, index) =>{

      // if(item) return hobbies[index].hobby

      
      return item?hobbies[index].hobby:[]
    }
  );
    // const UserHobbies = UserHobby.filter((item) => {
    //   if (item) return item
    // });
    console.log(UserHobby)
  };

  return (
    <Card className="m-20">
      
        <div className="flex justify-center items-center">
          <h3 className="my-4 text-2xl font-bold text-font_light dark:text-font_dark">Hobbies</h3>
        </div>
        <List className="flex flex-row flex-wrap w-full gap-0">
          {hobbies.map(({ hobby }, index) => {
            
            return (
              <ListItem
                className="p-0 w-1/4"
                key={index}
                name={hobby}
                id={index}
              >
                <label
                  htmlFor="horizontal-list-react"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      key={index}
                      id={index}
                      ripple={false}
                      value={hobby}
                      name={hobby}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    {hobby}
                  </Typography>
                </label>
              </ListItem>
            );
          })}
        </List>
        <div className="flex justify-end items-end mb-10">

        <button
          type="button"
          className="flex rounded-xl border-solid border-2 w-40 h-12 mr-24 mt-6 text-bg_dark dark:text-bg_light font-light items-center justify-center bg-button_light focus:z-10 focus:ring-2 focus:ring-button_dark dark:bg-button_dark dark:focus:z-10 dark:focus:ring-2 dark:focus:ring-button_dark dark:focus:border-bg_dark"
          onClick={handleHobbies}>
          Submit
        </button>
        </div>
      
    </Card>
  );
}
