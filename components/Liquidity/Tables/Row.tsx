'use client'

import Image from 'next/image'
import { TableCell, TableRow, Button } from '@/components/UI'
import MobileRow from './MobileRow'

type IRow = {
  type: string
  APR: string
}
interface RowDataProps {
  row: IRow
  titleHeader?: string
  titleHeader2?: string
  titleButton?: string
  titleButton2?: string
  activeRange?: boolean
}

const RowData = ({ row, titleButton2, titleButton, titleHeader, titleHeader2, activeRange }: RowDataProps) => {
  return (
    <>
      <TableRow className="hidden 2xl:flex">
        <TableCell className={`${activeRange ? 'w-[20%]' : 'w-[30%]'}`}>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Image
                src="/static/images/tokens/FNX.svg"
                alt="token"
                className="rounded-full w-7 h-7"
                width={20}
                height={20}
              />
              <Image
                src="/static/images/tokens/ETH.svg"
                alt="token"
                className="-ml-4 rounded-full w-7 h-7"
                width={20}
                height={20}
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-sm text-white">FNX / ETH</h5>
              <div className="flex items-center gap-2">
                {'VOLATILE' === row.type && (
                  <span 
                   className="text-white py-1 px-3 text-xs rounded-lg border bg-shark-400 border-shark-400 ">
                    Volatile Pool{' '}
                  </span>
                )}

                {'CONCENTRATED' === row.type ? (
                  <span
                    className="py-1 px-2  text-xs rounded-lg 
                    bg-green-500 border border-solid border-1 border-green-400 bg-opacity-40 "
                  >
                    Concentrated
                  </span>
                ) : 'STABLE' === row.type ? (
                  <span 
                  className="text-white py-1 px-3 text-xs rounded-lg border bg-shark-400 border-shark-400"
                  >
                    Stable Pool
                  </span>
                ) : null}

                <span className="!py-1 px-3  text-xs text-white border border-solid bg-shark-400 rounded-xl bg-opacity-40 border-1 border-shark-300">
                  0.3%
                </span>
                <Button variant="tertiary" className="!py-1">
                  <span className="icon-info"></span>
                </Button>
              </div>
            </div>
          </div>
        </TableCell>
        {activeRange && (
          <TableCell className={`w-[12%] flex items-center justify-center`}>
            <div className="flex gap-2 items-center">
              <span className="bg-green-600 w-4 h-4 rounded-full border-4 border-black"></span>
              <div className="text-xs flex flex-col">
                <p className="text-shark-100 text-center">Min Price</p>
                <span className="p-2 text-xs text-white border border-solid bg-shark-400 rounded-xl bg-opacity-40 border-1 border-shark-300">
                  $0.00
                </span>
              </div>
              <div className="text-xs flex flex-col">
                <p className="text-shark-100 text-center">Max Price</p>
                <span className="p-2 text-xs text-white border border-solid bg-shark-400 rounded-xl bg-opacity-40 border-1 border-shark-300">
                  $0.00
                </span>
              </div>
            </div>
          </TableCell>
        )}
        <TableCell className={`${activeRange ? 'w-[8%]' : 'w-[10%]'} flex justify-center items-center`}>
          <div className="flex items-center  ">
            <p className="p-2 text-xs text-white border border-solid bg-shark-400 rounded-xl bg-opacity-40 border-1 border-shark-300">
              {row.APR}%
            </p>
          </div>
        </TableCell>

        <TableCell className="w-[15%]">
          <div className="flex flex-col items-end justify-end w-full px-3">
            <p className="mb-1 text-xs text-white">$1,289.863.54</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-xs text-shark-100">
                <Image
                  src="/static/images/tokens/FNX.svg"
                  alt="token"
                  className="w-5 h-5 rounded-full"
                  width={20}
                  height={20}
                />
                2,313,873.46
              </p>
              <p className="flex items-center gap-2 text-xs text-shark-100">
                <Image
                  src="/static/images/tokens/ETH.svg"
                  alt="token"
                  className="w-5 h-5 rounded-full"
                  width={20}
                  height={20}
                />
                225.38
              </p>
            </div>
          </div>
        </TableCell>

        <TableCell className="w-[15%]">
          <div className="flex flex-col items-end justify-end w-full px-3">
            <p className="mb-1 text-xs text-white">$539.863.54</p>
            <div className="flex items-center gap-2">
              <p className="flex items-center gap-2 text-xs text-shark-100">
                <Image
                  src="/static/images/tokens/FNX.svg"
                  alt="token"
                  className="w-5 h-5 rounded-full"
                  width={20}
                  height={20}
                />
                744,621.46
              </p>
              <p className="flex items-center gap-2 text-xs text-shark-100">
                <Image
                  src="/static/images/tokens/ETH.svg"
                  alt="token"
                  className="w-5 h-5 rounded-full"
                  width={20}
                  height={20}
                />
                132.49
              </p>
            </div>
          </div>
        </TableCell>

        <TableCell className="w-[15%]">
          <div className="flex flex-col items-end justify-end w-full px-3">
            <p className="mb-1 text-xs text-white">$98.751.23</p>
            <div className="flex items-center gap-2">
              <p className="flex items-center gap-2 text-xs text-shark-100">
                <Image
                  src="/static/images/tokens/FNX.svg"
                  alt="token"
                  className="w-5 h-5 rounded-full"
                  width={20}
                  height={20}
                />
                82,334.52
              </p>
              <p className="flex items-center gap-2 text-xs text-shark-100">
                <Image
                  src="/static/images/tokens/ETH.svg"
                  alt="token"
                  className="w-5 h-5 rounded-full"
                  width={20}
                  height={20}
                />
                132.49
              </p>
            </div>
          </div>
        </TableCell>

        <TableCell className="flex justify-end items-center w-[15%]">
          <div className="flex gap-2 w-full">
            {titleButton === '' ? (
              <Button variant="tertiary" className="flex items-center gap-2 w-24 h-9 !text-xs ">
                <span className="icon-info"></span>
                Info
              </Button>
            ) : (
              <Button variant="tertiary" className="flex items-center gap-2 w-24 h-9 !text-xs">
                <span className="icon-coin"></span>
                Claim
              </Button>
            )}

            {titleButton2 === '' ? (
              <Button
                variant="tertiary"
                className="flex items-center gap-2  w-24 h-9 !text-xs"
                href="/liquidity/deposit"
              >
                <span className="icon-circles"></span>
                Deposit
              </Button>
            ) : (
              <Button
                variant="tertiary"
                className="flex items-center gap-2 w-24 h-9 !text-xs "
                href="/liquidity/deposit"
              >
                <span className="icon-logout"></span>
                Manage
              </Button>
            )}
          </div>
        </TableCell>
      </TableRow>
      <MobileRow
        row={row}
        titleHeader={titleHeader}
        titleButton={titleButton}
        titleButton2={titleButton2}
        titleHeader2={titleHeader2}
        activeRange={activeRange}
      />
    </>
  )
}

export default RowData
