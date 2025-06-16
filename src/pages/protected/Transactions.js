import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../ProjectFeatures/common/headerSlice'
import Transactions from '../../ProjectFeatures/transactions'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Transactions"}))
      }, [])


    return(
        <Transactions />
    )
}

export default InternalPage