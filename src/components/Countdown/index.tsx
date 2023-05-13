import { Flex, Text, FlexProps } from "@chakra-ui/react";
import React, { FC } from "react";
import ReactCountdown, { CountdownRenderProps } from "react-countdown";

interface Props extends FlexProps {
  date?: string | number | Date;
}

const Countdown: FC<Props> = ({ date, ...props }) => {
  // Random component
  const Completionist = () => <Text sx={{ fontSize: "11px" }}>Done</Text>;

  // Renderer callback with condition
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <Flex gap="5px" {...props}>
          <Text>{days}d</Text>
          <Text>{hours}h</Text>
          <Text>{minutes}min</Text>
          <Text>{seconds}s</Text>
        </Flex>
      );
    }
  };

  return <ReactCountdown zeroPadTime={1} date={date} renderer={renderer} />;
};

export default Countdown;
