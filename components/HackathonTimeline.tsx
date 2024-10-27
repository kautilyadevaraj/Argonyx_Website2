"use client";

import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineTitle,
  TimelineIcon,
  TimelineDescription,
  TimelineContent,
  TimelineTime,
} from "@/components/ui/timeline";
import { TimelineElement } from "@/components/data";

interface TimelineLayoutProps {
  items: TimelineElement[]; // Replace any[] with the actual type of items.
}
export const TimelineLayout = ({ items }: TimelineLayoutProps) => {
  return (
    <Timeline>
      {items.map((item, index) => (
        <TimelineItem key={index}>
          {index != items.length - 1 && <TimelineConnector />}
          <TimelineHeader>
            <TimelineTime>{item.date}</TimelineTime>
            <TimelineIcon />
            <TimelineTitle>{item.title}</TimelineTitle>
          </TimelineHeader>
          <TimelineContent>
            <TimelineDescription>{item.description}</TimelineDescription>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
