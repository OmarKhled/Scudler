import { DAYS, TIMES as TIMESLOTS } from "@constants/slots";
import { SPACINGS } from "@constants/spacing";
import { clamp } from "@utils/clamp";
import { schedulesGroup, scheduleCourse } from "remix.env";
import { styled } from "styled-components";

interface props {
  schedulesGroup: schedulesGroup;
  openCourseDetails: (scheduleCourse: scheduleCourse) => void;
}

const TIMES = [...TIMESLOTS];
TIMES.unshift("");

function Schedule({ schedulesGroup, openCourseDetails }: props) {
  const schedule = schedulesGroup.schedules[0].schedule;

  console.log(schedulesGroup.schedules[0]);

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
        {DAYS.map((day, dayIndex) => (
          <Column key={`${dayIndex}${day}`}>
            <ColumnHead>{day}</ColumnHead>
            {schedule[dayIndex].map(
              (slot, slotIndex) =>
                slot.length > 0 &&
                slot[0].name !=
                  (slotIndex > 0
                    ? schedule[dayIndex][slotIndex - 1][0]?.name
                    : null) && (
                  <Slot
                    key={slot[0].name + " " + slotIndex + " "}
                    onClick={() => openCourseDetails(slot[0])}
                    $index={slotIndex}
                    $available={slot[0].available}
                    $length={
                      slot[0].slots
                        .filter((slot) => slot.day == dayIndex)
                        .map((slot) => slot.slot)
                        .flat().length
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
const Slot = styled.div<{
  $index: number;
  $length: number;
  $available: boolean;
}>`
  position: absolute;
  top: calc(${(props) => (100 / 16) * props.$index}% + 36px);
  height: ${(props) => (100 / 17) * props.$length}%;
  overflow: hidden;
  width: 95%;
  margin: auto;
  font-size: ${clamp(12, 14)};
  line-break: anywhere;
  line-height: 20px;
  padding: ${SPACINGS.xs};
  border-radius: ${SPACINGS.xs};
  border: 0.2px solid #2032d430;
  border-left: 5px solid ${(props) => (props.$available ? "#2032d4" : "red")};
  background: #fff;
  user-select: none;
  cursor: pointer;
  /* margin: 1rem; */
`;

export default Schedule;
