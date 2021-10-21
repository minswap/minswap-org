import * as React from 'react';
import Image from 'next/image';
import * as echarts from 'echarts';
import { SVGRenderer } from 'echarts/renderers';

import logoMain from 'src/assets/logo-main.svg';

type Item = { title: string; percent: number; color: string; scale?: number };

const data: Item[] = [
  {
    title: 'Core Team',
    percent: 10,
    color: '#7dc5da',
  },
  { title: 'Development Fund', percent: 10, color: '#99e5c2', scale: 1.3 },
  {
    title: 'Incentives / Partnership',
    percent: 1.5,
    color: '#7bede2',
  },
  { title: 'DAO Treasury', percent: 6, color: '#ca7add', scale: 1.3 },
  { title: 'FISO Airdrop', percent: 2.5, color: '#6e5ae2' },
  {
    percent: 70,
    title: 'Yield Farming',
    color: '#2f45c5',
    scale: 1.3,
  },
];

export function Tokenomics() {
  const chartRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (chartRef.current) {
      function getItemLabel(color: string) {
        return {
          formatter(params: { value: number; name: string }) {
            return `{circle|}{gap|}{percent|${params.value}%}{gap|}{text|${params.name.toUpperCase()}}`;
          },
          rich: {
            circle: {
              width: 15,
              height: 15,
              backgroundColor: color,
              borderRadius: 9999,
            },
            gap: {
              width: 6,
            },
            text: { fontWeight: 'bold', color: 'rgb(107, 114, 128)' },
            percent: {
              fontWeight: 'bold',
              color: '#000',
            },
          },
        };
      }

      echarts.use([SVGRenderer] as unknown as Parameters<typeof echarts.use>[0]);
      const width = (window.innerWidth / 5) * 4;
      chartRef.current.style.width = `${width}px`;
      const radius = Math.min(width, 500) / 2;
      chartRef.current.style.height = `${radius * 2}px`;
      const chart = echarts.init(chartRef.current, undefined, { renderer: 'svg' });

      chart.setOption({
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [radius * 0.5, radius],
            center: ['50%', '50%'],
            containLabel: true,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 3,
            },
            label: {
              show: width >= 500,
              color: 'rgb(107, 114, 128)',
              margin: 0,
              alignTo: 'labelLine',
            },
            labelLine: {
              lineStyle: {
                color: '#000',
                cap: 'square',
                join: 'bevel',
              },
            },
            data: [
              {
                value: 10,
                name: 'Core Team',
                itemStyle: {
                  color: '#7dc5da',
                  borderWidth: 3,
                  borderColor: '#fff',
                },
                label: getItemLabel('#7dc5da'),
              },
              {
                value: 10,
                name: 'Development Fund',
                itemStyle: { color: '#99e5c2' },
                label: getItemLabel('#99e5c2'),
              },
              {
                value: 1.5,
                name: 'Incentives / Partnership',
                itemStyle: { color: '#7bede2' },
                label: getItemLabel('#7bede2'),
              },
              { value: 6, name: 'DAO Treasury', itemStyle: { color: '#ca7add' }, label: getItemLabel('#ca7add') },
              {
                value: 2.5,
                name: 'FISO Airdrop',
                itemStyle: { color: '#6e5ae2' },
                label: getItemLabel('#6e5ae2'),
              },
              {
                value: 70,
                name: 'Yield Farming',
                itemStyle: { color: '#2f45c5' },
                label: getItemLabel('#2f45c5'),
              },
            ],
          },
        ],
      });

      // chart.setOption({ series: [{ label: { show: true } }] }, false, true);
    }
  }, []);

  return (
    <>
      <div className="relative flex items-center justify-center p-10">
        <div ref={chartRef} />
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-14 h-14 md:w-36 md:h-36">
          <Image alt="Logo main" layout="fill" src={logoMain} />
        </div>
      </div>

      <div className="w-full px-5 md:hidden">
        <div className="flex flex-col w-full px-5 text-sm bg-white shadow-2xl rounded-2xl py-7 gap-y-6">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#7dc5da] rounded-full"></div>
            <div className="w-2"></div>
            <div className="font-bold">10%</div>
            <div className="w-3"></div>
            <div className="text-gray-500 uppercase">Core Team</div>
          </div>

          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#99e5c2] rounded-full"></div>
            <div className="w-2"></div>
            <div className="font-bold">10%</div>
            <div className="w-3"></div>
            <div className="text-gray-500 uppercase">Development Fund</div>
          </div>

          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#2f45c5] rounded-full"></div>
            <div className="w-2"></div>
            <div className="font-bold">70%</div>
            <div className="w-3"></div>
            <div className="text-gray-500 uppercase">Yield Farming</div>
          </div>

          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#7bede2] rounded-full"></div>
            <div className="w-2"></div>
            <div className="font-bold">1.5%</div>
            <div className="w-3"></div>
            <div className="text-gray-500 uppercase">Incentives / Partnership</div>
          </div>

          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#ca7add] rounded-full"></div>
            <div className="w-2"></div>
            <div className="font-bold">6%</div>
            <div className="w-3"></div>
            <div className="text-gray-500 uppercase">DAO Treasury</div>
          </div>

          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#6e5ae2] rounded-full"></div>
            <div className="w-2"></div>
            <div className="font-bold">2.5%</div>
            <div className="w-3"></div>
            <div className="text-gray-500 uppercase">FISO Airdrop</div>
          </div>
        </div>
      </div>

      <div className="h-10 md:hidden"></div>

      <div className="w-full px-5 md:hidden">
        <div className="flex flex-col w-full px-5 text-sm bg-white shadow-2xl rounded-2xl md:hidden py-7 gap-y-6">
          <div className="text-2xl font-bold">FISO Vesting Schedule</div>
          <div className="flex items-center">
            <div className="flex items-center w-16">
              <div className="w-2 h-2 rounded-full bg-primaryMain"></div>
              <div className="w-2"></div>
              <span className="font-bold">MIN</span>
            </div>
            <div className="text-gray-500">45 day lockup period + 45 day vesting</div>
          </div>

          <div className="flex items-center">
            <div className="flex items-center w-16">
              <div className="bg-[#7cc6dc] w-2 h-2 rounded-full"></div>
              <div className="w-2"></div>
              <span className="font-bold">MINt</span>
            </div>
            <div className="text-gray-500">45 day lockup period + 45 day vesting</div>
          </div>
        </div>
      </div>
    </>
  );
}
