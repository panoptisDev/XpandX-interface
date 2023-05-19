import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  SliderMark,
  RangeSliderMark,
  Icon,
} from "@chakra-ui/react";
import { VectorIcon } from "@/icons";

export const PriceRangeSlider = () => {
  return (
    <RangeSlider
      h="100px"
      aria-label={["min", "max"]}
      onChangeEnd={(val) => console.log(val)}
      defaultValue={[1550, 2450]}
      min={800}
      max={3400}
      sx={{
        ".chakra-slider__marker": {
          bottom: 0,
          transform: "translateY(calc(100% + 5px))",
          fontSize: "xs",
          color: "text.500",

          "&::after": {
            content: '""',
            position: "absolute",
            left: "50%",
            top: "-9px",
            w: "1px",
            h: "7px",
            bg: "text.600",
          },
        },
      }}
    >
      <RangeSliderMark value={1000}>1000</RangeSliderMark>
      <RangeSliderMark value={1500}>1500</RangeSliderMark>
      <RangeSliderMark value={2000}>2000</RangeSliderMark>
      <RangeSliderMark value={2500}>2500</RangeSliderMark>
      <RangeSliderMark value={3000}>3000</RangeSliderMark>

      <RangeSliderTrack
        h="0"
        borderTop="1px solid"
        borderColor="text.600"
        overflow="visible"
        top="100% !important"
      >
        <RangeSliderFilledTrack
          h="80px"
          top="0 !important"
          transform="translateY(-100%) !important"
          bg="linear-gradient(90deg, #E2E46F 0%, #0DA670 100%)"
          opacity="0.2"
        />
      </RangeSliderTrack>

      <RangeSliderThumb
        index={0}
        top="unset"
        bottom="0"
        transform="unset"
        w="1px"
        h="90px"
        border="none"
        _active={{}}
      >
        <Icon as={VectorIcon} w="20px" h="90px" color="#E2E46F" />
      </RangeSliderThumb>
      <RangeSliderThumb
        index={1}
        top="unset"
        bottom="0"
        transform="unset"
        w="1px"
        h="90px"
        border="none"
        _active={{}}
      >
        <Icon as={VectorIcon} w="20px" h="90px" color="#0DA670" />
      </RangeSliderThumb>
    </RangeSlider>
  );
};
