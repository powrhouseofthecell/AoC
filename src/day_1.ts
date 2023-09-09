import fs from "fs";
import path from "path";

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
// const input = fs.readFileSync(path.join(__dirname, "test.txt"), "utf8");
const input_array = input.split("\n");

function get_max_calories(arr: number[] | string[]) {
  let max_calorie = 0;
  let current_calorie = 0;
  arr.forEach((calorie) => {
    if (calorie !== "") {
      current_calorie = current_calorie + Number(calorie);
    } else {
      max_calorie =
        current_calorie > max_calorie ? current_calorie : max_calorie;
      current_calorie = 0;
    }
  });
  return max_calorie;
}

console.log(get_max_calories(input_array));

// ======================================================================================

const top_calorie_carriers = {
  first: 0,
  second: 0,
  third: 0,
};

let first_top_carrier = top_calorie_carriers["first"];
let second_top_carrier = top_calorie_carriers["second"];
let third_top_carrier = top_calorie_carriers["third"];

function get_top_calorie_carriers(arr: number[] | string[]) {
  const calories_of_elf: number[] = [];
  let accumulator = 0;
  let sum_top_three = 0;

  arr.forEach((calorie) => {
    if (calorie !== "") {
      accumulator = accumulator + Number(calorie);
    } else {
      calories_of_elf.push(accumulator);
      accumulator = 0;
    }
  });
  // Sort the calories_of_elf array in decreasing order and get the first three items.

  /***
    The below code need to be refactored
  ***/
  calories_of_elf.sort((a, b) => a + b);
  calories_of_elf.reverse();
  sum_top_three = calories_of_elf.slice(0, 3).reduce((prev, curr) => {
    return prev + curr;
  });

  return sum_top_three;
}

console.log(get_top_calorie_carriers(input_array));
