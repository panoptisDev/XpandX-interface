import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "next-i18next";
import { memo } from "react";
import {
  Area,
  Bar,
  BarChart,
  ComposedChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "01",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "11",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "21",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "01",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "12",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "25",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "07",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "21",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "01",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "11",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "21",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "01",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "24",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "08",
    uv: 3490,
    pv: 4300,
  },
];

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
      <BarChart
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
        <Bar dataKey="pv" fill="#1770D0" />
        <Bar dataKey="uv" fill="#0DA670" />
      </BarChart>
    </ResponsiveContainer>
  );
});

export const OverviewVolumn24h = () => {
  const { t } = useTranslation();

  return (
    <Stack
      spacing="11px"
      p="12px 16px"
      bg="text.700"
      borderRadius="14px"
      w="100%"
      h="100%"
    >
      <Box>
        <Text>{t("volume24h")}</Text>
        <Text fontSize="2xl" color="text.50" fontWeight="bold">
          $720.50M
        </Text>
      </Box>

      <Chart />
    </Stack>
  );
};
