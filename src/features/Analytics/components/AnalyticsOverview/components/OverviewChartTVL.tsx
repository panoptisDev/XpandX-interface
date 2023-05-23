import { Box, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { memo } from "react";
import {
  Area,
  ComposedChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "01",
    completed: 50,
  },
  {
    name: "11",
    completed: 40,
  },
  {
    name: "21",
    completed: 15,
  },
  {
    name: "01",
    completed: 40,
  },
  {
    name: "12",
    completed: 30,
  },
  {
    name: "25",
    completed: 70,
  },
  {
    name: "07",
    completed: 60,
  },
  {
    name: "21",
    completed: 20,
  },
  {
    name: "01",
    completed: 90,
  },
  {
    name: "11",
    completed: 100,
  },
  {
    name: "21",
    completed: 50,
  },
  {
    name: "01",
    completed: 5,
  },
  {
    name: "24",
    completed: 50,
  },
];

const CustomizedDot = (props: any) => {
  const { cx, cy, stroke, payload } = props;

  // if (data?.[data?.length - 1]?.name === payload.name) {
  //   return (
  //     <svg
  //       x={cx - 5}
  //       y={cy - 5}
  //       width={10}
  //       height={10}
  //       fill={stroke}
  //       viewBox="0 0 5 7"
  //     >
  //       <ellipse cx="2.5" cy="3.55416" rx="2.5" ry="2.85494" />
  //     </svg>
  //   );
  // }
  return null;
};

const CustomizedAxisTick = (props: any) => {
  const { x, y, index, payload } = props;
  // if (index === 0 || index === data.length - 1) {
  return (
    <g transform={`translate(${x + 20},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#A1A1AA">
        {payload.value}
      </text>
    </g>
  );
  // }
  // return null;
};

// eslint-disable-next-line react/display-name
const Chart = memo(() => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 5, left: 5, right: 20, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#E2E46F" stopOpacity={0.4} />
            <stop offset="100%" stopColor="#E2E46F" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          tick={<CustomizedAxisTick />}
          interval="preserveStartEnd"
          axisLine={false}
        />
        <YAxis hide />
        <Area
          type="monotone"
          dataKey="completed"
          stroke="#E2E46F"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorUv)"
          dot={<CustomizedDot />}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
});

export const OverviewChartTVL = () => {
  const { t } = useTranslation();

  return (
    <Stack
      direction={{ base: "column", sm: "row", lg: "column" }}
      alignItems={{ base: "unset", sm: "center", lg: "unset" }}
      gap={{ base: "unset", sm: "100px", lg: "unset" }}
      spacing="11px"
      p="12px 16px"
      bg="text.700"
      borderRadius="14px"
      w="100%"
      h="100%"
    >
      <Box>
        <Text>{t("tvl")}</Text>
        <Text fontSize="2xl" color="text.50" fontWeight="bold">
          $3.19B
        </Text>
      </Box>

      <Chart />
    </Stack>
  );
};
