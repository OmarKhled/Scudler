import { SPACINGS } from "@constants/spacing";
import { clamp } from "@utils/clamp";
import { styled } from "styled-components";

interface props {
  schedulesGroup: schedulesGroup;
  openCourseDetails: (scheduleCourse: scheduleCourse) => void;
}
const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wendsday",
  "Thrusday",
  "Friday",
  "Saturday",
];
const TIMES = [
  " ",
  "8:30 AM",
  "9:30 AM",
  "10:30 AM",
  "11:30 AM",
  "12:30 PM",
  "1:30 PM",
  "2:30 PM",
  "3:30 PM",
  "4:30 PM",
  "5:30 PM",
  "6:30 PM",
  "7:30 PM",
  "8:30 PM",
  "9:30 PM",
  "10:30 PM",
  "11:30 PM",
];

function Schedule({ schedulesGroup, openCourseDetails }: props) {
  const schedule = schedulesGroup.schedules[0].schedule;
  return (
    <>
      <TableWrapper>
        <TimeSlotsColumn>
          {TIMES.map((slot, index) =>
            index == 0 ? (
              <ColumnHead key={"Corner Cell"}>{slot}</ColumnHead>
            ) : (
              <RowHead key={slot}>{slot}</RowHead>
            )
          )}
        </TimeSlotsColumn>
        {DAYS.map((day, index) => (
          <Column key={`${index}${day}`}>
            <ColumnHead>{day}</ColumnHead>
            {schedule[index].map(
              (slot, slotIndex) =>
                slot.length > 0 &&
                slot[0].name !=
                  (slotIndex > 0
                    ? schedule[index][slotIndex - 1][0]?.name
                    : null) && (
                  <Slot
                    key={slot[0].name + " " + slotIndex + " "}
                    onClick={() => openCourseDetails(slot[0])}
                    $index={slotIndex}
                    $length={
                      slot[0].slots.map((slot) => slot.slot).flat().length
                    }
                  >
                    {slot[0].name}
                  </Slot>
                )
            )}
          </Column>
        ))}
      </TableWrapper>
    </>
  );
}

const TableWrapper = styled.div`
  display: grid;
  grid-template-columns: 90px repeat(7, 1fr);
  margin: auto;
  width: min(${clamp(780, 870)}, 100%);
  margin-top: ${SPACINGS.lg};
  border-radius: ${SPACINGS.sm};
  border: 0.2px solid #bdbdbd;
  overflow-y: auto;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
  background-color: hsl(234 9% 99% / 1);
  border-right: #bdbdbd 0.5px solid;
  &:last-child {
    border-right: none;
  }
  position: relative;
`;
const TimeSlotsColumn = styled(Column)`
  justify-content: space-between;
  align-items: flex-start;
`;
const HeadCell = styled.div`
  padding: ${SPACINGS.xs} ${SPACINGS.sm};
  color: #737373;
  text-align: center;
  font-size: 16px;
`;
const ColumnHead = styled(HeadCell)`
  border-bottom: 1px solid #bdbdbd;
  height: 32px;
  width: 100%;
`;
const RowHead = styled(HeadCell)``;
const Slot = styled.div<{ $index: number; $length: number }>`
  position: absolute;
  top: calc(${(props) => (100 / 16) * props.$index}% + 36px);
  height: ${(props) => (100 / 17) * props.$length}%;
  background-color: red;
  overflow: hidden;
  width: 95%;
  margin: auto;
  font-size: ${clamp(12, 14)};
  line-break: anywhere;
  line-height: 20px;
  padding: ${SPACINGS.xs};
  border-radius: ${SPACINGS.xs};
  border: 0.2px solid #2032d430;
  border-left: 5px solid #2032d4;
  background: #fff;
  user-select: none;
  cursor: pointer;
  /* margin: 1rem; */
`;

export default Schedule;
