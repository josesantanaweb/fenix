'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Search from '@/components/Common/Search'
import Filter from '@/components/Common/Filter'
import RowSkeleton from '../Liquidity/RowSkeleton'
import { TableHead, TableBody, TableCell, TableRow, Button, Pagination } from '@/components/UI'
import { FILTER_OPTIONS } from './data'
const MyLocks = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className="relative">
      <div className="flex items-center gap-2 mb-4">
        <h5 className="text-xl text-white">My Locks</h5>
        <span className="text-xl text-white icon-info"></span>
      </div>
      <div className="flex flex-col justify-between gap-5 mb-10 md:items-center xl:flex-row">
        <Filter />
        <Search className="w-1/3" />
      </div>
      <div className="w-full">
        <TableHead
          items={[
            { text: 'Lock ID', className: 'text-left w-[14.28%]', sortable: true },
            { text: 'Rebase APR ', className: 'text-left w-[14.28%]', sortable: true },
            { text: 'Lock Amount', className: 'text-left w-[14.28%]', sortable: true },
            { text: 'Voting Power', className: 'text-left w-[14.28%]', sortable: true },
            { text: 'Unlock Date', className: 'text-left w-[14.28%]', sortable: true },
            { text: 'Vote Status', className: 'text-left w-[14.28%]', sortable: true },
            { text: 'Action', className: 'text-right w-[14.28%]', sortable: false },
          ]}
        />

        <TableBody>
          {loading ? (
            <>
              {Array.from({ length: 1 }).map((_, index) => (
                <RowSkeleton key={index} />
              ))}
            </>
          ) : (
            <TableRow>
              <TableCell className="w-[14.28%]">
                <div className="flex items-center gap-3">
                  <Image
                    src={'/static/images/tokens/FNX.png'}
                    className="h-[40px] w-[40px]"
                    alt="alternative fenix"
                    width={40}
                    height={40}
                  />
                  <div>
                    <h1 className="text-sm">10923</h1>
                    <p className="text-sm text-spring-green-400">
                      <span className="text-spring-green-400">•</span> Active
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-[14.28%]">
                <div className="flex items-center justify-end">
                  <h1 className="text-sm text-left">34.58%</h1>
                </div>
              </TableCell>
              <TableCell className="w-[14.28%]">
                <div className="flex items-center gap-2">
                  <Image
                    src={`/static/images/tokens/FNX.png`}
                    alt="token"
                    className="w-5 h-5 rounded-full"
                    width={20}
                    height={20}
                  />
                  <p className="text-sm text-white">744,621.46</p>
                </div>
              </TableCell>
              <TableCell className="w-[14.28%]">
                <div className="flex items-center gap-2">
                  <Image
                    src={`/static/images/tokens/FNX.png`}
                    alt="token"
                    className="w-5 h-5 rounded-full"
                    width={20}
                    height={20}
                  />
                  <p className="text-sm text-white">744,621.46</p>
                </div>
              </TableCell>
              <TableCell className="w-[14.28%]">
                <div className="flex items-center gap-2">
                  <p className="text-sm text-white">27-06-2025</p>
                </div>
              </TableCell>
              <TableCell className="w-[14.28%]">
                <span className="flex items-center justify-center px-5 py-1 text-white border border-spring-green-400 rounded-xl bg-shark-400">
                  Voted
                </span>
              </TableCell>
              <TableCell className="w-[14.28%]">
                <div className="flex justify-end w-full">
                  <Button variant="tertiary" className="h-[38px] w-[90px]">
                    Manage
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </div>

      <div className="items-center hidden md:flex">
        <p className="text-sm text-shark-100">Showing 2 out of 2 migrations...</p>
        <Pagination className="mx-auto" numberPages={7} />
        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 px-4 transition-colors border rounded-lg border-shark-300 bg-shark-400 bg-opacity-40 hover:bg-outrageous-orange-400">
          <span className="text-lg text-white icon-cog"></span>
        </div>
      </div>
    </div>
  )
}

export default MyLocks