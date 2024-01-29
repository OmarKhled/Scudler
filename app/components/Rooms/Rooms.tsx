import { SPACINGS } from "@constants/spacing";
import { DAYS, TIMES as TIMESLOTS } from "@constants/slots";
import { useEffect, useState } from "react";
import { scheduleCourse } from "remix.env";
import styled from "styled-components";
import _, { times } from "lodash";

interface props {
  rooms: { map: scheduleCourse[][][]; name: string }[];
}

const TIMES = [...TIMESLOTS];

function Rooms({ rooms }: props) {
  const [slotIndex, setSlotIndex] = useState(0);
  const [day, setDay] = useState(0);

  const sync = () => {
    const date = new Date(
      "Thursday Oct 20 2023 15:48:43 GMT+0300 (Eastern European Summer Time)"
    );
    setDay(3);

    const hr = _.clamp(
      date.getTimezoneOffset() / -60 + date.getUTCHours(),
      8,
      20
    );
    const mins = date.getUTCMinutes();

    if (mins < 30 && mins >= 0) {
      setSlotIndex(hr - 9);
    } else {
      setSlotIndex(hr - 8);
    }

    setSlotIndex(2);
  };

  useEffect(() => {
    sync();
  }, []);

  useEffect(() => {
    console.log(
      rooms
        .map((room) => ({
          free: room.map[day][slotIndex].length === 0,
          freeSlots:
            room.map[day][slotIndex].length === 0
              ? room.map[day]
                  .slice(slotIndex)
                  .reduce((acc, current, i, arr) => {
                    if (current.length != 0) {
                      arr.splice(1);
                      return acc;
                    }
                    return acc + 1;
                  }, 0)
              : 0,
          name: room.name,
          map: room.map,
        }))
        .sort((a, b) => b.freeSlots - a.freeSlots)
    );
  }, [day, slotIndex]);

  const getCurrentSlot = () => {
    return TIMES[slotIndex] + " - " + TIMES[slotIndex + 1];
  };
  return (
    <div>
      <CurrentSlot>{getCurrentSlot()}</CurrentSlot>
      {
        rooms
          .map((room) => ({
            free: room.map[day][slotIndex].length === 0,
            freeSlots:
              room.map[day][slotIndex].length === 0
                ? room.map[day]
                    .slice(slotIndex)
                    .reduce((acc, current, i, arr) => {
                      if (current.length != 0) {
                        arr.splice(1);
                        return acc;
                      }
                      return acc + 1;
                    }, 0)
                : 0,
            name: room.name,
          }))
          .sort((a, b) => b.freeSlots - a.freeSlots)[0]?.name
      }
      {/* <h1>Rooms</h1> */}
    </div>
  );
}

const CurrentSlot = styled.p`
  text-align: center;
  margin: ${SPACINGS.lg} 0;
  font-size: 16px !important;
`;

export default Rooms;
