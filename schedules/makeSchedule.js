import { fitness } from "./fitness.js";
import { compareMaps, sortSchedules } from "./schedulesUtil.js";

export const getSchedule = (combinations, options) => {
  let schedules = [];
  // console.log(combinations);
  const allPossibleCombinations = (combinations) => {
    if (combinations.length === 0) {
      return [];
    } else if (combinations.length === 1) {
      return combinations[0].map((combination) => [combination]);
    } else {
      var result = [];
      var allCasesOfRest = allPossibleCombinations(combinations.slice(1)); // recur with the rest of array
      allCasesOfRest.forEach((comb) => {
        for (var i = 0; i < combinations[0].length; i++) {
          let combination = [];
          !Array.isArray(comb)
            ? combination.push(comb)
            : combination.push(...comb);
          combination.push(combinations[0][i]);
          result.push(combination);
        }
      });
      return result;
    }
  };

  const scheduleCombinations = allPossibleCombinations(combinations);

  // console.log(scheduleCombinations);

  scheduleCombinations.forEach((combination) => {
    if (fitness(combination, options).fit >= 0) {
      const newSchedule = fitness(combination, options);
      schedules.push(newSchedule);
    }
  });

  console.log(schedules.length);

  schedules.forEach((schedule1, index1) => {
    schedules.slice(index1 + 1).forEach((schedule2, index2) => {
      if (compareMaps(schedule1.schedule, schedule2.schedule)) {
        schedules.splice(index2 + index1 + 1);
      }
    });
  });

  console.log(schedules.length);

  schedules = sortSchedules(schedules);

  // console.log(schedules);

  return schedules;
};
