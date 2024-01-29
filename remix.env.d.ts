/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

interface course {
  courseName: string;
}

export type modes = "schedules" | "rooms" | "courses";

interface schedulesGroup {
  type: "group" | "single";
  schedules: schedule[];
}

interface schedule {
  fit: number;
  schedule: scheduleCourse[][][];
}

interface scheduleCourse {
  name: string;
  instructor: string;
  online: boolean;
  subtype: "tutorial" | "lecture" | "lab";
  prefix: number | `${number}${"A" | "B" | "C" | "D"}`;
  slots: {
    day: number;
    builduing: string;
    slot: number[];
  }[];
  available: boolean;
}

declare module "feather-icons-react";
