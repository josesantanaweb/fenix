'use client'

import Image from 'next/image'
import { MediumBox } from '@/components/UI'
import ReadMoreModal from '@/components/Modals/Liquidity/ReadMore'
import useStore from '@/store'

interface Step {
  title: string
  description: string
  icon: string
}

interface StepsProps {
  steps: Step[]
}

const Steps = ({ steps }: StepsProps) => {
  const { setReadMoreModal } = useStore()

  const handleReadMore = () => setReadMoreModal(true)

  return (
    <MediumBox>
      <div className="flex flex-col justify-center w-full">
        <h4 className="w-full mb-3 text-sm text-white">Start now</h4>
        <div className="relative flex flex-col w-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="md:w-[400px] 2xl:w-[520px] h-[97px] flex gap-3 items-center p-3 box-medium mb-3 relative"
            >
              <div className="flex items-center justify-center w-12 h-12 p-3 rounded-lg bg-shark-400 bg-opacity-60">
                <span
                  className={`inline-block text-2xl text-transparent bg-gradient-to-r from-outrageous-orange-500 to-festival-500 bg-clip-text ${step.icon}`}
                ></span>
              </div>
              <div className="">
                <h5 className="text-xs text-shark-100">{step.title}</h5>
                <p className="text-xs text-white">{step.description}</p>
              </div>
            </div>
          ))}
          <span className="absolute top-[80px] left-[10px] z-0">
            <Image src="/static/images/components/line.svg" alt="line" className="w-1 h-8" width={1} height={35} />
          </span>
          <span className="absolute z-0 bottom-[90px] left-[10px]">
            <Image src="/static/images/components/line.svg" alt="line" className="w-1 h-8" width={1} height={35} />
          </span>
        </div>
      </div>
      <p
        className="flex items-center justify-end gap-3 text-sm cursor-pointer text-shark-100 hover:text-outrageous-orange-500"
        onClick={handleReadMore}
      >
        <span className="text-lg icon-link"></span>
        Read More
      </p>
      <ReadMoreModal />
    </MediumBox>
  )
}

export default Steps
