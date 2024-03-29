'use client'

import React from 'react'
import Image from 'next/image'

import { Button } from '@/components/UI'
import useStore from '@/store'
import { usePathname } from 'next/navigation'

const AccountHandler = () => {
  const isConnected = useStore((state) => state.isConnected)
  const { setWalletSelectionModal } = useStore()

  const pathname = usePathname()
  const handlerConnectWallet = () => pathname !== '/' && setWalletSelectionModal(true)

  return (
    <div className="flex items-center gap-[15px] w-full xl:w-auto">
      {isConnected && (
        <div className="items-center flex-shrink-0 hidden gap-2 xl:flex">
          <Image src="/static/images/tokens/ETH.svg" className="w-6 h-6" alt="logo" width={24} height={24} />
          <p className="text-xs text-white">1.987 ETH</p>
        </div>
      )}
      <div className="flex w-full xl:w-auto">
        {isConnected ? (
          <div className="flex w-full xl:w-auto gap-2 md:gap-5 md:py-[13px] md:px-3.5 !pr-0 border rounded-[10px] cursor-pointer bg-shark-900 border-shark-400 bg-opacity-40 hover:bg-opacity-10 group">
            <div className="w-full flex items-center gap-2.5">
              <div className="relative flex items-center justify-center w-10 md:w-12 h-10 md:h-12 rounded-[10px] bg-shark-400 bg-opacity-40">
                <span className="text-[17px] icon-wallet text-outrageous-orange-500"></span>

                <Image
                  src="/static/images/wallets/metamask.png"
                  className="absolute bottom-0 right-0 w-6 h-6"
                  alt="logo"
                  width={24}
                  height={24}
                />
              </div>
              <div className="">
                <p className="hidden text-xs font-medium md:block text-shark-100">Welcome</p>
                <p className="flex items-center text-xs text-white">
                  <span className="block w-2 h-2 mr-1.5 bg-green-400 rounded-full"></span>
                  <span className="truncate max-w-[70px] md:max-w-[150px]">0x98b36ab87c6de3c</span>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center flex-shrink-0 px-4 transition-colors border-l border-shark-300 group-hover:border-shark-300">
              <span className="text-base md:text-xl icon-cog text-shark-100 group-hover:text-outrageous-orange-500"></span>
            </div>
          </div>
        ) : (
          <Button onClick={handlerConnectWallet} className="gap-3.5 w-full md:w-[300px] h-[40px] md:h-[49px]">
            <span className="icon-wallet text-md"></span>
            <span className="text-xs md:text-sm">Connect your Wallet</span>
          </Button>
        )}
      </div>
    </div>
  )
}

export default AccountHandler
