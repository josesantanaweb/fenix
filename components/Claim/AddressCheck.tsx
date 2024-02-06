'use client'

import { Button } from '@/components/UI'
import useStore from '@/store'

interface AddressCheckProps {
  migrateStatus: string | undefined
  setMigrateStatus: (status: string) => void
}

const AddressCheck = ({ migrateStatus, setMigrateStatus }: AddressCheckProps) => {
  const isConnected = useStore((state) => state.isConnected)

  const handlerMigrateCheck = () => setMigrateStatus('wrong')

  return (
    <div className="flex items-center gap-4 md:w-2/3 px-5 py-4 box-large">
      <div className="flex items-center gap-5">
        <p className="text-sm text-shark-100">Wallet Address</p>
        <span className="px-3 py-1 text-sm border rounded-lg text-shark-100 bg-shark-400 border-shark-300">
          {isConnected ? '0x878dfbs83fabc3x97d3469743d4E7' : '-'}
        </span>
      </div>
      {!migrateStatus && isConnected && (
        <Button className="!py-2" onClick={handlerMigrateCheck}>
          Check
        </Button>
      )}
      {migrateStatus === 'success' && (
        <div className="flex items-center gap-3">
          <Button variant="tertiary" className="!py-2 !text-green-500 hover:!text-white" onClick={handlerMigrateCheck}>
            Check
          </Button>
          <span className="icon-check text-2xl text-green-500"></span>
        </div>
      )}
      {migrateStatus === 'wrong' && (
        <div className="flex items-center gap-3">
          <Button variant="tertiary" className="!py-2 !text-red-500 hover:!text-white" onClick={handlerMigrateCheck}>
            Check
          </Button>
          <span className="icon-x-circle text-2xl text-red-500"></span>
        </div>
      )}
    </div>
  )
}

export default AddressCheck
