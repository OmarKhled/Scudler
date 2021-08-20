import { compareMaps } from "./schedules/schedulesUtil.js";
import schedules from "./test.js";

let exist = false;

for (let i = 0; i < schedules.length; i++) {
  schedules.slice(i + 1).forEach((schedule, index) => {
    // console.log(index + i + 1);
    if (JSON.stringify(schedule) === JSON.stringify(schedules[i])) {
      exist = true;
    }
  });
  if (exist) {
    break;
  }
  // console.log(i);
}

console.log(schedules.length);
console.log(exist);
